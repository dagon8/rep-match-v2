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
  const [page, setPage] = React.useState();

  return (
    <div className="flex flex-col items-center mb-8">
      <Image
        removeWrapper
        src="https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Hands-PNG/Handshake_Transparent_PNG_Clip_Art_Image.png?m=1507172105"
        alt="Logo"
        width={80}
        className="my-10"
      />
      <Card className="w-4/5 h-fit min-[400px]:aspect-auto max-w-xl mx-auto mb-auto p-2">
        <CardHeader className="flex justify-center">
          <h1 className="text-2xl font-bold">REGISTER</h1>
        </CardHeader>
        <CardBody className="flex items-center overflow-visible">
          <div className="w-10/12 text-center flex flex-col">
            <div className="flex flex-row gap-1">
              <Input
                type="text"
                variant="underlined"
                label="First name"
                isRequired
              />
              <Input
                type="text"
                variant="underlined"
                label="Last name"
                isRequired
              />
            </div>
            <Divider className="m-2 invisible" />
            <Input
              type="tel"
              variant="underlined"
              label="Phone Number"
              isRequired
            />
                        <Divider className="m-2 invisible" />
            <Input
              type="tel"
              variant="underlined"
              label="Company"
              isRequired
            />
            <Divider className="m-2 invisible" />
            <Input type="email" variant="underlined" label="Email" isRequired />
            <Divider className="m-2 invisible" />
            <Input
              type="password"
              variant="underlined"
              label="Password"
              isRequired
            />
            <Divider className="m-2 invisible" />
            <Textarea
              variant="underlined"
              label="Bio"
              placeholder="Enter a bio"
            />
            <Divider className="m-2 invisible" />
            <div className="flex flex-col items-center justify-center">
              <Button radius="sm" className="w-1/2">
                Submit
              </Button>
              <Link href="/Login">or Log in</Link>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
