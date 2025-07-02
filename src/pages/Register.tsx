import React, { useState } from "react";
import Layout from "../components/Layout";
import RegistrationForm from "@/components/RegistrationForm";

const Register: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = (data: {
    fullName: string;
    accountNumber: string;
    bankName: string;
  }) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      // Handle registration logic or show a toast here
      alert(`Registered: ${data.fullName} - ${data.bankName} (${data.accountNumber})`);
    }, 2000);
  };

  return (
    <Layout>
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Register</h1>
        <RegistrationForm onRegister={handleRegister} isLoading={isLoading} />
      </div>
    </Layout>
  );
};

export default Register;
// This file is part of the Safe Bank project.
// It contains the registration page where users can create a new account.