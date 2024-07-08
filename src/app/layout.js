import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Anas Next Hero",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <h6>Logo</h6>
          <ul>
            <li>about</li>
            <li>service</li>
            <li>contact</li>
            <li></li>
          </ul>
        </nav>
        {children}
        <footer>
          This is footer
        </footer>
        </body>
    </html>
  );
}