import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button
} from "@nextui-org/react";

const Navbars = () => {
  return (
    <div>
      <Navbar position="static" className='border border-divider'>
        <NavbarBrand>
          <p className="font-bold text-inherit">Sambel Ijok</p>
        </NavbarBrand>

        <NavbarContent justify="end">

          <NavbarItem>
            <a href="">
              <Button color="secondary">
                Kontak
              </Button>
            </a>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
};

export default Navbars;