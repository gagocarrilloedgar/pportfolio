import React, { useContext } from "react";
import { GoogleLogin } from "react-google-login";
import { CompanyContext, UserContext } from "hooks";

export const GoogleLogIn = ({ tag }) => {
  const { googleLogin } = useContext(UserContext);
  const { bgoogleLogin } = useContext(CompanyContext);

  const responseGoogle = (response) => {

    if (tag === "company") {
      bgoogleLogin(response, 1)

    } else {
      googleLogin(response, 1);
    }


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
