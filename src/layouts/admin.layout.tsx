import { Navigate, Outlet } from "react-router";
import { useSigninCheck } from "reactfire";

const AdminLayout = () => {
  const { status, data: signInCheckResult, hasEmitted } = useSigninCheck();
  console.log({
    status,
    signInCheckResult,
    hasEmitted,
  });

  // Mientras se carga podemos poner un loading en forma de spiner.
  if (status === "loading" || !hasEmitted) {
    return <div>Loading...</div>;
  }

  // Si el usuario no esta logeado lo deberiamos rederigir.
  if (status === "success" && !signInCheckResult.signedIn) {
    return <Navigate to="/auth/login" replace />;
  }

  return (
    <div>
      AdminLayout
      <Outlet />
    </div>
  );
};
export default AdminLayout;
