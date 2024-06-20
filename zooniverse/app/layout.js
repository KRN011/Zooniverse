import { Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'] 
});

export const metadata = {
  title: "Zooniverse",
  description: "A great place for diverse species of animals and birds, also Best Place for visiting and chill out.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>{children}</body>
    </html>
  );
}
