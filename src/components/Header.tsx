import Link from 'next/link';

export default function Header() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-lg font-semibold text-gray-900 hover:text-indigo-600">
            Home
          </Link>
          <Link
            href="/about"
            className="px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
            aria-label="About us page"
          >
            About Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
