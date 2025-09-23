// Route protection HOC for role-based access
// Usage: <ProtectedRoute allowedRoles={["manage"]}><Users /></ProtectedRoute>
import { useState } from "react";
import { Navigate } from "react-router-dom";

// You may want to get selectedRole from a global store or context
export default function ProtectedRoute({ allowedRoles, children }) {
    // Example: Replace with your actual role state/store
    const [selectedRole] = useState(localStorage.getItem("selectedRole") || "manage");

    if (!allowedRoles.includes(selectedRole)) {
        return (
            <div className="flex items-center justify-center h-screen">
                <h1 className="text-2xl font-bold text-red-600">Not Authorized</h1>
            </div>
        );
        // Or redirect: <Navigate to="/dashboard" replace />
    }
    return children;
}
