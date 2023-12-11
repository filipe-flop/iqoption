import AppSidebar from './components/Sidebar/Sidebar.js';
import { ProSidebarProvider } from "react-pro-sidebar";
import AppHeader from './components/Header/AppHeader.jsx';
import AppFooter from './components/Footer/AppFooter.jsx';
import Content from './components/Content/Content.jsx';

function App() {
  return (
    <div className="App">
      <header>
        <AppHeader />
      </header>
      
      <body>
        <ProSidebarProvider>
          <AppSidebar />
        </ProSidebarProvider>
        <Content />
      </body>

      <footer>
        <AppFooter />
      </footer>
      
    </div>
  );
}

export default App;
