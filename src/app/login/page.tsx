"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  Input,
  Button,
  Link,
  Image,
} from "@nextui-org/react";

type Props = {};

export default function Login({}: Props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleSubmit() {
    //Do something here to check login info is valid
    console.log("Email: ", email);
    console.log("Password: ", password);
  }

  return (
    <div className="border h-full min-h-screen bg-gradient-to-r from-lightBlue to-mediumBlue">
      <div className="flex flex-col items-center">
        <Image
          removeWrapper
          src="/rep-match-logo-cropped.svg"
          alt="Logo"
          width={80}
          className="my-10"
        />
        <Card className="w-4/5 aspect-square min-[400px]:aspect-auto max-w-xl mx-auto mb-auto p-2">
          <CardHeader className="flex justify-center">
            <h1 className="text-2xl font-bold text-darkBlue">LOGIN</h1>
          </CardHeader>
          <CardBody className="flex items-center overflow-visible">
            <div className="w-10/12 text-center flex flex-col">
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                variant="underlined"
                label="Email"
                isRequired
              />
              <Divider className="m-2 invisible" />
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                variant="underlined"
                label="Password"
                isRequired
              />
              <Divider className="m-2 invisible" />
              <div className="flex flex-col items-center justify-center">
                <Button
                  radius="sm"
                  className="w-1/2"
                  onClick={() => handleSubmit()}
                >
                  Submit
                </Button>
                <Link href="/Register">or Sign In</Link>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
