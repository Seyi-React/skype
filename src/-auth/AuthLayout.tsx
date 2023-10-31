import { Outlet, Navigate } from "react-router-dom";
import imageSign from "../assets/signup.png";

const AuthLayout = () => {
  const isAuthenticated = false;
  return (
    <div>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <section className="flex flex-1 justify-between items-center py-50 gap-5">
            <Outlet />
          
          <img
            src={imageSign}
            alt="sign-up-image"
            className="hidden md:block h-screen w-1/2 object-cover bg-no-repeat"
          />
          </section>
        </>
      )}
    </div>
  );
};

export default AuthLayout;
