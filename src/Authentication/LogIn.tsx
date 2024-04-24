// External components
import { Card, Input } from "@nextui-org/react";
import { useState } from "react";

function LogIn() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmationPassword, setConfirmationPassword] = useState<string>("");

  const [loading, setLoading] = useState(false);

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
          label="Password"
          value={confirmationPassword}
          onValueChange={setConfirmationPassword}
          className="w-full"
        />
        <Button color="primary" isLoading={loading} className="w-full">
          Sign Up
        </Button>
        <div className="text-red-600"></div>
        {/* </CardBody> */}
      </Card>
      <div className="w-full text-center mt-2">
        Aready have an account? Log In
      </div>
    </>
  );
}

export default LogIn;
