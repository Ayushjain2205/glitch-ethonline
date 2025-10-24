"use client";

import { useState, useEffect } from "react";
import {
  SandpackProvider,
  SandpackLayout,
  SandpackPreview,
} from "@codesandbox/sandpack-react";
import { Navbar } from "@/components/navbar";

export default function GamePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [gameCode, setGameCode] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGameCode = async () => {
      try {
        const response = await fetch("/api/game-code?id=candy-crush");
        if (!response.ok) {
          throw new Error("Failed to fetch game code");
        }
        const data = await response.json();
        setGameCode(data.code);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setIsLoading(false);
      }
    };

    fetchGameCode();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent mx-auto mb-4"></div>
          <p className="text-text">Loading game...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500 mb-4">Error: {error}</p>
          <button
            onClick={() => window.location.reload()}
            className="pixelated-button px-4 py-2"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Glitchy Background Effect */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large animated gradient orbs */}
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s", animationDuration: "3s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s", animationDuration: "4s" }}
        ></div>

        {/* Scanline effect */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(6, 182, 212, 0.3) 2px, rgba(6, 182, 212, 0.3) 4px)",
          }}
        ></div>

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Navbar - Same as Homepage */}
      <Navbar />

      {/* Mobile-Sized Sandpack Container */}
      <div className="flex justify-center p-8 relative z-10">
        <div className="mx-auto">
          {/* Top Header Section */}
          <div className="w-[350px] bg-gradient-to-r from-gray-800 to-gray-900 rounded-t-3xl px-6 py-3 flex items-center justify-center border border-cyan-500/30 shadow-xl shadow-cyan-500/20">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-xl">🗺️</span>
              </div>
              <h1 className="text-white text-lg font-semibold">Geo Crush</h1>
            </div>
          </div>

          {/* Game Container */}
          <div
            className="w-full h-full p-0 shadow-2xl shadow-cyan-500/30 border-x border-cyan-500/20"
            style={{ width: "350px", height: "567px" }}
          >
            <style jsx>{`
              :global(.sp-wrapper) {
                width: 350px !important;
                height: 567px !important;
              }
              :global(.sp-layout) {
                width: 350px !important;
                height: 567px !important;
              }
              :global(.sp-preview) {
                width: 350px !important;
                height: 567px !important;
              }
              :global(.sp-preview-iframe) {
                width: 350px !important;
                height: 567px !important;
              }
              :global(.sp-preview-iframe body) {
                margin: 0 !important;
                padding: 0 !important;
              }
              :global(.sp-preview-iframe html) {
                margin: 0 !important;
                padding: 0 !important;
              }
            `}</style>
            <SandpackProvider
              template="react"
              files={{
                "/App.js": {
                  code: gameCode,
                },
                "/styles.css": `body {
                        margin: 0 !important;
                        padding: 0 !important;
                      }
                    `,
              }}
              options={{
                autorun: true,
              }}
              theme="dark"
            >
              <SandpackLayout>
                <SandpackPreview
                  showRefreshButton={false}
                  showOpenInCodeSandbox={false}
                />
              </SandpackLayout>
            </SandpackProvider>
          </div>

          {/* Bottom Info Section */}
          <div className="w-[350px] bg-gradient-to-r from-gray-800 to-gray-900 rounded-b-3xl px-6 py-5 border border-cyan-500/30 border-t-0 shadow-xl shadow-cyan-500/20">
            <div className="flex items-center justify-between text-gray-300 text-sm mb-5">
              <div className="flex items-center gap-5">
                <span className="flex items-center gap-1.5">▶ 2M plays</span>
                <span className="flex items-center gap-1.5">👍 7K</span>
              </div>
              <div className="flex items-center gap-5">
                <span className="flex items-center gap-1.5">💬 1</span>
                <span className="flex items-center gap-1.5">👥 194K</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden bg-gradient-to-br from-orange-400 to-pink-400 flex-shrink-0">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Elliestock"
                  alt="Creator"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-white font-semibold text-base">
                  Geo Crush
                </h2>
                <p className="text-gray-400 text-sm">@Elliestock</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
