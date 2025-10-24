"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/navbar";
import Link from "next/link";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const games = [
    {
      id: "candy-crush",
      title: "🍭 Candy Crush",
      creator: "AI Generated",
      plays: "12.5K",
    },
    {
      id: "game-full",
      title: "🎮 Full Candy Crush",
      creator: "Direct Implementation",
      plays: "2.0K",
    },
    {
      id: "sandpack",
      title: "🧪 Sandpack Test",
      creator: "Sandpack",
      plays: "1.0K",
    },
    { id: 1, title: "Pixel Quest", creator: "Alex Dev", plays: "2.3K" },
    { id: 2, title: "Neon Runner", creator: "Game Master", plays: "5.1K" },
    { id: 3, title: "Cyber Maze", creator: "Code Wizard", plays: "1.8K" },
    { id: 4, title: "Digital Dreams", creator: "Creative AI", plays: "3.2K" },
    { id: 5, title: "Glitch Escape", creator: "Tech Artist", plays: "4.5K" },
    { id: 6, title: "Neon Nights", creator: "Pixel Master", plays: "2.9K" },
    { id: 7, title: "Code Breaker", creator: "Dev Studio", plays: "6.1K" },
    { id: 8, title: "Digital Realm", creator: "Game Forge", plays: "3.7K" },
  ];

  const featured = [
    { id: 1, title: "AI Game Studio", desc: "Create games with AI assistance" },
    { id: 2, title: "Instant Deploy", desc: "Deploy your games instantly" },
    {
      id: 3,
      title: "Community Games",
      desc: "Play games made by the community",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground scan-lines">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 min-h-[50vh] flex items-center justify-center">
        {/* TV Flicker Overlay */}
        <div className="absolute inset-0 tv-flicker opacity-20 pointer-events-none"></div>

        <div className="absolute inset-0 opacity-60 tv-flicker">
          {/* Large animated multi-color blobs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-chart-1 rounded-full mix-blend-screen blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-chart-2 rounded-full mix-blend-screen blur-3xl animate-pulse"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-80 h-80 bg-chart-3 rounded-full mix-blend-screen blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-3/4 left-1/6 w-72 h-72 bg-chart-4 rounded-full mix-blend-screen blur-3xl animate-pulse"
            style={{ animationDelay: "1.5s" }}
          ></div>

          {/* Diagonal glitch lines with multi-color */}
          <div className="absolute top-0 left-0 right-0 bottom-0 tv-flicker">
            <div className="absolute top-1/3 left-0 right-0 h-2 bg-linear-to-r from-transparent via-chart-1 to-transparent opacity-70 animate-pulse"></div>
            <div
              className="absolute top-1/2 left-0 right-0 h-1 bg-linear-to-r from-transparent via-chart-2 to-transparent opacity-50 animate-pulse"
              style={{ animationDelay: "0.2s" }}
            ></div>
            <div
              className="absolute top-2/3 left-0 right-0 h-2 bg-linear-to-r from-transparent via-chart-3 to-transparent opacity-60 animate-pulse"
              style={{ animationDelay: "0.4s" }}
            ></div>
            <div
              className="absolute top-1/4 left-0 right-0 h-1 bg-linear-to-r from-transparent via-chart-4 to-transparent opacity-40 animate-pulse"
              style={{ animationDelay: "0.6s" }}
            ></div>
            <div
              className="absolute top-3/4 left-0 right-0 h-2 bg-linear-to-r from-transparent via-chart-5 to-transparent opacity-50 animate-pulse"
              style={{ animationDelay: "0.8s" }}
            ></div>
          </div>

          {/* Vertical glitch distortions with multiple layers */}
          <div className="absolute inset-0 glitch-bg-effect opacity-40 tv-flicker"></div>
          <div className="absolute inset-0 glitch-bg-effect-2 opacity-30 tv-flicker"></div>
          <div className="absolute inset-0 glitch-bg-effect-3 opacity-25 tv-flicker"></div>

          {/* TV Static Effects */}
          <div className="absolute inset-0 tv-static opacity-15 pointer-events-none"></div>
          <div
            className="absolute inset-0 tv-static opacity-10 pointer-events-none"
            style={{ animationDelay: "0.1s" }}
          ></div>
        </div>

        {/* Prominent multi-color scan line overlay with TV-like stuttering */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <div
            className="absolute inset-0 bg-repeat"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, rgba(0, 255, 255, 0.1) 0px, rgba(0, 255, 255, 0.1) 2px, transparent 2px, transparent 4px)",
              animation: "scan-lines 8s linear infinite",
            }}
          ></div>
          <div
            className="absolute inset-0 bg-repeat"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, rgba(255, 107, 107, 0.08) 0px, rgba(255, 107, 107, 0.08) 2px, transparent 2px, transparent 4px)",
              animation: "scan-lines 6s linear infinite reverse",
            }}
          ></div>
          <div
            className="absolute inset-0 bg-repeat"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, rgba(108, 92, 231, 0.06) 0px, rgba(108, 92, 231, 0.06) 2px, transparent 2px, transparent 4px)",
              animation: "scan-lines 10s linear infinite",
            }}
          ></div>
        </div>

        <div className="max-w-2xl mx-auto text-center relative z-10">
          <h1 className="text-6xl md:text-7xl font-black mb-12 glitch-text">
            Create Games with AI
          </h1>

          <div className="relative max-w-2xl mx-auto">
            <div className="neon-border rounded-lg bg-card/50 backdrop-blur-sm border-2 border-accent/60">
              <div className="flex items-center px-6 py-5">
                <input
                  type="text"
                  placeholder="Describe your game idea..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent outline-none w-full text-foreground placeholder-muted-foreground text-lg"
                />
                <button
                  className={`ml-4 shrink-0 p-2 rounded-lg transition-all ${
                    searchQuery.trim()
                      ? "bg-accent text-background hover:bg-accent/90 neon-glow"
                      : "bg-accent/20 text-accent/50 cursor-not-allowed"
                  }`}
                  disabled={!searchQuery.trim()}
                >
                  <ArrowRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 glitch-text">Featured</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((item) => (
            <div
              key={item.id}
              className="group neon-border rounded-lg p-6 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all cursor-pointer"
            >
              <div className="w-12 h-12 bg-accent/20 rounded-lg mb-4 group-hover:bg-accent/40 transition-colors"></div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Games Grid */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold glitch-text">Popular Games</h2>
          <Button variant="ghost" className="text-accent hover:bg-accent/10">
            View All →
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {games.map((game) => (
            <Link
              key={game.id}
              href={
                game.id === "candy-crush"
                  ? "/game"
                  : game.id === "game-full"
                  ? "/game-full"
                  : game.id === "sandpack"
                  ? "/sandpack"
                  : "#"
              }
              className="group relative neon-border rounded-lg overflow-hidden bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all cursor-pointer h-48 block"
            >
              {/* Game Thumbnail */}
              <div className="absolute inset-0 bg-linear-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-between p-4">
                <div>
                  <h3 className="font-bold text-sm mb-1 line-clamp-2">
                    {game.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {game.creator}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    {game.plays} plays
                  </span>
                  <Play className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
