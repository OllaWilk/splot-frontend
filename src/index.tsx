import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

// Main application component
import { App } from './App';

// Context providers
import { MainContextProvider } from './context/mainContext';

// Redux store
import store from './redux/store';

// External styles
import './styles/normalize.scss';
import './styles/global.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <MainContextProvider>
        <App />
      </MainContextProvider>
    </Provider>
  </React.StrictMode>
);
