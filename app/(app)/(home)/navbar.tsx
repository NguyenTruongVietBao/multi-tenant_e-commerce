'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuIcon } from 'lucide-react';
import { Poppins } from 'next/font/google';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { NavbarSidebar } from './navbar-sidebar';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['700'],
});

interface NavbarItemProps {
  href: string;
  isActive?: boolean;
  children?: React.ReactNode;
}

const NavbarItem = ({ href, children, isActive }: NavbarItemProps) => {
  return (
    <Button
      asChild
      variant="outline"
      className={cn(
        'bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent px-3.5 text-lg',
        isActive && 'bg-primary text-white hover:bg-black hover:text-white'
      )}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
};

const navbarItems = [
  {
    children: 'Home',
    href: '/',
  },
  {
    children: 'Products',
    href: '/products',
  },
  {
    children: 'About',
    href: '/about',
  },
  {
    children: 'Contact',
    href: '/contact',
  },
];

export const Navbar = () => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <nav className={`flex justify-between items-center font-medium bg-white h-20 border-b`}>
      {/* Logo */}
      <Link href="/" className="pl-6 flex items-center">
        <span className={cn(poppins.className, 'text-5xl font-semibold')}>vb.store</span>
      </Link>
      <NavbarSidebar items={navbarItems} open={isSidebarOpen} onOpenChange={setIsSidebarOpen} />
      {/* Navbar Items */}
      <div className="items-center gap-10 hidden lg:flex">
        {navbarItems.map((item) => (
          <NavbarItem key={item.href} href={item.href} isActive={isActive(item.href)}>
            {item.children}
          </NavbarItem>
        ))}
      </div>
      {/* Login & Register */}
      <div className="hidden lg:flex">
        <Button
          variant="secondary"
          className="border-l border-t-0 border-b-0 border-r-0 px-12 h-full bg-white hover:bg-pink-400 transition-colors text-lg"
        >
          <Link href="/login">Login</Link>
        </Button>
        <Button className="border-l border-t-0 border-b-0 border-r-0 px-12 h-full bg-black hover:bg-pink-400 transition-colors text-lg">
          <Link href="/start-selling">Start Selling</Link>
        </Button>
      </div>
      <div className="flex lg:hidden ">
        <Button
          variant="ghost"
          className="size-12 border-transparent bg-white "
          onClick={() => setIsSidebarOpen(true)}
        >
          <MenuIcon className="w-6 h-6" />
        </Button>
      </div>
    </nav>
  );
};
