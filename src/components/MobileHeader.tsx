import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

interface MobileHeaderProps {
  onMenuToggle?: () => void;
  title?: string;
}

const MobileHeader = ({ onMenuToggle, title = "Mirran" }: MobileHeaderProps) => {
  return (
    <header className="lg:hidden fixed top-0 left-0 right-0 bg-card border-b border-border p-2 z-50 flex items-center justify-between">
      <div>
        <h2 className="font-serif text-lg md:text-xl font-light text-foreground">
          {title}
        </h2>
        <p className="font-serif text-sm font-normal text-muted-foreground tracking-widest uppercase">
          Digital Gallery
        </p>
      </div>
      {onMenuToggle && (
        <Button
          variant="ghost"
          size="icon"
          onClick={onMenuToggle}
          aria-label="Toggle menu"
        >
          <Menu />
        </Button>
      )}
    </header>
  );
};

export default MobileHeader;
