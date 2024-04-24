// External functions
import { Link as LinkRoute } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
// Own functions
import { auth } from "../state/FirebaseConfig/config";
// Own components
import { Card, Input, Button, Link } from "@nextui-org/react";
// Own Logo
import MedTrackerIcon from "../assets/logo_medtracker.svg";

function LogIn() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!(email || password)) {
      return setError("Fill all the values");
    }

    try {
      setError("");
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
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
        <h2 className="text-3xl font-semibold text-center mb-4">Log In</h2>
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
        <Button
          color="primary"
          isLoading={loading}
          onClick={handleSubmit}
          className="w-full"
        >
          Log In
        </Button>
        <div className="text-red-600">
          {error ? <h1>{error}</h1> : <h1></h1>}
        </div>
        {/* </CardBody> */}
      </Card>
      <div className="flex gap-3 justify-center mt-5">
        Create an account?
        <Link>
          <LinkRoute to="/signup">Sign Up</LinkRoute>
        </Link>
      </div>
    </>
  );
}

export default LogIn;
