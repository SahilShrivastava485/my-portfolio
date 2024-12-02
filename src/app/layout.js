// src/app/layout.js

import '../styles/globals.css'; // Import Tailwind CSS and global styles
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Head from 'next/head';

export const metadata = {
  title: 'Sahil Shrivastava Portfolio',
  description: 'Software Engineer Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <img src="/favicon.png" alt="Sahil Shrivastava Logo"/>
      </Head>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
