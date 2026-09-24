import { Link } from "react-router";
import signinImage from "../assets/stephan-valentin-oqYLdbuJDQU-unsplash.jpg";
import { Logo } from "../components/Logo";

export const Signin = () => {
  return (
    <div className="w-full h-screen flex items-center bg-void">
      <img
        src={signinImage}
        alt="night city"
        className="w-full h-full object-cover flex-1 min-w-0"
      />

      <div className="flex-1 flex items-center justify-center px-8">
        <form className="flex flex-col w-full max-w-sm">
          <div className="[text-shadow:0_0_16px_rgba(255,45,143,0.65)]">
            <Logo />
          </div>

          <h1 className="mt-5 text-4xl font-bold text-ink">Welcome back</h1>
          <p className="mt-2 text-ink-dim">
            Sign in to post what you shot last night.
          </p>

          <label
            htmlFor="email"
            className="mt-8 mb-2 text-sm font-medium text-ink"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            className="rounded-xl border border-line bg-surface px-4 py-3 text-ink placeholder:text-ink-faint outline-none transition-colors focus:border-ice"
          />

          <div className="mt-5 mb-2 flex items-center justify-between">
            <label htmlFor="password" className="text-sm font-medium text-ink">
              Password
            </label>
            <a href="#" className="text-sm text-ink-dim hover:text-ink">
              Forgot password?
            </a>
          </div>
          <input
            id="password"
            type="password"
            className="rounded-xl border border-line bg-surface px-4 py-3 text-ink placeholder:text-ink-faint outline-none transition-colors focus:border-ice"
          />

          <button
            type="submit"
            className="mt-8 rounded-xl bg-neon py-3 font-semibold text-void transition-colors hover:bg-neon-deep"
          >
            Sign in
          </button>

          <div className="my-8 flex items-center gap-4">
            <span className="h-px flex-1 bg-line" />
            <span className="font-mono text-[11px] font-bold tracking-[0.25em] text-neon">
              NEW HERE
            </span>
            <span className="h-px flex-1 bg-line" />
          </div>

          <Link
            to="/signup"
            className="rounded-xl border border-line py-3 text-center font-semibold text-ink transition-colors hover:border-line-hot"
          >
            Create an account
          </Link>
        </form>
      </div>
    </div>
  );
};
