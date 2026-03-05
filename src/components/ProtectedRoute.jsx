import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
    const isAuthenticated = true; // tijdelijk voor test

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return children;
}

export default ProtectedRoute;