# Build With Stylus - Hackathon Website

A modern, responsive hackathon website built with React, Vite, and Tailwind CSS. This website serves as a platform for the "Build With Stylus" hackathon, providing information about the event, registration, submissions, and resources for participants.

## Features

- Responsive design that works on all devices
- Modern UI with smooth animations using Framer Motion
- Modular component architecture
- Registration and submission forms
- Interactive sections for tracks, prizes, timeline, and more
- FAQ section with expandable questions
- Community section with WhatsApp integration
- About section with organizer information

## Project Structure

```
src/
├── assets/          # Static assets like images and icons
├── components/      # Reusable UI components
│   ├── common/      # Common UI components (Button, Card, etc.)
│   ├── layout/      # Layout components (Header, Footer)
│   └── sections/    # Page sections (Hero, Overview, etc.)
├── context/         # React context for state management
├── hooks/           # Custom React hooks
├── pages/           # Page components
├── utils/           # Utility functions
├── App.jsx          # Main App component
└── main.jsx         # Entry point
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/build-with-stylus.git
   cd build-with-stylus
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Customization

### Styling

The project uses Tailwind CSS for styling. You can customize the theme by editing the `tailwind.config.js` file.

### Content

Most of the content is stored in the component files. To update the content, edit the respective component files in the `src/components/sections` directory.

## Building for Production

```bash
npm run build
# or
yarn build
```

The build output will be in the `dist` directory.

## Technologies Used

- [React](https://reactjs.org/) - UI library
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [React Router](https://reactrouter.com/) - Routing
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- Design inspiration from various hackathon websites
- Icons from React Icons
- Fonts from Google Fonts
