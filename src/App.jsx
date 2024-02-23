import { StrictMode, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { HomePage } from './components/consuming-app/page/home-page/HomePage';
import { AppStateProvider } from './components/consuming-app/smart/app-state/AppStateProvider';
import LayoutComponentTestPage from './components/consuming-app/page/layout-component-test-page/LayoutComponentTestPage';

const App = () => {
  return (
    <StrictMode>
      <AppStateProvider>
        {/*<HomePage />*/}
        <LayoutComponentTestPage />
      </AppStateProvider>
    </StrictMode>
  );
};

export default App;
