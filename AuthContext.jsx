import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [showSignIn, setShowSignIn] = useState(false);
  const [signInMode, setSignInMode] = useState('login');
  const [userType, setUserType] = useState('farmer');
  const [loading, setLoading] = useState(false);

  // Check for existing auth on app load
  useEffect(() => {
    const savedUser = localStorage.getItem('agrikarbo_user');
    const savedToken = localStorage.getItem('agrikarbo_token');
    
    if (savedUser && savedToken) {
      setUser(JSON.parse(savedUser));
      setIsLoggedIn(true);
    }
  }, []);

  // Original modal-based sign in (for existing SignInModal)
  const handleSignIn = (formData) => {
    const email = formData.get('email');
    const password = formData.get('password');
    const name = formData.get('name');
    
    if (email && password) {
      const userData = {
        id: Date.now(),
        name: signInMode === 'login' ? 'Rajesh Kumar' : name,
        email: email,
        userType: userType
      };

      // Save to localStorage
      localStorage.setItem('agrikarbo_user', JSON.stringify(userData));
      localStorage.setItem('agrikarbo_token', 'fake-token-' + Date.now());

      setUser(userData);
      setIsLoggedIn(true);
      setShowSignIn(false);
      return true;
    }
    return false;
  };

  // New login function for separate login page
  const login = async (email, password) => {
    try {
      setLoading(true);
      
      // Simulate API call - replace with your actual backend endpoint
      if (email && password) {
        const userData = {
          id: Date.now(),
          name: 'John Smith', // You can extract this from your backend
          email: email,
          userType: 'farmer' // Default, can be determined from backend
        };

        // Save to localStorage
        localStorage.setItem('agrikarbo_user', JSON.stringify(userData));
        localStorage.setItem('agrikarbo_token', 'fake-token-' + Date.now());

        setUser(userData);
        setIsLoggedIn(true);
        
        return { success: true };
      } else {
        return { success: false, message: 'Invalid credentials' };
      }
    } catch (error) {
      return { success: false, message: 'Login failed. Please try again.' };
    } finally {
      setLoading(false);
    }
  };

  // New signup function for separate signup page
  const signup = async (userData) => {
    try {
      setLoading(true);
      
      // Simulate API call - replace with your actual backend endpoint
      const newUser = {
        id: Date.now(),
        name: userData.name,
        email: userData.email,
        userType: userData.userType || 'farmer'
      };

      // Save to localStorage
      localStorage.setItem('agrikarbo_user', JSON.stringify(newUser));
      localStorage.setItem('agrikarbo_token', 'fake-token-' + Date.now());

      setUser(newUser);
      setIsLoggedIn(true);
      
      return { success: true };
    } catch (error) {
      return { success: false, message: 'Signup failed. Please try again.' };
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem('agrikarbo_user');
    localStorage.removeItem('agrikarbo_token');
    setIsLoggedIn(false);
    setUser(null);
    setShowSignIn(false);
  };

  // Open sign in modal
  const openSignIn = (mode = 'login') => {
    setSignInMode(mode);
    setShowSignIn(true);
  };

  const value = {
    // Legacy properties for existing components
    isLoggedIn,
    user,
    showSignIn,
    signInMode,
    userType,
    setUserType,
    handleSignIn,
    handleLogout,
    openSignIn,
    setShowSignIn,
    setSignInMode,
    
    // New properties for route protection and separate auth pages
    isAuthenticated: isLoggedIn, // Alias for route protection
    loading,
    login,  // For separate login page
    signup, // For separate signup page
    logout: handleLogout // Alias for consistency
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};