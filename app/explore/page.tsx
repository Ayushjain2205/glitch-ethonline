import { Navbar } from "@/components/navbar";

export default function Explore() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 glitch-text">Explore Games</h1>
        <p className="text-muted-foreground">
          Discover amazing games created by the community.
        </p>
      </main>
    </div>
  );
}
