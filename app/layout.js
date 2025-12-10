import Navbar from "../components/Navbar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-slate-900 dark:to-slate-800">
        <Navbar />
        {/* Page content */}
        <div className="pt-32">
          {children}
        </div>

      </body>
    </html>
  );
}
