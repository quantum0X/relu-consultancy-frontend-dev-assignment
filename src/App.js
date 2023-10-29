import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/PublicRoute'
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <div>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  );
}

export default App;
