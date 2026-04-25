/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './lib/AuthContext';
import { SplashScreen } from './components/SplashScreen';
import { LoginPage } from './components/LoginPage';
import { HomePage } from './components/HomePage';
import { GymDetailsPage } from './components/GymDetailsPage';
import { ComparePage } from './components/ComparePage';
import { SearchPage } from './components/SearchPage';
import { DashboardPage } from './components/DashboardPage';
import { CheckoutPage } from './components/CheckoutPage';
import { OwnerPanel } from './components/OwnerPanel';
import { AdminPanel } from './components/AdminPanel';
import { Navbar } from './components/Navbar';
import { AIRecommendation } from './components/AIRecommendation';

const AuthenticatedRoutes = () => {
  const { user, profile, loading } = useAuth();
  
  if (loading) return (
    <div className="h-screen w-screen flex items-center justify-center bg-dark-bg">
      <div className="w-12 h-12 border-4 border-neon-green/10 border-t-neon-green rounded-full animate-spin" />
    </div>
  );

  if (!user) return <LoginPage />;

  return (
    <div className="min-h-screen relative max-w-md mx-auto bg-dark-bg border-x border-white/5">
      <Routes>
        <Route path="/" element={
          <>
            <AIRecommendation />
            <HomePage />
          </>
        } />
        <Route path="/gym/:id" element={<GymDetailsPage />} />
        <Route path="/compare" element={<ComparePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/checkout/:gymId" element={<CheckoutPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/owner" element={<OwnerPanel />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Navbar />
    </div>
  );
};

import { LanguageProvider } from './lib/i18n';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  return (
    <LanguageProvider>
      <BrowserRouter>
        <AuthProvider>
          <AuthenticatedRoutes />
        </AuthProvider>
      </BrowserRouter>
    </LanguageProvider>
  );
}


