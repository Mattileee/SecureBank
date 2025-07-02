import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeftRight, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type Account = {
  id: string;
  name: string;
  number: string;
  balance: number;
};

type TransferFormProps = {
  accounts: Account[];
  onTransfer: (data: { fromAccount: string; toAccount: string; amount: string; description: string }) => void;
  isLoading: boolean;
};

const TransferForm: React.FC<TransferFormProps> = ({ accounts, onTransfer, isLoading }) => {
  const [fromAccount, setFromAccount] = useState('');
  const [toAccount, setToAccount] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fromAccount || !toAccount || !amount) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    if (fromAccount === toAccount) {
      toast({
        title: "Error",
        description: "Source and destination accounts must be different",
        variant: "destructive",
      });
      return;
    }
    if (parseFloat(amount) <= 0) {
      toast({
        title: "Error",
        description: "Transfer amount must be greater than zero",
        variant: "destructive",
      });
      return;
    }
    onTransfer({ fromAccount, toAccount, amount, description });
    setFromAccount('');
    setToAccount('');
    setAmount('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex items-center space-x-2 mb-6">
        <ArrowLeftRight className="h-5 w-5 text-blue-600" />
        <h2 className="text-xl font-semibold">New Transfer</h2>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          From Account *
        </label>
        <select
          value={fromAccount}
          onChange={(e) => setFromAccount(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        >
          <option value="">Select source account</option>
          {accounts.map((account) => (
            <option key={account.id} value={account.id}>
              {account.name} ({account.number}) - ${account.balance.toLocaleString()}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          To Account *
        </label>
        <select
          value={toAccount}
          onChange={(e) => setToAccount(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        >
          <option value="">Select destination account</option>
          {accounts.map((account) => (
            <option key={account.id} value={account.id}>
              {account.name} ({account.number})
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Amount *
        </label>
        <div className="relative">
          <span className="absolute left-3 top-2 text-gray-500">$</span>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full border border-gray-300 rounded-lg pl-8 pr-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="0.00"
            min="0.01"
            step="0.01"
            required
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Description (Optional)
        </label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="What's this transfer for?"
        />
      </div>
      <Button
        type="submit"
        className="w-full"
        disabled={isLoading}
      >
        {isLoading ? (
          'Processing...'
        ) : (
          <>
            <Send className="h-4 w-4 mr-2" />
            Transfer Money
          </>
        )}
      </Button>
    </form>
  );
};

export default TransferForm;