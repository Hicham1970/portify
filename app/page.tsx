import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Main from "@/components/main"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <Hero />
      <Main />
    </div>
  );
}
