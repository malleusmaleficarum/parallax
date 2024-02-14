import { Inter } from 'next/font/google';
import Nav from '@/components/Nav';
import './globals.css';

// const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Parallax',
  description: 'Testing parallax and zoom parallax',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        {/* className={inter.className} */}
        {children}
        {/* <Nav /> */}
      </body>
    </html>
  );
}
