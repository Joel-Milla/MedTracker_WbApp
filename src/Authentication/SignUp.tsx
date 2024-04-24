// External functions
import { useState } from "react";
import { Link as LinkRoute } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
// Own functions
import { auth } from "../state/FirebaseConfig/config";
// External components
import { Card, Input, Button, Link } from "@nextui-org/react";
// Own Logo
import MedTrackerIcon from "../assets/logo_medtracker.svg";

// Function that saves when a new user creates an account
function SignUp() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmationPassword, setConfirmationPassword] = useState<string>("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

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
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      // Update the display name of the profile
      await updateProfile(user, {
        displayName: name,
      });
    } catch (error) {
      const errorMessage = error.code;
      setError(errorMessage);
    }
    setLoading(false);
  };
  return (
    <>
      <Card className="flex flex-col gap-4 items-center mx-auto mt-5 p-4 w-96">
        {/* <CardBody> */}
        <img src={MedTrackerIcon} alt="MedTracker logo" className="w-1/3" />
        <h2 className="text-3xl font-semibold text-center mb-4">Sign Up</h2>
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
      <div className="flex gap-3 justify-center mt-5">
        Aready have an account?
        <Link>
          <LinkRoute to="/login">Log In</LinkRoute>
        </Link>
      </div>
    </>
  );
}

export default SignUp;
