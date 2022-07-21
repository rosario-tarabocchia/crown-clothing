import {
  auth,
  signInWithGooglePopUp,
  // signInWithGoogleRedirect,
  creatUserDocumentFromAuth,
} from "../../utilities/firebase/firebase.utilities";
import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
  // useEffect(
  //   () => async () => {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       const userDocRef = await creatUserDocumentFromAuth(response.user);
  //     }
  //   },
  //   []
  // );

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp();
    const userDocRef = await creatUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>SIGN IN PAGE</h1>
      <button onClick={logGoogleUser}>Sign In With Google</button>
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign In With Google Redirect
      </button> */}
      <SignUpForm />
    </div>
  );
};

export default SignIn;
