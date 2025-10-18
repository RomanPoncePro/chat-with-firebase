import { Outlet, Navigate } from "react-router";
import { useSigninCheck } from "reactfire";
const AuthLayout = () => {
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
  if (status === "success" && signInCheckResult.signedIn) {
    return <Navigate to="/admin" replace />;
  }
  return (
    <div>
      AuthLayout
      <Outlet />
    </div>
  );
};
export default AuthLayout;
