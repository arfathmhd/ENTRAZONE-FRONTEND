"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/app/components/ui/Button";
import { ChevronDown } from "lucide-react";
import { FaSpinner, FaWpforms } from "react-icons/fa";
import { useAuthStore } from "@/stores/auth.store";
import { useRouter } from "next/navigation";
import { SearchableSelect } from "@/app/components/ui/searchable-select";
import RegisterSkeleton from "@/app/components/LoadingSkeleton/RegisterSkeleton";

interface FormData {
  username: string;
  email: string;
  district: string;
  address: string;
  password: string;
  phone?: string;
}

const DISTRICT = [
  { id: "0", label: "Andhra Pradesh" },
  { id: "1", label: "Arunachal Pradesh" },
  { id: "2", label: "Assam" },
  { id: "3", label: "Bihar" },
  { id: "4", label: "Chhattisgarh" },
  { id: "5", label: "Goa" },
  { id: "6", label: "Gujarat" },
  { id: "7", label: "Haryana" },
  { id: "8", label: "Himachal Pradesh" },
  { id: "9", label: "Jharkhand" },
  { id: "10", label: "Karnataka" },
  { id: "11", label: "Kerala" },
  { id: "12", label: "Madhya Pradesh" },
  { id: "13", label: "Maharashtra" },
  { id: "14", label: "Manipur" },
  { id: "15", label: "Meghalaya" },
  { id: "16", label: "Mizoram" },
  { id: "17", label: "Nagaland" },
  { id: "18", label: "Odisha" },
  { id: "19", label: "Punjab" },
  { id: "20", label: "Rajasthan" },
  { id: "21", label: "Sikkim" },
  { id: "22", label: "Tamil Nadu" },
  { id: "23", label: "Telangana" },
];

function Register() {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    district: "",
    address: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [pageLoading, setPageLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const register = useAuthStore((state) => state.register);
  const user = useAuthStore((state) => state.user);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const [authChecked, setAuthChecked] = useState(false);
  const isProfileComplete = useAuthStore((state) => state.isProfileComplete);
  const setIsRegisterPageVisible = useAuthStore((state) => state.setIsRegisterPageVisible);
  

useEffect(() => {
  if (isAuthenticated) {
    if (isProfileComplete) {
      router.push('/');
    }
  } else {
    router.push('/login');
  }
  setPageLoading(true);
}, [isAuthenticated, isProfileComplete, router]);



    useEffect(() => {
      setIsRegisterPageVisible(true);
    }, [setIsRegisterPageVisible]);


  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const { tempPhone, tempRequestId } = useAuthStore.getState();

      console.log(tempPhone,tempRequestId);
      
      const payload = {
        ...formData,
        phone: tempPhone || user?.phone || "",
        request_id: tempRequestId || "",
      };

      console.log(payload,"this is payload");
      

      await register(payload);
    } catch (err) {
      setError("Registration failed. Please try again.");
    } finally {
    setIsSubmitting(false);
    }
  };

  const handleDistrictChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      district: value,
    }));
  };
  

  if ( !pageLoading ) {
    return <RegisterSkeleton />;
  }

  return (
    <div className="w-full lg:w-1/2 max-w-md flex justify-center">
      <div className="w-full bg-white rounded-3xl shadow-2xl p-6 sm:p-8">
        <form onSubmit={handleSubmit}>
          <div>
            <div className="text-center mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                Enter Your Details
              </h2>
              <FaWpforms className="text-6xl mx-auto mb-9" />
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">
                {error}
              </div>
            )}

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none text-sm sm:text-base"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <div className="flex gap-2">
                  <div className="flex items-center px-3 py-3 border rounded-lg">
                    <span className="text-gray-700 font-medium text-sm sm:text-base">
                      +91
                    </span>
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={user?.phone || ""}
                    onChange={handleChange}
                    placeholder="Enter Mobile Number"
                    className="flex-1 rounded-lg border text-sm sm:text-base px-4 py-3"
                    required
                    disabled
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none text-sm sm:text-base"
                  required
                />
              </div>

              {/* District Dropdown */}
              <div>
                <SearchableSelect
                  label="District"
                  options={DISTRICT}
                  value={formData.district}
                  onChange={handleDistrictChange}
                  placeholder="Select Your District"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Address
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter your full address"
                  rows={3}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg resize-none outline-none text-sm sm:text-base"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none text-sm sm:text-base"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[#9333EA] to-[#DB2777] text-white py-6 rounded-lg font-semibold text-sm sm:text-base"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <FaSpinner className="animate-spin" />
                    Registering...
                  </>
                ) : (
                  "Register Now"
                )}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
