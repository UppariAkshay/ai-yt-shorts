import Image from "next/image";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="px-20">
      <Header />
      <Hero />
    </div>
  );
}
