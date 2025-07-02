import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Shield, 
  Home, 
  CreditCard, 
  ArrowLeftRight, 
  FileText, 
  Wallet,
  User,
  LogOut,
  Menu,
  X
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: Home },
    { name: 'Accounts', href: '/accounts', icon: Wallet },
    { name: 'Transactions', href: '/transactions', icon: ArrowLeftRight },
    { name: 'Transfer', href: '/transfer', icon: ArrowLeftRight },
    { name: 'Cards', href: '/cards', icon: CreditCard },
    { name: 'Statements', href: '/statements', icon: FileText },
  ];

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleLinkClick = (e: React.MouseEvent, path?: string) => {
    e.preventDefault();
    if (path) {
      navigate(path);
      setSidebarOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Mobile menu overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-blue-900 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:inset-0 transition-transform duration-300 ease-in-out`}>
        {/* Sidebar Header */}
        <div className="flex items-center justify-between h-16 px-6 bg-blue-800">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-white" />
            <span className="text-xl font-bold text-white">securebank</span>
          </div>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); setSidebarOpen(false); }}
            className="lg:hidden text-white hover:text-gray-300"
          >
            <X className="h-6 w-6" />
          </a>
        </div>

        {/* Navigation */}
        <nav className="mt-6 px-4">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <a
                key={item.name}
                href="#"
                onClick={(e) => handleLinkClick(e, item.href)}
                className={`flex items-center px-4 py-3 mt-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive
                    ? 'bg-blue-800 text-white'
                    : 'text-blue-100 hover:bg-blue-800 hover:text-white'
                }`}
              >
                <item.icon className="h-5 w-5 mr-3" />
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* User info and logout at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="bg-blue-800 rounded-lg p-4 mb-4">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 rounded-full p-2">
                <User className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-white font-medium">{user?.firstName} {user?.lastName}</p>
                <p className="text-blue-200 text-sm">{user?.email}</p>
              </div>
            </div>
          </div>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); handleLogout(); }}
            className="w-full text-blue-100 hover:bg-blue-800 hover:text-white flex items-center px-4 py-2 rounded"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </a>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Top Bar */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          {/* Use flex with items-center and justify-between for proper alignment */}
          <div className="flex items-center justify-between h-16 px-6">
            {/* Sidebar toggle button for mobile */}
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); setSidebarOpen(true); }}
              className="lg:hidden text-gray-600 hover:text-gray-900"
            >
              <Menu className="h-6 w-6" />
            </a>
            {/* Welcome message aligned left */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-600 font-medium text-lg">Welcome back, {user?.firstName}!</span>
            </div>
          </div>
        </header>

        {/* Main page content with padding */}
        <main className="p-6 flex-1">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;