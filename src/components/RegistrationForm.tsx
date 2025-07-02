import React, { useState } from "react";
import { Button } from "@/components/ui/button";

type BankRegistrationProps = {
  onRegister: (data: { fullName: string; accountNumber: string; bankName: string }) => void;
  isLoading: boolean;
};

const BankRegistrationForm: React.FC<BankRegistrationProps> = ({ onRegister, isLoading }) => {
  const [fullName, setFullName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [bankName, setBankName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onRegister({ fullName, accountNumber, bankName });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto p-4 bg-white rounded shadow">
      <div>
        <label className="block text-sm font-medium mb-1">Full Name</label>
        <input
          className="w-full border rounded px-3 py-2"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Account Number</label>
        <input
          className="w-full border rounded px-3 py-2"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Bank Name</label>
        <input
          className="w-full border rounded px-3 py-2"
          value={bankName}
          onChange={(e) => setBankName(e.target.value)}
          required
        />
      </div>
      <Button type="submit" disabled={isLoading} className="w-full">
        {isLoading ? "Submitting..." : "Register Bank Details"}
      </Button>
    </form>
  );
};

export default BankRegistrationForm;