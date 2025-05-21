"use client";
import { FaArrowRight, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    address: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
    dob: "",
    membershipType: "basic",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle registration logic
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#031625]">
      <div className="flex items-center justify-center flex-grow p-4">
        <div className="w-full max-w-3xl bg-[#031625] rounded-lg border border-[#EFD67E] shadow-[0_4px_20px_0px_rgba(239,214,126,0.3)] p-8">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-[#EFD67E] rounded-lg flex items-center justify-center">
              <img src="/icons/logo.svg" alt="Logo" className="w-12 h-12" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-center text-[#EFD67E] mb-8">
            Join IronHive
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Always visible fields */}
              <div>
                <label className="block text-[#EFD67E] mb-2">First Name*</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#112136] text-[#EFD67E] rounded-lg border border-[#EFD67E]/30 focus:border-[#EFD67E]/70 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-[#EFD67E] mb-2">Last Name*</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#112136] text-[#EFD67E] rounded-lg border border-[#EFD67E]/30 focus:border-[#EFD67E]/70 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-[#EFD67E] mb-2">Email*</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#112136] text-[#EFD67E] rounded-lg border border-[#EFD67E]/30 focus:border-[#EFD67E]/70 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-[#EFD67E] mb-2">Phone*</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#112136] text-[#EFD67E] rounded-lg border border-[#EFD67E]/30 focus:border-[#EFD67E]/70 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-[#EFD67E] mb-2">Password*</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#112136] text-[#EFD67E] rounded-lg border border-[#EFD67E]/30 focus:border-[#EFD67E]/70 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-[#EFD67E] mb-2">
                  Confirm Password*
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#112136] text-[#EFD67E] rounded-lg border border-[#EFD67E]/30 focus:border-[#EFD67E]/70 focus:outline-none"
                  required
                />
              </div>
            </div>

            {/* Collapsible Additional Info Section */}
            <div className="mt-6">
              <button
                type="button"
                onClick={() => setShowAdditionalInfo(!showAdditionalInfo)}
                className="flex items-center text-[#EFD67E] hover:text-[#D4B85F] transition mb-4"
              >
                {showAdditionalInfo ? (
                  <>
                    <FaChevronUp className="mr-2" />
                    Hide Additional Information
                  </>
                ) : (
                  <>
                    <FaChevronDown className="mr-2" />
                    Show Additional Information
                  </>
                )}
              </button>

              {showAdditionalInfo && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#112136]/50 p-4 rounded-lg border border-[#EFD67E]/20">
                  <div>
                    <label className="block text-[#EFD67E] mb-2">Address</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#112136] text-[#EFD67E] rounded-lg border border-[#EFD67E]/30 focus:border-[#EFD67E]/70 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[#EFD67E] mb-2">City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#112136] text-[#EFD67E] rounded-lg border border-[#EFD67E]/30 focus:border-[#EFD67E]/70 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[#EFD67E] mb-2">State</label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#112136] text-[#EFD67E] rounded-lg border border-[#EFD67E]/30 focus:border-[#EFD67E]/70 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[#EFD67E] mb-2">Country</label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#112136] text-[#EFD67E] rounded-lg border border-[#EFD67E]/30 focus:border-[#EFD67E]/70 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[#EFD67E] mb-2">
                      Zip Code
                    </label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#112136] text-[#EFD67E] rounded-lg border border-[#EFD67E]/30 focus:border-[#EFD67E]/70 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[#EFD67E] mb-2">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      name="dob"
                      value={formData.dob}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#112136] text-[#EFD67E] rounded-lg border border-[#EFD67E]/30 focus:border-[#EFD67E]/70 focus:outline-none"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-[#EFD67E] mb-2">
                      Membership Type
                    </label>
                    <select
                      name="membershipType"
                      value={formData.membershipType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#112136] text-[#EFD67E] rounded-lg border border-[#EFD67E]/30 focus:border-[#EFD67E]/70 focus:outline-none"
                    >
                      <option value="basic">Basic</option>
                      <option value="premium">Premium</option>
                      <option value="elite">Elite</option>
                    </select>
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-end mt-8">
              <button
                type="submit"
                className="px-6 py-2 bg-[#EFD67E] text-[#031625] rounded-lg hover:bg-[#D4B85F] transition flex items-center gap-2"
              >
                Register <FaArrowRight />
              </button>
            </div>

            <div className="text-center mt-6 text-[#90a8c6]">
              Already have an account?{" "}
              <Link href="/login" className="text-[#EFD67E] hover:underline">
                Sign in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
