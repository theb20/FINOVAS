import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './assets/components/common/ScrollToTop.jsx';
import Loading from './assets/components/common/Loading.jsx';
import { LanguageProvider } from './assets/context/LanguageContext.jsx';
import MainLayout from './assets/components/layout/MainLayout.jsx';

// Lazy loading des pages
const Home = lazy(() => import('./assets/pages/Home.jsx'));
const Contact = lazy(() => import('./assets/pages/Contact.jsx'));
const CookiesPolicy = lazy(() => import('./assets/pages/CookiesPolicy.jsx'));
const LegalNotice = lazy(() => import('./assets/pages/LegalNotice.jsx'));
const PrivacyPolicy = lazy(() => import('./assets/pages/PrivacyPolicy.jsx'));
const TermsConditions = lazy(() => import('./assets/pages/TermsConditions.jsx'));



function App() {

  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/politique-cookies" element={<CookiesPolicy />} />
              <Route path="/mentions-legales" element={<LegalNotice />} />
              <Route path="/politique-confidentialite" element={<PrivacyPolicy />} />
              <Route path="/termes-conditions" element={<TermsConditions />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter> 
    </LanguageProvider>
  );
}

export default App;
