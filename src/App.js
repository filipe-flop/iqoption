import Page from './pages/Page';

import { ThemeProvider } from './pages/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Page />
      </div>
    </ThemeProvider>
  );
}

export default App;
