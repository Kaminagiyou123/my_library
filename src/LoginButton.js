import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useProductsContext } from "./Context";
const LoginButton = () => {
  const { user, isAuthenticated } = useAuth0();
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { setUser } = useProductsContext();

  useEffect(() => {
    setUser(user);
  }, [user]);
  return !isAuthenticated ? (
    <button onClick={() => loginWithRedirect()} className='login-btn'>
      Log In
    </button>
  ) : (
    <button
      onClick={() => logout({ returnTo: window.location.origin })}
      className='login-btn'
    >
      Hello {user.nickname}, Log Out
    </button>
  );
};
export default LoginButton;
