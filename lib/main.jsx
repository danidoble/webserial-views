"use client";
import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const prefix = import.meta.env.VITE_PREFIX_VERSION ?? 'v4';

if (typeof document !== 'undefined') {
    let container = document.getElementById(`webserial-${prefix}`);
    if (!container) {
        container = document.createElement('div');
        container.id = `webserial-${prefix}`;
        container.classList.add('ws-container');
        document.body.append(container);
    }

    createRoot(container).render(
        <StrictMode>
            <App/>
        </StrictMode>,
    )
}