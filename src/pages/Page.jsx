import AppSidebar from '../components/Sidebar/Sidebar.js';
import { ProSidebarProvider } from "react-pro-sidebar";
import { Router, Route, Routes } from 'react-router-dom';

import AppHeader from '../components/Header/AppHeader.jsx';
import AppFooter from '../components/Footer/AppFooter.jsx';
import { PageContent } from './PageContent.jsx';
import Content1 from './Content1.jsx';
import Content2 from './Content2.jsx';

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
                <Routes>
                    <Route path='/navio' element={<Content1 />} />
                    <Route path='/patio' element={<Content2 />} />
                    <Route path='/' element={<PageContent />} />
                </Routes>
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
