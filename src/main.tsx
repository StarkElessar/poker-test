import { createRoot } from 'react-dom/client';

import { App } from './app';

import './global.scss';


const container = document.getElementById('root')!;

createRoot(container).render(<App />);
