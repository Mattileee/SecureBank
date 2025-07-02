import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Card } from '@/components/ui/card';
import { Eye, EyeOff, Plus, MoreHorizontal } from 'lucide-react';

const Accounts = () => {
  const [showBalances, setShowBalances] = useState(true);
  const navigate = useNavigate();

  const accounts = [
    {
      id: '1',
      type: 'Checking',
      name: 'Primary Checking',
      number: '****1234',
      fullNumber: '1234567890',
      balance: 5420.50,
      currency: 'USD',
      status: 'active',
      lastActivity: '2024-01-15'
    },
    {
      id: '2',
      type: 'Savings',
      name: 'Emergency Fund',
      number: '****5678',
      fullNumber: '1234567891',
      balance: 12750.00,
      currency: 'USD',
      status: 'active',
      lastActivity: '2024-01-10'
    },
    {
      id: '3',
      type: 'Credit',
      name: 'Rewards Credit Card',
      number: '****9012',
      fullNumber: '1234567892',
      balance: -1250.00,
      currency: 'USD',
      status: 'active',
      lastActivity: '2024-01-14'
    }
  ];

  const getAccountIcon = (type) => {
    switch (type) {
      case 'Checking': return '🏦';
      case 'Savings': return '💰';
      case 'Credit': return '💳';
      default: return '🏛️';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'text-green-600 bg-green-100';
      case 'frozen': return 'text-yellow-600 bg-yellow-100';
      case 'closed': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header with toggle and open new account */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Accounts</h1>
            <p className="text-gray-600 mt-1">Manage all your bank accounts in one place</p>
          </div>
          <div className="flex space-x-3">
            {/* Show/Hide Balances toggle */}
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); setShowBalances(!showBalances); }}
              className="flex items-center space-x-2 bg-gray-200 px-3 py-2 rounded hover:bg-gray-300 cursor-pointer"
            >
              {showBalances ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              <span>{showBalances ? 'Hide' : 'Show'} Balances</span>
            </a>
            {/* Open New Account */}
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); navigate('/open-account'); }}
              className="flex items-center space-x-2 bg-gray-200 px-3 py-2 rounded hover:bg-gray-300 cursor-pointer"
            >
              <Plus className="h-4 w-4" />
              <span>Open New Account</span>
            </a>
          </div>
        </div>

        {/* Accounts List */}
        <div className="grid gap-6">
          {accounts.map((account) => (
            <Card key={account.id} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between">
                {/* Account info */}
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">{getAccountIcon(account.type)}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{account.name}</h3>
                    <p className="text-gray-600">{account.type} Account</p>
                    <p className="text-sm text-gray-500">Account {account.number}</p>
                  </div>
                </div>
                {/* Balance and status */}
                <div className="text-right">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(account.status)}`}>
                      {account.status.charAt(0).toUpperCase() + account.status.slice(1)}
                    </span>
                    {/* More options button (no routing, just icon) */}
                    <button className="p-1 rounded hover:bg-gray-200">
                      <MoreHorizontal className="h-4 w-4" />
                    </button>
                  </div>
                  {/* Balance display */}
                  <p className={`text-2xl font-bold ${account.balance >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {showBalances
                      ? `${account.balance >= 0 ? '' : '-'}$${Math.abs(account.balance).toLocaleString()}`
                      : '••••••'}
                  </p>
                  <p className="text-sm text-gray-600">Last activity: {account.lastActivity}</p>
                </div>
              </div>
              {/* Action buttons */}
              <div className="mt-6 pt-4 border-t border-gray-200 flex space-x-3">
                {/* View Details */}
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); navigate(`/accounts/${account.id}/details`); }}
                  className="flex-1 inline-block px-3 py-1 border border-gray-300 rounded hover:bg-gray-100 text-center"
                >
                  View Details
                </a>
                {/* Transfer */}
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); navigate(`/accounts/${account.id}/transfer`); }}
                  className="flex-1 inline-block px-3 py-1 border border-gray-300 rounded hover:bg-gray-100 text-center"
                >
                  Transfer
                </a>
                {/* Statements */}
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); navigate(`/accounts/${account.id}/statements`); }}
                  className="flex-1 inline-block px-3 py-1 border border-gray-300 rounded hover:bg-gray-100 text-center"
                >
                  Statements
                </a>
                {/* Make Payment for Credit Accounts */}
                {account.type === 'Credit' && (
                  <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); navigate(`/accounts/${account.id}/make-payment`); }}
                    className="flex-1 inline-block px-3 py-1 border border-gray-300 rounded hover:bg-gray-100 text-center"
                  >
                    Make Payment
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Account Summary */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Account Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Assets</p>
              <p className="text-2xl font-bold text-green-600">{showBalances ? '$18,170.50' : '••••••'}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Liabilities</p>
              <p className="text-2xl font-bold text-red-600">{showBalances ? '$1,250.00' : '••••••'}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Net Worth</p>
              <p className="text-2xl font-bold text-blue-600">{showBalances ? '$16,920.50' : '••••••'}</p>
            </div>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default Accounts;