import { Navigate } from 'react-router-dom';
import useStore from '../../store/useStore';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useStore();

  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }

  return children;
};

export default ProtectedRoute;