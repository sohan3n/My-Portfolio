"use client";

import React, { useEffect, useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@heroui/navbar";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import { useTheme } from "next-themes";

export default function PortfolioNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by ensuring component is mounted before rendering theme icons
  useEffect(() => {
    setMounted(true);
  }, []);

  const menuItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="xl"
      className="bg-slate-900/80 backdrop-blur-md border-b border-slate-800"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-slate-200"
        />
        <NavbarBrand>
          <Link href="/" className="font-bold text-slate-100 text-xl tracking-tight">
            Mainur Zaman
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link
              href={item.href}
              className="text-slate-300 hover:text-emerald-400 transition-colors text-sm font-medium"
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="flex items-center gap-2">
          {mounted && (
            <Button
              isIconOnly
              variant="light"
              aria-label="Toggle theme"
              onPress={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-slate-300 hover:text-emerald-400"
            >
              {theme === "dark" ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5"/>
                  <line x1="12" y1="1" x2="12" y2="3"/>
                  <line x1="12" y1="21" x2="12" y2="23"/>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                  <line x1="1" y1="12" x2="3" y2="12"/>
                  <line x1="21" y1="12" x2="23" y2="12"/>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
              )}
            </Button>
          )}
          <Button
            as={Link}
            href="#contact"
            variant="flat"
            className="bg-emerald-500/10 text-emerald-400 font-medium hidden sm:flex"
          >
            Let's Talk
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="bg-slate-900/95 pt-6">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              className="w-full text-slate-300 hover:text-emerald-400 text-lg"
              href={item.href}
              size="lg"
              onPress={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}