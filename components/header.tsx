"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import { Menu, X, Phone, ChevronRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Startseite", href: "/" },
  { name: "Leistungen", href: "/leistungen" },
  { name: "Philosophie", href: "/philosophie" },
  { name: "Richtlinien", href: "/richtlinien" },
  { name: "Zertifikate", href: "/zertifikate" },
  { name: "Kontakt", href: "/kontakt" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMenu = useCallback(() => {
    setMobileMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  useEffect(() => {
    if (mobileMenuOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        document.body.style.overflow = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        closeMenu();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [mobileMenuOpen, closeMenu]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 bg-background/98 backdrop-blur-md transition-shadow duration-300",
        scrolled
          ? "shadow-md border-b border-border"
          : "shadow-sm border-b border-border/70",
      )}
    >
      {/* Desktop top bar */}
      <div className="hidden lg:block bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-between py-2 text-xs">
            <span className="opacity-95 whitespace-nowrap">
              Zertifizierter Entsorgungsfachbetrieb seit über 30 Jahren
            </span>
            <div className="flex items-center gap-6">
              <a
                href="tel:+4962186239700"
                className="flex items-center gap-2 opacity-95 hover:opacity-100 transition-opacity whitespace-nowrap"
              >
                <Phone className="w-3 h-3" />
                0621 – 86 23 97-0
              </a>
              <a
                href="mailto:dispo@an-electrorecycling.de"
                className="flex items-center gap-2 opacity-95 hover:opacity-100 transition-opacity whitespace-nowrap"
              >
                <Mail className="w-3 h-3" />
                dispo@an-electrorecycling.de
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-3 lg:py-4 lg:px-8">
        <div className="flex lg:flex-1">
          <Link
            href="/"
            className="flex items-center rounded-sm bg-white px-2.5 py-2 shadow-lg ring-1 ring-black/5 transition-transform duration-300 hover:-translate-y-0.5"
            aria-label="A&N Electrorecycling Startseite"
          >
            <Image
              src="/logo.png"
              alt="A&N Electrorecycling Logo"
              width={220}
              height={60}
              className="h-8 w-auto sm:h-10 lg:h-12 logo-3d"
              priority
            />
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="relative z-50 inline-flex items-center justify-center rounded-lg p-3 text-foreground hover:bg-secondary active:bg-secondary/80 transition-colors touch-manipulation"
            onClick={toggleMenu}
            aria-label={mobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <span className="sr-only">
              {mobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
            </span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary",
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-3 lg:items-center">
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md"
          >
            <Link href="/kontakt">
              Anfrage stellen
              <ChevronRight className="ml-1 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </nav>

      {/* Mobile menu backdrop */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 bg-foreground/40 backdrop-blur-sm transition-opacity duration-300 z-40",
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={cn(
          "lg:hidden fixed inset-y-0 right-0 w-full max-w-sm bg-background border-l border-border shadow-2xl z-50 transition-transform duration-300 ease-out",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
        aria-modal={mobileMenuOpen}
        role="dialog"
        aria-label="Hauptnavigation"
      >
        <div className="flex flex-col h-full overflow-y-auto">
          {/* Mobile menu header */}
          <div className="flex items-center justify-between px-4 py-4 border-b border-border">
            <Link
              href="/"
              className="flex items-center rounded-sm bg-white px-2 py-2 shadow-md ring-1 ring-black/5"
              onClick={closeMenu}
            >
              <Image
                src="/logo.png"
                alt="A&N Electrorecycling Logo"
                width={160}
                height={45}
                className="h-9 w-auto logo-3d"
              />
            </Link>
            <button
              type="button"
              className="rounded-lg p-3 text-foreground hover:bg-secondary active:bg-secondary/80 transition-colors touch-manipulation"
              onClick={closeMenu}
              aria-label="Menü schließen"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Navigation links */}
          <nav className="flex-1 px-4 py-6" aria-label="Mobile navigation">
            <ul className="space-y-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className={cn(
                        "flex items-center justify-between rounded-lg px-4 py-4 text-base font-medium transition-colors touch-manipulation",
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "text-foreground hover:bg-secondary active:bg-secondary/80",
                      )}
                    >
                      {item.name}
                      <ChevronRight
                        className={cn(
                          "w-5 h-5",
                          isActive ? "text-primary" : "text-muted-foreground",
                        )}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Contact section */}
          <div className="px-4 py-6 border-t border-border space-y-4 bg-muted/30">
            <a
              href="tel:+4962186239700"
              className="flex items-center gap-3 p-3 rounded-lg bg-background hover:bg-secondary active:bg-secondary/80 transition-colors touch-manipulation"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 flex-shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground">
                  Rufen Sie uns an
                </p>
                <p className="font-medium text-foreground whitespace-nowrap">
                  0621 – 86 23 97-0
                </p>
              </div>
            </a>

            <a
              href="mailto:dispo@an-electrorecycling.de"
              className="flex items-center gap-3 p-3 rounded-lg bg-background hover:bg-secondary active:bg-secondary/80 transition-colors touch-manipulation"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 flex-shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground">E-Mail</p>
                <p className="font-medium text-foreground text-sm break-all">
                  dispo@an-electrorecycling.de
                </p>
              </div>
            </a>

            <Button
              asChild
              className="w-full bg-primary hover:bg-primary/90 active:bg-primary/80 text-primary-foreground h-14 text-base touch-manipulation"
            >
              <Link href="/kontakt" onClick={closeMenu}>
                Anfrage stellen
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
