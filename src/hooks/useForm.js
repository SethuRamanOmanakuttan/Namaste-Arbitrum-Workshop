import { useState } from 'react';

/**
 * Custom hook for handling form state and validation
 * @param {Object} initialValues - Initial form values
 * @param {Function} validate - Optional validation function
 * @param {Function} onSubmit - Function to call on form submission
 * @returns {Object} Form handling methods and state
 */
const useForm = (initialValues = {}, validate = null, onSubmit = null) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  /**
   * Handle input change
   * @param {Event} e - Input change event
   */
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    // Handle different input types
    const inputValue = type === 'checkbox' ? checked : value;
    
    setValues((prev) => ({
      ...prev,
      [name]: inputValue,
    }));
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: null,
      }));
    }
  };

  /**
   * Reset form to initial values or new values
   * @param {Object} newValues - Optional new values to reset to
   */
  const resetForm = (newValues = initialValues) => {
    setValues(newValues);
    setErrors({});
    setSubmitStatus(null);
  };

  /**
   * Handle form submission
   * @param {Event} e - Form submission event
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form if validation function is provided
    if (validate) {
      const validationErrors = validate(values);
      setErrors(validationErrors);
      
      // Stop submission if there are errors
      if (Object.keys(validationErrors).length > 0) {
        return;
      }
    }
    
    setIsSubmitting(true);
    
    try {
      // Call onSubmit if provided
      if (onSubmit) {
        const result = await onSubmit(values);
        setSubmitStatus({
          success: true,
          message: result?.message || 'Form submitted successfully!',
          data: result,
        });
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: error.message || 'An error occurred. Please try again.',
        error,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    values,
    setValues,
    errors,
    setErrors,
    handleChange,
    handleSubmit,
    resetForm,
    isSubmitting,
    submitStatus,
    setSubmitStatus,
  };
};

export default useForm;
