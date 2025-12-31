"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Lock, Mail, ArrowRight, Shield } from "lucide-react";

export default function AdminLogin() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simulate login - Replace with actual authentication
    setTimeout(() => {
      // Demo credentials for testing
      if (formData.email === "admin@ephraimcare.com.au" && formData.password === "admin123") {
        // Store login state (replace with proper auth later)
        localStorage.setItem("adminLoggedIn", "true");
        localStorage.setItem("adminEmail", formData.email);
        router.push("/admin");
      } else {
        setError("Invalid email or password. Try: admin@ephraimcare.com.au / admin123");
        setIsLoading(false);
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 flex">
      {/* Left side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center px-16">
          <div className="bg-white/10 p-4 rounded-2xl inline-block mb-8 w-fit">
            <Image
              src="/logo.png"
              alt="Ephraim Care"
              width={200}
              height={80}
              className="object-contain"
            />
          </div>

          <h1 className="text-4xl font-bold text-white mb-4">
            Admin Portal
          </h1>
          <p className="text-xl text-neutral-300 mb-8 max-w-md">
            Manage referrals, track participants, and automate your NDIS business operations.
          </p>

          {/* Features list */}
          <div className="space-y-4">
            {[
              "View and manage all referrals",
              "Track participant progress",
              "Schedule appointments",
              "Generate reports & analytics",
              "Automate workflows",
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3 text-neutral-300">
                <div className="w-6 h-6 rounded-full bg-primary/30 flex items-center justify-center">
                  <Shield className="w-3 h-3 text-primary-300" />
                </div>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="lg:hidden mb-8 text-center">
            <div className="bg-white/10 p-4 rounded-2xl inline-block mb-4">
              <Image
                src="/logo.png"
                alt="Ephraim Care"
                width={150}
                height={60}
                className="object-contain"
              />
            </div>
            <h1 className="text-2xl font-bold text-white">Admin Portal</h1>
          </div>

          {/* Login card */}
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary to-primary-700 flex items-center justify-center mb-4">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-neutral-900">Welcome Back</h2>
              <p className="text-neutral-500 mt-1">Sign in to access your dashboard</p>
            </div>

            {/* Error message */}
            {error && (
              <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-neutral-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="admin@ephraimcare.com.au"
                    required
                  />
                </div>
              </div>

              {/* Password field */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-neutral-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full pl-12 pr-12 py-3 rounded-lg border border-neutral-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Remember me & Forgot password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.rememberMe}
                    onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                    className="w-4 h-4 rounded border-neutral-300 text-primary focus:ring-primary"
                  />
                  <span className="text-sm text-neutral-600">Remember me</span>
                </label>
                <button type="button" className="text-sm text-primary hover:text-primary-700 font-medium">
                  Forgot password?
                </button>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 px-4 bg-gradient-to-r from-primary to-primary-700 text-white font-semibold rounded-lg hover:from-[#1565C0] hover:to-[#0D47A1] transition-all flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Signing in...
                  </>
                ) : (
                  <>
                    Sign In
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>

            {/* Demo credentials */}
            <div className="mt-6 p-4 rounded-lg bg-neutral-50 border border-neutral-200">
              <p className="text-xs text-neutral-500 text-center mb-2">Demo Credentials</p>
              <div className="text-sm text-neutral-700 text-center space-y-1">
                <p><strong>Email:</strong> admin@ephraimcare.com.au</p>
                <p><strong>Password:</strong> admin123</p>
              </div>
            </div>

            {/* Back to website */}
            <div className="mt-6 text-center">
              <Link
                href="/"
                className="text-sm text-neutral-500 hover:text-primary transition-colors"
              >
                ← Back to Website
              </Link>
            </div>
          </div>

          {/* Footer */}
          <p className="mt-8 text-center text-neutral-400 text-sm">
            © {new Date().getFullYear()} Ephraim Care. Secure Admin Portal.
          </p>
        </div>
      </div>
    </div>
  );
}
