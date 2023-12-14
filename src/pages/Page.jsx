// Page.js
import React from 'react';
import { useTheme } from './ThemeContext';
import AppSidebar from '../components/Sidebar/Sidebar.js';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { Router, Route, Routes } from 'react-router-dom';
import AppHeader from '../components/Header/AppHeader.jsx';
import AppFooter from '../components/Footer/AppFooter.jsx';
import { PageContent } from './PageContent.jsx';
import Content1 from './Content1.jsx';
import Content2 from './Content2.jsx';
import {
  GlobalStyle,
  ContainerGeral,
  ContainerBody,
  ContainerSidebar,
  ContainerContent,
  ContainerFooter,
} from './styles.js';

const Page = () => {
  const { isDarkTheme } = useTheme();

  return (
    <>
      <GlobalStyle />
      <ContainerGeral isDarkTheme={isDarkTheme}>
        <header>
          <AppHeader />
        </header>

        <ContainerBody>
          <ContainerSidebar>
            <ProSidebarProvider>
              <AppSidebar />
            </ProSidebarProvider>
          </ContainerSidebar>

          <ContainerContent>
            <Routes>
              <Route path='/navio' element={<Content1 />} />
              <Route path='/patio' element={<Content2 />} />
              <Route path='/' element={<PageContent />} />
            </Routes>
          </ContainerContent>
        </ContainerBody>

        <ContainerFooter>
          <footer>
            <AppFooter />
          </footer>
        </ContainerFooter>
      </ContainerGeral>
    </>
  );
};

export default Page;
