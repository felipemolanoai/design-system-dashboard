import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// Design system CSS — must be imported before any app styles
// 1. Token definitions (CSS custom properties like --color-button-primary-bg)
import 'juntos-ds/dist/tokens/index.css';
// 2. Component styles (generated from CSS Modules in juntos-ds)
import 'juntos-ds/dist/style.css';
// 3. Global reset (box-sizing, body font-family) — after tokens so var() resolves
import './styles/global.css';
import App from './App';
// The '!' after getElementById tells TypeScript "I know this element exists,
// it won't be null" — safe here because index.html always has <div id="root">
ReactDOM.createRoot(document.getElementById('root')).render(_jsx(React.StrictMode, { children: _jsx(BrowserRouter, { children: _jsx(App, {}) }) }));
