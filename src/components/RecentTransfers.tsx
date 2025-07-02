import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { History } from "lucide-react";
import { useNavigate } from "react-router-dom";

type RecentTransfer = {
  id: string;
  from: string;
  to: string;
  amount: number;
  date: string;
};

type RecentTransfersProps = {
  recentTransfers: RecentTransfer[];
};

const RecentTransfers: React.FC<RecentTransfersProps> = ({ recentTransfers }) => {
  const navigate = useNavigate();
  return (
    <Card className="p-6">
      <div className="flex items-center space-x-2 mb-6">
        <History className="h-5 w-5 text-gray-600" />
        <h2 className="text-xl font-semibold">Recent Transfers</h2>
      </div>
      <div className="space-y-4">
        {recentTransfers.map((transfer) => (
          <div key={transfer.id} className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium text-gray-900">
                ${transfer.amount.toFixed(2)}
              </span>
              <span className="text-sm text-gray-500">{transfer.date}</span>
            </div>
            <div className="text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <span>From: {transfer.from}</span>
              </div>
              <div className="flex items-center space-x-2 mt-1">
                <span>To: {transfer.to}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Button
        variant="outline"
        className="w-full mt-4"
        onClick={() => navigate('/transfers')}
      >
        View All Transfers
      </Button>
    </Card>
  );
};

export default RecentTransfers;