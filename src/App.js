import Page from './pages/Page';

import { ThemeProvider } from './pages/ThemeContext';
import { LanguageProvider } from './pages/LanguageContext';

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
