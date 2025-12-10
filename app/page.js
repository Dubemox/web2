import Link from "next/link";

export const metadata = {
  title: "Home Page | Home",
  description: "Home Dubem",
};

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-10 rounded-xl shadow-lg max-w-md text-center">
        <h1 className="text-3xl font-bold text-gray-800">
          Next.js is working ✅
        </h1>

        <p className="mt-4 text-gray-600">
          Welcome to your login starter project
        </p>

        <Link
          href="/about"
          className="inline-block mt-6 px-6 py-3 rounded-lg 
                     bg-blue-600 text-white font-medium
                     hover:bg-blue-700 transition"
        >
          Go to About →
        </Link>
      </div>
    </main>
  );
}
