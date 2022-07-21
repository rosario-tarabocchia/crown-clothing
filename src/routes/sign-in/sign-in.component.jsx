import { signInWithGooglePopUp, creatUserDocumentFromAuth  } from "../../utilities/firebase/firebase.utilities";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp();
    const userDocRef = await creatUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>SIGN IN PAGE</h1>
      <button onClick={logGoogleUser}>Sign In With Google</button>
    </div>
  );
};

export default SignIn;
