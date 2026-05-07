import Image from "next/image";

export const metadata = {
  title: "About Page | About",
  description: "About Dubem",
};

export default function About() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-3xl bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-8 animate-[fadeIn_0.6s_ease-out]">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-10">
          <div className="flex-shrink-0 rounded-3xl bg-indigo-50 dark:bg-indigo-900/20 p-6">
            <div className="relative h-28 w-28 rounded-full overflow-hidden border-4 border-white bg-slate-100 shadow-inner">
              <Image
                src="/logo_light.png"
                alt="Profile image"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-indigo-600 dark:text-indigo-400">About</p>
              <h1 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">Hi, I'm Dubem.</h1>
            </div>

            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p className="leading-relaxed">
                This project is a personal web app built with Next.js App Router and Tailwind CSS. It showcases a clean, responsive structure while preparing for future authentication and protected routes.
              </p>
              <p className="leading-relaxed">
                My goal is to build a polished, user-friendly experience for visitors and users alike, with a strong focus on performance, accessibility, and maintainable UI.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-5">
              <p className="text-sm font-semibold text-slate-900 dark:text-white">What you'll find here</p>
              <ul className="mt-3 space-y-2 text-slate-700 dark:text-slate-300">
                <li>• App Router pages with clean navigation</li>
                <li>• Tailwind CSS styling and responsive layout</li>
                <li>• Authentication and protected route support coming soon</li>
              </ul>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-5">
                <p className="text-sm font-semibold text-slate-900 dark:text-white">Vision</p>
                <p className="mt-2 text-slate-700 dark:text-slate-300 leading-relaxed">
                  Build a modern app that feels effortless to use, easy to scale, and ready for real users.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-5">
                <p className="text-sm font-semibold text-slate-900 dark:text-white">Tech</p>
                <p className="mt-2 text-slate-700 dark:text-slate-300 leading-relaxed">
                  Next.js, Tailwind CSS, and planned auth support make this project an excellent foundation for growth.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="/"
                className="inline-flex items-center rounded-full bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700"
              >
                ← Back to Home
              </a>
              <a
                href="mailto:hello@example.com"
                className="inline-flex items-center rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-5 py-3 text-sm font-semibold text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700"
              >
                Contact me
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
