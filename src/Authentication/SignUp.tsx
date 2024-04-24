// Redux connection
import { RootState } from "../state/store";
import { useDispatch, useSelector } from "react-redux";
// External functions
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
// Own functions
import { auth } from "../state/FirebaseConfig/config";
import { setCurrentUser } from "../state/Slices/currentUserSlice";
// External components
import { Card, Input, Button } from "@nextui-org/react";

// Function that saves when a new user creates an account
function SignUp() {
  const currentUser = useSelector(
    (state: RootState) => state.currentUser.currentUser
  );
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmationPassword, setConfirmationPassword] = useState<string>("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Initialize the navigate function
  const navigate = useNavigate();
  // Use this hook to dispatch actions to redux
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = checkCurrentUser();
    return unsubscribe;
  });
  const checkCurrentUser = () => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        // User is signed in
        dispatch(setCurrentUser(user.email ?? ""));
        navigate("/pacientes");
      } else {
        // User is signed out
        console.log(user);
        dispatch(setCurrentUser(""));
      }
      return unsubscribe;
    });
  };

  // navigate when there is a current user
  if (currentUser) {
    checkCurrentUser();
  }

  const handleSubmit = async () => {
    if (!(name || email || password || confirmationPassword)) {
      return setError("Fill all the values");
    }
    if (password != confirmationPassword) {
      return setError("Password do not match");
    }

    try {
      setError("");
      setLoading(true);
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      const errorMessage = error.code;
      setError(errorMessage);
    }
    setLoading(false);
    checkCurrentUser();
  };
  return (
    <>
      <Card className="flex flex-col gap-4 items-center mx-auto mt-5 p-4 w-96">
        {/* <CardBody> */}
        <h2 className="text-center mb-4">Sign up</h2>
        <Input
          isRequired
          type="text"
          label="Name"
          value={name}
          onValueChange={setName}
          className="w-full"
        />
        <Input
          isRequired
          type="email"
          label="Email"
          value={email}
          onValueChange={setEmail}
          className="w-full"
        />
        <Input
          isRequired
          type="password"
          label="Password"
          value={password}
          onValueChange={setPassword}
          className="w-full"
        />
        <Input
          isRequired
          type="password"
          label="Confirm Password"
          value={confirmationPassword}
          onValueChange={setConfirmationPassword}
          className="w-full"
        />
        <Button
          color="primary"
          isLoading={loading}
          onClick={handleSubmit}
          className="w-full"
        >
          Sign Up
        </Button>
        <div className="text-red-600">
          {error ? <h1>{error}</h1> : <h1></h1>}
        </div>
        {/* </CardBody> */}
      </Card>
      <div className="w-full text-center mt-2">
        Aready have an account? Log In
      </div>
    </>
  );
}

export default SignUp;
