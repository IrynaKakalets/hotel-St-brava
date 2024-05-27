import { createRoot } from 'react-dom/client';
import './template.css';
import './custom.css';
import { HomePage } from './pages/HomePage';

createRoot(
  document.querySelector('#app'),
).render(<HomePage />);
