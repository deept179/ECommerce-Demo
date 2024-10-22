import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import LoginPage from './components/Login';
import Dashboard from './components/Dashboard';
import Users from './components/Users';
import Products from './components/Products';
import NavBar from './components/NavBar';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <nav>
        </nav>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/users" element={
            <ProtectedRoute>
              <Users />
            </ProtectedRoute>
          } />
          <Route path="/products" element={
            <ProtectedRoute>
              <Products />
            </ProtectedRoute>
          } />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem('user');
  const password = localStorage.getItem('password');

  // console.log('usename -------> : ', isAuthenticated);

  return (user === "stackdot" && password === "stackdot") ? children : <Navigate to="/" />;
};

export default App;
