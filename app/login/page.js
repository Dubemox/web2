import Link from "next/link";

export const metadata = {
  title: "Login",
};

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white dark:bg-slate-900
      rounded-2xl shadow-xl p-8
      animate-[fadeIn_0.6s_ease-out]">
        
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-800 text-center">
          Welcome Back 👋
        </h1>
        <p className="text-gray-500 text-center mt-2">
          Login to your account
        </p>

        {/* Form */}
        <form className="mt-8 space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              Remember me
            </label>

            <a href="#" className="text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium
                       hover:bg-blue-700 transition"
          >
            Sign In
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
           <Link
            href="/register"
            className="text-blue-600 font-medium hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </main>
  );
}
