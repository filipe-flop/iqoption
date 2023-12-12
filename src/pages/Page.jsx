import AppSidebar from '../components/Sidebar/Sidebar.js';
import { ProSidebarProvider } from "react-pro-sidebar";
import AppHeader from '../components/Header/AppHeader.jsx';
import AppFooter from '../components/Footer/AppFooter.jsx';
import { PageContent } from './PageContent.jsx';

import styles from './Page.module.css';

export const Page = () => {
  return (
    <div className={styles.containerGeral}>

        <header>
            <AppHeader />
        </header>
      
        <div className={styles.containerBody}>

            <div className={styles.containerSidebar}>
                <ProSidebarProvider>
                    <AppSidebar />
                </ProSidebarProvider>
            </div>

            <div className={styles.containerContent}>
                <PageContent />
            </div>

        </div>

        <div className={styles.containerFooter}>
            <footer>
                <AppFooter />
            </footer>
        </div>
        
      
    </div>
  );
}

export default Page;
