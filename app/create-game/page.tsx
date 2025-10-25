"use client";

import { useState, useEffect } from "react";
import {
  SandpackProvider,
  SandpackLayout,
  SandpackPreview,
} from "@codesandbox/sandpack-react";
import { Navbar } from "@/components/navbar";
import {
  Send,
  Sparkles,
  MessageSquare,
  Image,
  Gift,
  Music,
  ImageIcon,
  Palette,
  Upload,
} from "lucide-react";

export default function GamePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [gameCode, setGameCode] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [chatMessage, setChatMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [activeTab, setActiveTab] = useState("chat");

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

  const handleSendMessage = () => {
    if (!chatMessage.trim()) return;
    setChatHistory([...chatHistory, { type: "user", message: chatMessage }]);
    setChatMessage("");
    // Simulate AI response
    setTimeout(() => {
      setChatHistory((prev) => [
        ...prev,
        {
          type: "ai",
          message:
            "I can help you modify the game. What would you like to change?",
        },
      ]);
    }, 1000);
  };

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
    <div className="h-screen bg-background relative overflow-hidden flex flex-col">
      {/* Glitchy Background Effect */}
      <div className="absolute inset-0 pointer-events-none z-0">
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

        {/* Horizontal glitch lines */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute top-[20%] left-0 right-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-70 animate-pulse"></div>
          <div
            className="absolute top-[30%] left-0 right-0 w-full h-[3px] bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-60 animate-pulse"
            style={{ animationDelay: "0.2s" }}
          ></div>
          <div
            className="absolute top-[45%] left-0 right-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-70 animate-pulse"
            style={{ animationDelay: "0.4s" }}
          ></div>
          <div
            className="absolute top-[60%] left-0 right-0 w-full h-[3px] bg-gradient-to-r from-transparent via-pink-400 to-transparent opacity-60 animate-pulse"
            style={{ animationDelay: "0.6s" }}
          ></div>
          <div
            className="absolute top-[75%] left-0 right-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50 animate-pulse"
            style={{ animationDelay: "0.8s" }}
          ></div>
        </div>

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

      {/* Navbar */}
      <div className="flex-shrink-0">
        <Navbar />
      </div>

      {/* Main Content - Sidebar + Game */}
      <div className="flex flex-1 relative z-10 overflow-hidden">
        {/* Left Sidebar - Chat Panel */}
        <div className="w-[380px] flex-shrink-0 bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-sm border-r border-gray-700/50 flex flex-col">
          {/* Tabs Header */}
          <div className="flex border-b border-gray-700/50 flex-shrink-0">
            <button
              onClick={() => setActiveTab("chat")}
              className={`flex-1 flex items-center justify-center gap-2 px-6 py-4 transition-colors ${
                activeTab === "chat"
                  ? "bg-gray-800/50 text-cyan-400 border-b-2 border-cyan-400"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              <span className="text-sm font-medium">Chat</span>
            </button>
            <button
              onClick={() => setActiveTab("assets")}
              className={`flex-1 flex items-center justify-center gap-2 px-6 py-4 transition-colors ${
                activeTab === "assets"
                  ? "bg-gray-800/50 text-cyan-400 border-b-2 border-cyan-400"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <Image className="w-4 h-4" />
              <span className="text-sm font-medium">Assets</span>
            </button>
            <button
              onClick={() => setActiveTab("items")}
              className={`flex-1 flex items-center justify-center gap-2 px-6 py-4 transition-colors ${
                activeTab === "items"
                  ? "bg-gray-800/50 text-cyan-400 border-b-2 border-cyan-400"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <Gift className="w-4 h-4" />
              <span className="text-sm font-medium">Items</span>
            </button>
          </div>

          {/* Tab Content - Scrollable */}
          <div className="flex-1 overflow-y-auto">
            {activeTab === "chat" && (
              <div className="flex flex-col h-full">
                {/* Chat Messages */}
                <div className="flex-1 p-6 space-y-4 overflow-y-auto">
                  {chatHistory.length === 0 ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <MessageSquare className="w-8 h-8 text-cyan-400" />
                      </div>
                      <h4 className="text-white font-semibold mb-2">
                        Start a conversation
                      </h4>
                      <p className="text-gray-400 text-sm px-4">
                        Ask me to modify the game, add new features, change
                        colors, or fix any issues.
                      </p>
                    </div>
                  ) : (
                    chatHistory.map((msg, index) => (
                      <div
                        key={index}
                        className={`flex ${
                          msg.type === "user" ? "justify-end" : "justify-start"
                        }`}
                      >
                        <div
                          className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                            msg.type === "user"
                              ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white"
                              : "bg-gray-800 text-gray-200 border border-gray-700"
                          }`}
                        >
                          <p className="text-sm">{msg.message}</p>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}

            {activeTab === "assets" && (
              <div className="p-6 space-y-6">
                {/* Sound Effects Section */}
                <div>
                  <h3 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
                    <Music className="w-4 h-4 text-cyan-400" />
                    Sound Effects
                  </h3>

                  <div className="space-y-2">
                    {/* Place Sound */}
                    <div>
                      <label className="text-xs text-gray-400 mb-1 block">
                        Place Sound
                      </label>
                      <div className="relative">
                        <input
                          type="file"
                          accept="audio/*"
                          className="hidden"
                          id="place-sound"
                        />
                        <label
                          htmlFor="place-sound"
                          className="flex items-center gap-2 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 cursor-pointer hover:border-cyan-500 transition-colors"
                        >
                          <Upload className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-400 flex-1 truncate">
                            click.mp3 (default)
                          </span>
                        </label>
                      </div>
                    </div>

                    {/* Win Sound */}
                    <div>
                      <label className="text-xs text-gray-400 mb-1 block">
                        Win Sound
                      </label>
                      <div className="relative">
                        <input
                          type="file"
                          accept="audio/*"
                          className="hidden"
                          id="win-sound"
                        />
                        <label
                          htmlFor="win-sound"
                          className="flex items-center gap-2 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 cursor-pointer hover:border-cyan-500 transition-colors"
                        >
                          <Upload className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-400 flex-1 truncate">
                            victory.mp3 (default)
                          </span>
                        </label>
                      </div>
                    </div>

                    {/* Draw Sound */}
                    <div>
                      <label className="text-xs text-gray-400 mb-1 block">
                        Draw Sound
                      </label>
                      <div className="relative">
                        <input
                          type="file"
                          accept="audio/*"
                          className="hidden"
                          id="draw-sound"
                        />
                        <label
                          htmlFor="draw-sound"
                          className="flex items-center gap-2 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 cursor-pointer hover:border-cyan-500 transition-colors"
                        >
                          <Upload className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-400 flex-1 truncate">
                            draw.mp3 (default)
                          </span>
                        </label>
                      </div>
                    </div>

                    {/* Background Music */}
                    <div>
                      <label className="text-xs text-gray-400 mb-1 block">
                        Background Music
                      </label>
                      <div className="relative">
                        <input
                          type="file"
                          accept="audio/*"
                          className="hidden"
                          id="bg-music"
                        />
                        <label
                          htmlFor="bg-music"
                          className="flex items-center gap-2 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 cursor-pointer hover:border-cyan-500 transition-colors"
                        >
                          <Upload className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-400 flex-1 truncate">
                            No file selected
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sprites Section */}
                <div>
                  <h3 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
                    <ImageIcon className="w-4 h-4 text-purple-400" />
                    Sprites
                  </h3>
                  <div className="relative">
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      className="hidden"
                      id="sprites"
                    />
                    <label
                      htmlFor="sprites"
                      className="flex items-center gap-2 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 cursor-pointer hover:border-purple-500 transition-colors"
                    >
                      <Upload className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-400 flex-1">
                        Click to upload sprites
                      </span>
                    </label>
                  </div>
                </div>

                {/* Background Section */}
                <div>
                  <h3 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
                    <Palette className="w-4 h-4 text-pink-400" />
                    Background
                  </h3>
                  <div className="relative">
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      id="background"
                    />
                    <label
                      htmlFor="background"
                      className="flex items-center gap-2 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 cursor-pointer hover:border-pink-500 transition-colors"
                    >
                      <Upload className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-400 flex-1">
                        gradient.png (default)
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "items" && (
              <div className="p-6 space-y-3">
                {/* Replay Item */}
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-3 hover:border-cyan-500/50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-xl">
                        🔄
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">Replay</p>
                        <p className="text-xs text-gray-400">
                          Start level again
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-yellow-400 text-base">💰</span>
                      <input
                        type="number"
                        defaultValue="50"
                        className="w-14 bg-gray-900 border border-gray-700 rounded px-2 py-1 text-xs text-white outline-none focus:border-cyan-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Hint Item */}
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-3 hover:border-cyan-500/50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-xl">
                        💡
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">Hint</p>
                        <p className="text-xs text-gray-400">Show next move</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-yellow-400 text-base">💰</span>
                      <input
                        type="number"
                        defaultValue="25"
                        className="w-14 bg-gray-900 border border-gray-700 rounded px-2 py-1 text-xs text-white outline-none focus:border-cyan-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Extra Moves */}
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-3 hover:border-cyan-500/50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center text-xl">
                        ➕
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">
                          Extra Moves
                        </p>
                        <p className="text-xs text-gray-400">
                          Add 5 more moves
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-yellow-400 text-base">💰</span>
                      <input
                        type="number"
                        defaultValue="100"
                        className="w-14 bg-gray-900 border border-gray-700 rounded px-2 py-1 text-xs text-white outline-none focus:border-cyan-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Power-Up */}
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-3 hover:border-cyan-500/50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center text-xl">
                        ⚡
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">
                          Power-Up
                        </p>
                        <p className="text-xs text-gray-400">
                          Clear entire row
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-yellow-400 text-base">💰</span>
                      <input
                        type="number"
                        defaultValue="150"
                        className="w-14 bg-gray-900 border border-gray-700 rounded px-2 py-1 text-xs text-white outline-none focus:border-cyan-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Undo Move */}
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-3 hover:border-cyan-500/50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center text-xl">
                        ↩️
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">Undo</p>
                        <p className="text-xs text-gray-400">
                          Revert last move
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-yellow-400 text-base">💰</span>
                      <input
                        type="number"
                        defaultValue="30"
                        className="w-14 bg-gray-900 border border-gray-700 rounded px-2 py-1 text-xs text-white outline-none focus:border-cyan-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Chat Input (only show in chat tab) */}
          {activeTab === "chat" && (
            <div className="border-t border-gray-700/50 p-6 flex-shrink-0">
              <div className="flex items-end gap-2 bg-gray-800/50 rounded-xl px-4 py-3 border border-gray-700/50 focus-within:border-cyan-500/50 transition-colors">
                <input
                  type="text"
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 bg-transparent text-white text-sm outline-none placeholder-gray-500"
                />
                <button className="text-gray-500 hover:text-cyan-400 transition-colors p-1">
                  <Sparkles className="w-5 h-5" />
                </button>
                <button
                  onClick={handleSendMessage}
                  disabled={!chatMessage.trim()}
                  className={`transition-colors p-1 ${
                    chatMessage.trim()
                      ? "text-cyan-400 hover:text-cyan-300"
                      : "text-gray-600 cursor-not-allowed"
                  }`}
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right Side - Game Output */}
        <div className="flex-1 flex items-center justify-center p-8 overflow-auto">
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
    </div>
  );
}
