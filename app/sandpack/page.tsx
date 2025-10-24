"use client";

import {
  SandpackProvider,
  SandpackLayout,
  SandpackPreview,
} from "@codesandbox/sandpack-react";

export default function SandpackPage() {
  return (
    <div className="h-screen bg-background">
      <h1 className="text-2xl font-bold text-center p-4 text-foreground">
        Sandpack Test
      </h1>
      <div className="h-[calc(100vh-100px)]">
        <SandpackProvider
          template="react"
          files={{
            "/App.js": {
              code: `import React, { useState } from 'react';

export default function App() {
  const [score, setScore] = useState(0);

  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Arial, sans-serif"
    }}>
      <h1 style={{ color: "white", fontSize: "32px", marginBottom: "20px" }}>
        🍭 Candy Crush
      </h1>
      <div style={{ color: "white", fontSize: "24px", marginBottom: "20px" }}>
        Score: {score}
      </div>
      <button
        onClick={() => setScore(score + 10)}
        style={{
          background: "linear-gradient(45deg, #FF6B6B, #FF8E53)",
          color: "white",
          border: "none",
          padding: "15px 30px",
          borderRadius: "25px",
          fontSize: "18px",
          fontWeight: "bold",
          cursor: "pointer",
          boxShadow: "0 4px 15px rgba(0,0,0,0.3)"
        }}
      >
        Click for Points! 🍭
      </button>
    </div>
  );
}`,
            },
          }}
          options={{
            showNavigator: false,
            showRefreshButton: true,
            showTabs: false,
            showLineNumbers: false,
            showInlineErrors: true,
            wrapContent: true,
            editorHeight: 0,
            autorun: true,
            recompileMode: "delayed",
            recompileDelay: 300,
            showConsole: true,
            showConsoleButton: true,
            layout: "preview",
            showReadOnly: false,
          }}
          theme="dark"
        >
          <SandpackLayout>
            <SandpackPreview />
          </SandpackLayout>
        </SandpackProvider>
      </div>
    </div>
  );
}
