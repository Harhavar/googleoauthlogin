import React from 'react';
import GoogleLogin from 'react-google-login';

const GoogleLoginButton = () => {
  const responseGoogle = (response) => {
    // Handle the Google login response here
    console.log(response);
    // You can send the Google access token to the backend for verification
    // and further processing
  };

  return (
    <div>
      <h2>Login with Google</h2>
      <GoogleLogin
        clientId="988477168873-b2rfjd1sdfhb8vd84undgotie1hs5mbb.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
};

export default GoogleLoginButton;
