'use client'
import React from 'react'
import {Button, Link, Image, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuToggle, NavbarMenuItem, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Avatar} from "@nextui-org/react";

type Props = {
    pageName: string
}

export default function NavBar(props: Props) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    {name:"My Meetings", page:"/MyMeetings"},
    {name:"Subscriptions", page:"/Subscriptions"},
    {name:"Booking", page:"/Booking"},
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <Image
          removeWrapper
          src="https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Hands-PNG/Handshake_Transparent_PNG_Clip_Art_Image.png?m=1507172105"
          alt='Logo'
          width={30}
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">REPMATCH</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem isActive={item.name === (props.pageName) ? true : false}>
            <Link
              color={item.name === (props.pageName) ? "primary" : "foreground"}
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
              name="Jason Hughes"
              size="sm"
              src="https://api.dicebear.com/7.x/lorelei/svg"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">admin@test.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="logout" color="danger" href='/Login'>
              Logout
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              color={
                item.name === (props.pageName) ? "primary" : "foreground"
              }
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
 )
}