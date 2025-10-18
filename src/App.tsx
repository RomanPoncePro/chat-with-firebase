import { useUser } from "reactfire";
import { Routes, Route } from "react-router";
import NotFoundPage from "./pages/public/not-found.page";
import HomePage from "./pages/public/home.pages";
import RootLayout from "./layouts/root.layout";
import PublicLayout from "./layouts/public.layout";
import AuthLayout from "./layouts/auth.layout";
import AdminLayout from "./layouts/admin.layout";
import LoginPage from "./pages/auth/login.page";
import RegisterPage from "./pages/auth/register.page";
import DashboardPage from "./pages/admin/dashboard.page";
import ProfilePage from "./pages/admin/profile.page";
import ChatPage from "./pages/admin/chat.page";

const App = () => {
  const { data: user } = useUser();
  console.log(user);
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route element={<PublicLayout />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="chat" element={<ChatPage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>
        <Route path="auth" element={<AuthLayout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
      </Route>
    </Routes>
  );
};
export default App;
