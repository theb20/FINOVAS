import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './assets/components/common/ScrollToTop.jsx';
import { LanguageProvider } from './assets/context/LanguageContext.jsx';
import MainLayout from './assets/components/layout/MainLayout.jsx';
import Home from './assets/pages/Home.jsx';
import Contact from './assets/pages/Contact.jsx';
import CookiesPolicy from './assets/pages/CookiesPolicy.jsx';
import LegalNotice from './assets/pages/LegalNotice.jsx';
import PrivacyPolicy from './assets/pages/PrivacyPolicy.jsx';
import TermsAndConditions from './assets/pages/TermsConditions.jsx';



function App() {

  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/politique-cookies" element={<CookiesPolicy />} />
            <Route path="/mentions-legales" element={<LegalNotice />} />
            <Route path="/politique-confidentialite" element={<PrivacyPolicy />} />
            <Route path="/termes-conditions" element={<TermsAndConditions />} />
          </Route>
        </Routes>
      </BrowserRouter> 
    </LanguageProvider>
  );
}

export default App;
