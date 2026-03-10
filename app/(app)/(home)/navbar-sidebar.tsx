import { ScrollArea } from '@/components/ui/scroll-area';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import Link from 'next/link';

interface NavbarItem {
  href: string;
  children: React.ReactNode;
}

interface Props {
  items: NavbarItem[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const NavbarSidebar = ({ items, open, onOpenChange }: Props) => {
  const handleClose = () => {
    onOpenChange(false);
  };
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="p-0 transform-none">
        <SheetHeader className="p-4 border-b">
          <div className="flex item-center">
            <SheetTitle>Menu</SheetTitle>
          </div>
        </SheetHeader>
        <ScrollArea className="flex flex-col overflow-y-auto h-full pb-2">
          {items.map((item) => (
            <Link
              href={item.href}
              key={item.href}
              className="p-4 w-full text-left hover:bg-black hover:text-white flex items-center text-base font-medium"
              onClick={handleClose}
            >
              {item.children}
            </Link>
          ))}
          <div className="border-t">
            <Link
              href="/login"
              className="p-4 w-full text-left hover:bg-black hover:text-white flex items-center text-base font-medium"
              onClick={handleClose}
            >
              Login
            </Link>
            <Link
              href="/register"
              className="p-4 w-full text-left hover:bg-black hover:text-white flex items-center text-base font-medium"
              onClick={handleClose}
            >
              Register
            </Link>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};
