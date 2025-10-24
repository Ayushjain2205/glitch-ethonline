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
    <div className="min-h-screen bg-background">
      {/* Navbar - Same as Homepage */}
      <Navbar />
      {/* Mobile-Sized Sandpack Container */}
      <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] p-8">
        <div className="w-[350px] h-[567px] mx-auto">
          <div
            className="w-full h-full p-0"
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
        </div>
      </div>
    </div>
  );
}
