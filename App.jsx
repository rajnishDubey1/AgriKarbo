import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import SignInModal from './components/SignInModal'
import { AuthProvider, useAuth } from './context/AuthContext'

// Existing Pages
import HomePage from './pages/HomePage'
import PlatformPage from './pages/PlatformPage'
import SolutionsPage from './pages/SolutionsPage'
import MarketplacePage from './pages/MarketplacePage'
import AboutPage from './pages/AboutPage'

// New Auth Pages (create these files)
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth()
  return isAuthenticated ? children : <Navigate to="/login" />
}

// Public Route Component (redirect to dashboard if already logged in)
const PublicRoute = ({ children }) => {
  const { isAuthenticated } = useAuth()
  return !isAuthenticated ? children : <Navigate to="/dashboard" />
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50">
          <Routes>
            {/* Public routes with Header and Footer */}
            <Route path="/" element={
              <>
                <Header />
                <main><HomePage /></main>
                <Footer />
              </>
            } />
            <Route path="/platform" element={
              <>
                <Header />
                <main><PlatformPage /></main>
                <Footer />
              </>
            } />
            <Route path="/solutions" element={
              <>
                <Header />
                <main><SolutionsPage /></main>
                <Footer />
              </>
            } />
            <Route path="/marketplace" element={
              <>
                <Header />
                <main><MarketplacePage /></main>
                <Footer />
              </>
            } />
            <Route path="/about" element={
              <>
                <Header />
                <main><AboutPage /></main>
                <Footer />
              </>
            } />
            
            {/* Auth routes - redirect to dashboard if already logged in */}
            <Route path="/login" element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            } />
            <Route path="/signup" element={
              <PublicRoute>
                <SignupPage />
              </PublicRoute>
            } />
            
            
            {/* Catch all route */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          
          {/* Global Sign In Modal */}
          <SignInModal />
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App;