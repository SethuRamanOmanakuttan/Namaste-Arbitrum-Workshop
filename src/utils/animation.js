/**
 * Custom animation utilities for the retro pixel art style
 */

// Custom easing functions
export const easings = {
  // A stepped easing function that creates a pixelated animation effect
  // Using proper framer-motion compatible easing functions
  easeStep: "easeInOut",
  
  // A more pronounced stepped easing with fewer steps
  easeStepHard: "easeIn",
  
  // A bouncy stepped easing
  easeStepBounce: "backOut"
};

// Animation variants for common components
export const pixelAnimations = {
  button: {
    tap: { scale: 0.95, transition: { duration: 0.1, ease: easings.easeStep } },
    hover: { scale: 1.05, transition: { duration: 0.2, ease: easings.easeStep } }
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3, ease: easings.easeStep } }
  },
  slideUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easings.easeStep } }
  }
};
