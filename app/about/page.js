export const metadata = {
  title: "About Page | About",
  description: "About Dubem",
};

export default function About() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="bg-white max-w-md p-10 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-indigo-700">
          About Page
        </h1>

        <p className="mt-4 text-gray-700 leading-relaxed">
          This project is built with Next.js App Router and styled using
          Tailwind CSS. It will soon include authentication and protected
          routes.
        </p>

        <a
          href="/"
          className="inline-block mt-6 text-indigo-600 font-medium hover:underline"
        >
          ← Back to Home
        </a>
      </div>
    </main>
  );
}
