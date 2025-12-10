import Link from "next/link";

export const metadata = {
  title: "Register",
};

export default function RegisterPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white dark:bg-slate-900
      rounded-2xl shadow-xl p-8
      animate-[fadeIn_0.6s_ease-out]">

        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-800 text-center">
          Create Account 🚀
        </h1>
        <p className="text-gray-500 text-center mt-2">
          Sign up to get started
        </p>

        {/* Form */}
        <form className="mt-8 space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3
                         focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              type="email"
              placeholder="John@gmail.com"
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3
                         focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3
                         focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required              
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3
                         focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium
                       hover:bg-indigo-700 transition"
          >
            Create Account
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-indigo-600 font-medium hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </main>
  );
}
