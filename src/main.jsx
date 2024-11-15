import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
let root = document.getElementById('root');
root = createRoot(root);
root.render(
  <App />
  )
