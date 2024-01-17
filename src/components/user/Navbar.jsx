/* eslint-disable no-unused-vars */
import React from "react";
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import AcmeLogo from "../AcmeLogo.jsx";

const NavigationBar = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        "Profile",
        "Dashboard",
        "Activity",
        "Analytics",
        "System",
        "Deployments",
        "My Settings",
        "Team Settings",
        "Help & Feedback",
        "Log Out",
    ];

    return (
        <Navbar
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        maxWidth="xl"
        >
        <NavbarContent className="sm:hidden gap-0" justify="start">
            <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
            <AcmeLogo />
        </NavbarContent>

        <NavbarContent className="hidden sm:block pr-3" justify="center">
            <NavbarBrand>
            <AcmeLogo />
            </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarBrand>
            <AcmeLogo />
            </NavbarBrand>

        </NavbarContent>

        <NavbarContent justify="end">
            <NavbarContent className="hidden">
        <NavbarItem>
            <Link color="foreground" href="#" className="hover:text-[#4F5CDF] font-semibold">
                Tentang
            </Link>
            </NavbarItem>
            <NavbarItem>
            <Link href="#" color="foreground" className="hover:text-[#4F5CDF] font-semibold">
                Layanan
            </Link>
            </NavbarItem>
            <NavbarItem>
            <Link color="foreground" href="#" className="hover:text-[#4F5CDF] font-semibold">
                Tim Kami
            </Link>
            </NavbarItem>
            <NavbarItem>
            <Link color="foreground" href="#" className="hover:text-[#4F5CDF] font-semibold">
                Blog
            </Link>
            </NavbarItem>
            <NavbarItem>
            <Link color="foreground" href="#" className="hover:text-[#4F5CDF] font-semibold">
                FAQ
            </Link>
            </NavbarItem>
            </NavbarContent>
            <NavbarItem>
            <Button as={Link} size="lg" href="#" variant="flat" className="bg-[#4F5CDF] text-cyan-50 rounded-full">
                Diskusi sekarang
            </Button>
            </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
            {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                className="w-full"
                color={
                    index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
                }
                href="#"
                size="lg"
                >
                {item}
                </Link>
            </NavbarMenuItem>
            ))}
        </NavbarMenu>
        </Navbar>
    );
}
export default NavigationBar;
