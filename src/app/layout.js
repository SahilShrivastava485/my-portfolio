// src/app/layout.js

import '../styles/globals.css'; // Import Tailwind CSS and global styles
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Sahil Shrivastava Portfolio',
  description: 'Frontend Engineer Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
