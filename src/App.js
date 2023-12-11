import AppSidebar from './components/Sidebar/Sidebar.js';
import { ProSidebarProvider } from "react-pro-sidebar";

function App() {
  return (
    <div className="App">
      <ProSidebarProvider>
        <AppSidebar/>
      </ProSidebarProvider>
    </div>
  );
}

export default App;
