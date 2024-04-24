// External libaries
import { Link as LinkRoute } from "react-router-dom";
// External components
import { Card, Input, Button, Link } from "@nextui-org/react";
import { useState } from "react";
// Own Logo
import MedTrackerIcon from "../assets/logo_medtracker.svg";

function LogIn() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [loading, setLoading] = useState(false);

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
        <Button color="primary" isLoading={loading} className="w-full">
          Sign Up
        </Button>
        <div className="text-red-600"></div>
        {/* </CardBody> */}
      </Card>
      <div className="flex gap-3 justify-center mt-5">
        Aready have an account?
        <Link>
          <LinkRoute to="/signup">Sign Up</LinkRoute>
        </Link>
      </div>
    </>
  );
}

export default LogIn;
