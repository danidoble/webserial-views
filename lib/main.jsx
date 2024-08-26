import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const container = document.createElement('div');
const prefix = import.meta.env.VITE_PREFIX;
container.id = `webserial-${prefix}`;

document.body.append(container);

createRoot(container).render(
    <StrictMode>
        <App/>
    </StrictMode>,
)
