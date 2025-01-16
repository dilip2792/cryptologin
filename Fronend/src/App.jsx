import React from 'react';
import { Routes, Route } from "react-router-dom";
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard/Dashboard';
import Transaction from './pages/Transaction/Transaction';
import Support from './pages/Support/Support';
import Signup from './pages/Auth/Signup/Signup';
import Signin from './pages/Auth/Signup/Signin/Signin';
import { AuthProvider } from "./context/AuthProvider";
import PrivateRoute from "./components/PrivateRoute";
import RegisterEmailVerify from './pages/Auth/RegisterEmailVerify/RegisterEmailVerify';
import RegisterSuccess from './pages/Auth/RegisterSuccess/RegisterSuccess';
import ForgotPassword from './pages/Auth/ForgotPassword/ForgotPassword';
import ForgotPasswordSent from './pages/Auth/ForgotPasswordSent/ForgotPasswordSent';
import ResetPasswordSuccess from './pages/ResetPasswordSuccess/ResetPasswordSuccess';
import ResetPassword from './pages/Auth/ResetPassword/ResetPassword';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Public Routes */}
       
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/register-email-verify" element={<RegisterEmailVerify/>}/>
        <Route path="/register-success" element={<RegisterSuccess/>}/>
        <Route path="/forgot-password" element={<ForgotPassword/>}/>
        <Route path="/forgot-success" element={<ForgotPasswordSent/>}/>
        <Route path="/reset-success" element={<ResetPasswordSuccess/>}/>
        <Route path="/reset-password" element={<ResetPassword/>} />
        {/* Private Routes */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/transaction"
          element={
            <PrivateRoute>
              <Transaction />
            </PrivateRoute>
          }
        />
        <Route
          path="/support"
          element={
            <PrivateRoute>
              <Support />
            </PrivateRoute>
          }
        />
       
      </Routes>
      <ToastContainer
        position="top-right" // Position of toast notifications
        autoClose={3000} // Auto close after 3 seconds
        hideProgressBar={false} // Show progress bar
        newestOnTop={false} // Toasts appear in order
        closeOnClick // Close toast on click
        rtl={false} // Support for Right-to-Left languages
        pauseOnFocusLoss // Pause toast timer on focus loss
        draggable // Enable drag to dismiss
        pauseOnHover // Pause toast timer on hover
        theme="light" // Use light or dark theme
      />
    </AuthProvider>
  );
}

export default App;
