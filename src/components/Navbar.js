import Link from 'next/link'

const Navbar = () => (
  <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
    <h1 className="text-3xl font-bold">Sahil Shrivastava</h1>
    <div className="space-x-6">
      <Link href="/" className="text-lg hover:text-yellow-400">Home</Link>
      <Link href="/about" className="text-lg hover:text-yellow-400">About</Link>
      <Link href="/experience" className="text-lg hover:text-yellow-400">Experience</Link>
      <Link href="/education" className="text-lg hover:text-yellow-400">Education</Link>
      <Link href="/contact" className="text-lg hover:text-yellow-400">Contact</Link>
    </div>
  </nav>
);

export default Navbar