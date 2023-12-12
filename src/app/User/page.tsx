import React from "react";
import NavBar from "../components/NavBar";
import {
  Avatar,
  Card,
  CardHeader,
  Input,
  Divider,
  Button,
  Link,
  Textarea,
} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk } from "@fortawesome/free-regular-svg-icons";

type Props = {};

export default function User({}: Props) {
  return (
    <>
      <NavBar pageName="User" />
      <div className="py-24">
        <div className="container m-auto">
          <div>
            <div className="flex items-center gap-5">
              <Avatar radius="sm" size="lg" color="primary" />
              <p className="text-2xl">John Doe</p>
            </div>
            
            <div className="w-7/12 text-center flex flex-col">
              <Input type="text" variant="underlined" label="First name" />
              <Divider className="m-2 invisible" />
              <Input type="text" variant="underlined" label="Last name" />
              <Divider className="m-2 invisible" />
              <Input type="tel" variant="underlined" label="Phone Number" />
              <Divider className="m-2 invisible" />
              <Input type="tel" variant="underlined" label="Company" />
              <Divider className="m-2 invisible" />
              <Input type="email" variant="underlined" label="Email" />
              <Divider className="m-2 invisible" />
              <Input type="password" variant="underlined" label="Password" />
              <Divider className="m-2 invisible" />
              <Textarea
                variant="underlined"
                label="Bio"
                placeholder="Enter a bio"
              />
              <Divider className="m-2 invisible" />
              <Divider className="m-2 invisible" />
              <div className="flex flex-col items-center justify-center">
                <Button
                  radius="sm"
                  className="w-1/3"
                >
                  Save
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
