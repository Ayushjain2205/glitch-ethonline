import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const gameId = searchParams.get("id") || "candy-crush";

    // Read the game code file
    const gameCodePath = path.join(
      process.cwd(),
      "lib",
      "game-code",
      `${gameId}.js`
    );

    if (!fs.existsSync(gameCodePath)) {
      return NextResponse.json(
        { error: "Game code not found" },
        { status: 404 }
      );
    }

    const gameCode = fs.readFileSync(gameCodePath, "utf8");

    // Return the game code with proper formatting
    const response = {
      gameId,
      code: gameCode,
      metadata: {
        name: "Candy Crush",
        description: "Match 3 or more candies to score points!",
        difficulty: "Easy",
        category: "Puzzle",
        estimatedPlayTime: "2-5 minutes",
      },
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error("Error fetching game code:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
