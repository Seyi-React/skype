import { Routes, Route } from "react-router-dom";
import SignInForm from "./-auth/forms/SignInForm";
import { Home } from "./-root/pages";
import SignUp from "./-auth/forms/SignUp";
import AuthLayout from "./-auth/AuthLayout";
import RootLayout from "./-root/RootLayout";

const App: React.FC = () => {
  return (
    <>
      <main className="flex h-screen">
        <Routes>
          {/* Public routes */}
          <Route element={<AuthLayout />}>
            <Route path="/sign-in" element={<SignInForm />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Route>

          {/* Private routes */}
          <Route element={<RootLayout />}>
            <Route
             index element={<Home />} />
          </Route>
        </Routes>
      </main>
    </>
  );
};

export default App;
