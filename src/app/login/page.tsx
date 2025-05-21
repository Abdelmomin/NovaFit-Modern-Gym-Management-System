"use client";
import { RiUserLine, RiLockPasswordLine } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Handle login logic
    console.log({ email, password, rememberMe });
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#031625]">
      {/* Navbar would go here */}

      <div className="flex items-center justify-center flex-grow p-4">
        <div className="flex w-full max-w-4xl bg-[#031625] shadow-[0_0_20px_5px_rgba(239,214,126,0.3)] rounded-3xl border border-[#EFD67E] overflow-hidden">
          {/* Login Form Section */}
          <div className="w-full md:w-1/2 px-8 py-12">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-[#EFD67E] rounded-lg flex items-center justify-center">
                <img src="/icons/logo.svg" alt="Logo" className="w-12 h-12" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-center text-[#EFD67E] mb-8">
              IronHive
            </h3>

            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div>
                  <label
                    className="block text-lg text-[#EFD67E] mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <RiUserLine className="text-[#EFD67E] text-xl" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-[#112136] text-[#EFD67E] rounded-lg border border-[#EFD67E]/30 focus:border-[#EFD67E]/70 focus:outline-none"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block text-lg text-[#EFD67E] mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <RiLockPasswordLine className="text-[#EFD67E] text-xl" />
                    </div>
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-[#112136] text-[#EFD67E] rounded-lg border border-[#EFD67E]/30 focus:border-[#EFD67E]/70 focus:outline-none"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="remember"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-4 h-4 text-[#EFD67E] bg-[#112136] border-[#EFD67E] rounded focus:ring-[#EFD67E]"
                    />
                    <label
                      htmlFor="remember"
                      className="ml-2 text-sm text-[#90a8c6]"
                    >
                      Remember me
                    </label>
                  </div>
                  <Link
                    href="/forgot-password"
                    className="text-sm text-[#EFD67E] hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#EFD67E] text-[#031625] font-semibold rounded-lg hover:bg-[#D4B85F] transition-all duration-200 flex items-center justify-center gap-2"
                >
                  Login <FaArrowRight />
                </button>

                <div className="text-center text-[#90a8c6]">
                  New to IronHive?{" "}
                  <Link
                    href="/register"
                    className="text-[#EFD67E] hover:underline"
                  >
                    Create an account
                  </Link>
                </div>

                <div className="flex items-center justify-center gap-4 mt-6">
                  <button className="p-2 bg-[#EFD67E] rounded-lg hover:bg-[#D4B85F] transition">
                    <img
                      src="/icons/google.svg"
                      alt="Google"
                      className="w-6 h-6"
                    />
                  </button>
                  <button className="p-2 bg-[#EFD67E] rounded-lg hover:bg-[#D4B85F] transition">
                    <img
                      src="/icons/facebook.svg"
                      alt="Facebook"
                      className="w-6 h-6"
                    />
                  </button>
                  <button className="p-2 bg-[#EFD67E] rounded-lg hover:bg-[#D4B85F] transition">
                    <img src="/icons/x.svg" alt="Twitter" className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Image Section */}
          <div className="hidden md:block w-1/2 relative">
            <div className="absolute inset-0 bg-[#EFD67E] opacity-10"></div>
            <img
              src="/images/gym.jpg"
              alt="Gym"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
