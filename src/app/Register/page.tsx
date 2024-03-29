"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  Input,
  Button,
  Textarea,
  Link,
  Image,
} from "@nextui-org/react";

type Props = {};

export default function Register({}: Props) {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [bio, setBio] = React.useState("");

  function handleSubmit() {
    //Do something here to check registration info is valid
    console.log("firstname: ", firstName);
    console.log("lastname: ", lastName);
    console.log("phone: ", phone);
    console.log("company: ", company);
    console.log("email: ", email);
    console.log("password: ", password);
    console.log("bio: ", bio);
  }

  return (
    <div className="border h-full min-h-screen bg-gradient-to-r from-lightBlue to-mediumBlue">
      <div className="flex flex-col items-center mb-8">
        <Image
          removeWrapper
          src="rep-match-logo-cropped.svg"
          alt="Logo"
          width={80}
          className="my-10"
        />
        <Card className="w-4/5 h-fit min-[400px]:aspect-auto max-w-xl mx-auto mb-auto p-2">
          <CardHeader className="flex justify-center">
            <h1 className="text-2xl font-bold text-darkBlue">REGISTER</h1>
          </CardHeader>
          <CardBody className="flex items-center overflow-visible">
            <div className="w-10/12 text-center flex flex-col">
              <div className="flex flex-row gap-1">
                <Input
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                  variant="underlined"
                  label="First name"
                  isRequired
                />
                <Input
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  type="text"
                  variant="underlined"
                  label="Last name"
                  isRequired
                />
              </div>
              <Divider className="m-2 invisible" />
              <Input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
                variant="underlined"
                label="Phone Number"
                isRequired
              />
              <Divider className="m-2 invisible" />
              <Input
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                type="tel"
                variant="underlined"
                label="Company"
                isRequired
              />
              <Divider className="m-2 invisible" />
              <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" variant="underlined" label="Email" isRequired />
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
              <Textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                variant="underlined"
                label="Bio"
                placeholder="Enter a bio"
              />
              <Divider className="m-2 invisible" />
              <div className="flex flex-col items-center justify-center">
                <Button radius="sm" className="w-1/2" onClick={() => handleSubmit()}>
                  Submit
                </Button>
                <Link href="/Login">or Log in</Link>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
