import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ['400', '500', '700'] });

export const metadata = {
  title: "Astro calculate",
  description: "Quickly assess product profitability and feasibility to stay ahead in the market",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <body className={`${inter.className} ${poppins.className}`}>
      {children}
      </body>
      </html>
  );
}
