"use client";

import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import { ConnectButton } from "thirdweb/react";
import { client } from "@/lib/client";

interface NavbarProps {
  className?: string;
}

export function Navbar({ className = "" }: NavbarProps) {
  return (
    <nav
      className={`border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/glitch.svg" alt="Glitch" className="h-10" />
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm">
            Explore
          </Button>
          <Button variant="ghost" size="sm">
            Create
          </Button>
          <ConnectButton client={client} />
        </div>
      </div>
    </nav>
  );
}
