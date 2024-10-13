
import Hero from "./components/hero";
import Link from "next/link";

export default function Home() {
  return (
   <div>
    <Hero />
    <Link href="/about" className="text-white hover:text-gray-300 font-semibold">About Me</Link>
    <Link href="/contact" className="text-white hover:text-gray-300 font-semibold">Contact</Link>
   </div>
  );
}
