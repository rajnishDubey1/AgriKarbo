import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { Leaf, Menu, X, User, LogOut, BarChart3 } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isAuthenticated, user, handleLogout, openSignIn } = useAuth()
  const navigate = useNavigate()

  const navLinks = [
    { name: 'Platform', href: '/platform' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Marketplace', href: '/marketplace' },
    { name: 'About', href: '/about' }
  ]

  const handleSignInClick = () => {
    // Use the modal for quick sign in
    openSignIn('login')
  }

  const handleGetStartedClick = () => {
    // Redirect to signup page for full registration
    navigate('/signup')
  }

  const handleLogoutClick = () => {
    handleLogout()
    navigate('/')
  }

  return (
    <header className="bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-agri-gradient rounded-lg flex items-center justify-center">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">AgriKarbo</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-gray-700 hover:text-agri-green font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <Link
                  to="/dashboard"
                  className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-agri-green font-medium transition-colors"
                >
                  <BarChart3 className="w-4 h-4" />
                  <span>Dashboard</span>
                </Link>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">{user?.name}</div>
                    <div className="text-xs text-gray-500 capitalize">{user?.userType}</div>
                  </div>
                </div>
                <button
                  onClick={handleLogoutClick}
                  className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-red-600 font-medium transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <>
                <button
                  onClick={handleSignInClick}
                  className="px-4 py-2 text-gray-700 hover:text-agri-green font-medium transition-colors"
                >
                  Sign In
                </button>
                <button
                  onClick={handleGetStartedClick}
                  className="px-6 py-2 bg-agri-gradient text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  Get Started
                </button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block px-3 py-2 text-gray-700 hover:text-agri-green font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              
              {isAuthenticated ? (
                <div className="pt-4 border-t border-gray-200 mt-4">
                  <div className="flex items-center px-3 py-2 space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">{user?.name}</div>
                      <div className="text-xs text-gray-500 capitalize">{user?.userType}</div>
                    </div>
                  </div>
                  <Link
                    to="/dashboard"
                    className="block px-3 py-2 text-gray-700 hover:text-agri-green font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={() => {
                      handleLogoutClick()
                      setIsMenuOpen(false)
                    }}
                    className="block w-full text-left px-3 py-2 text-gray-700 hover:text-red-600 font-medium"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="pt-4 border-t border-gray-200 mt-4 space-y-2">
                  <button
                    onClick={() => {
                      handleSignInClick()
                      setIsMenuOpen(false)
                    }}
                    className="block w-full text-left px-3 py-2 text-gray-700 hover:text-agri-green font-medium"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => {
                      handleGetStartedClick()
                      setIsMenuOpen(false)
                    }}
                    className="block mx-3 px-4 py-2 bg-agri-gradient text-white rounded-lg font-medium text-center"
                  >
                    Get Started
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header