import React, { useContext } from "react";
import { GoogleLogin } from "react-google-login";
import { UserContext } from "hooks";

export const GoogleLogIn = () => {
  const { googleLogin } = useContext(UserContext);

  const responseGoogle = (response) => {
    googleLogin(response, 1);
  };

  return (
    <GoogleLogin
      clientId={process.env.REACT_APP_GOOGLE_API}
      buttonText={"Google Login"}
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default GoogleLogIn;
