import Page from './pages/Page';

import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="App">
          <Page />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
