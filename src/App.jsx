import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';

import MainLayout from '@/components/layout/MainLayout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import Pricing from '@/pages/Pricing';
import Contact from '@/pages/Contact';
import Blog from '@/pages/Blog';
import BlogPostPage from '@/pages/BlogPost';
import Legal from '@/pages/industries/Legal';
import Medical from '@/pages/industries/Medical';
import Construction from '@/pages/industries/Construction';
import Retail from '@/pages/industries/Retail';
import RestaurantHospitality from '@/pages/industries/RestaurantHospitality';
import Schools from '@/pages/industries/Schools';
import NonProfit from '@/pages/industries/NonProfit';
import ITBusiness from '@/pages/industries/ITBusiness';

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      navigateToLogin();
      return null;
    }
  }

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPostPage />} />
        <Route path="/industries/legal" element={<Legal />} />
        <Route path="/industries/medical" element={<Medical />} />
        <Route path="/industries/construction" element={<Construction />} />
        <Route path="/industries/retail" element={<Retail />} />
        <Route path="/industries/restaurant-hospitality" element={<RestaurantHospitality />} />
        <Route path="/industries/schools" element={<Schools />} />
        <Route path="/industries/non-profit" element={<NonProfit />} />
        <Route path="/industries/it-business" element={<ITBusiness />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App