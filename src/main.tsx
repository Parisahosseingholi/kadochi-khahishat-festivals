
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add a direction class to the document based on the language (this will be updated by language context)
document.documentElement.classList.add('font-sans', 'antialiased');

createRoot(document.getElementById("root")!).render(<App />);
