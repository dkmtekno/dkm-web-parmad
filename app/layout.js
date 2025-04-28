import Navbar from "./component/Navbar";
import BackgroundVector from "./component/BackgroundVector"; // Import komponen baru
import "./globals.css";
import { Plus_Jakarta_Sans as FontSans } from "next/font/google";
import Footer from "./component/Footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "DKM PARAMADINA",
  description: "NAEEMA",
  icons: "/favicon.ico",
} 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${fontSans.variable} antialiased`}
        style={{ backgroundColor: "#F0F6FF" }}
      >
        <BackgroundVector /> {/* Ganti ini */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
