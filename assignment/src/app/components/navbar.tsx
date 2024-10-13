import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-red-500 p-4 shadow-lg">
            <div className="container mx-auto">
                <ul className="flex space-x-6 justify-center">
                    <li>
                        <Link href="/" className="text-white hover:text-gray-300 font-semibold">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="text-white hover:text-gray-300 font-semibold">
                            About Me
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="text-white hover:text-gray-300 font-semibold">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
