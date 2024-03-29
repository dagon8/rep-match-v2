"use client";
import React from "react";
import {
  Link,
  Image,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarMenuItem,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Avatar,
  Button,
} from "@nextui-org/react";

type Props = {
  pageName: string;
};

export default function NavBar(props: Props) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "My Meetings", page: "/MyMeetings" },
    { name: "Subscriptions", page: "/Subscriptions" },
    { name: "Booking", page: "/Booking" },
    { name: "Messages", page: "/Messages" },
  ];

  return (
    <Navbar className="bg-darkBlue" onMenuOpenChange={setIsMenuOpen} isBordered>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand className="flex flex-row gap-4 items-center justify-start">
          <Image
            removeWrapper
            src="/rep-match-logo-cropped.svg"
            alt="Logo"
            width={40}
          />
          <p className="font-bold text-inherit text-white">REPMATCH</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem
            key={`${item.name}-${index}`}
            isActive={item.name === props.pageName ? true : false}
          >
            <Link
              className="text-white"
              color={item.name === props.pageName ? "primary" : "foreground"}
              href={item.page}
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="primary"
              size="sm"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2 cursor-default">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">admin@test.com</p>
            </DropdownItem>
            <DropdownItem key="settings" href="/User">
                Settings
            </DropdownItem>
            <DropdownItem key="logout" color="danger" href="/Login">
              Logout
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              color={item.name === props.pageName ? "primary" : "foreground"}
              className="w-full"
              href={item.page}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
