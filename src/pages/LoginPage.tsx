import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { toast } = useToast();

  const users = [
    { email: 'valueworkshop.admin1@lorem.com', password: 'Xy7!pQ#9kL@2rB&z' },
    { email: 'valueworkshop.admin2@lorem.com', password: 'm@G6$eTr8!nWp#01' },
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const matchedUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (matchedUser) {
      toast({
        title: "Login successful",
        description: "Redirecting to report page...",
        variant: "default",
      });
      setTimeout(() => navigate('/report'), 1000);
    } else {
      toast({
        title: "Login failed",
        description: "User not found or credentials are incorrect.",
        variant: "destructive", 
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-8">
          Report Generator Login
        </h1>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="email">
              Email
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="password">
              Password
            </label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          <Button type="submit" className="w-full bg-purple-700 hover:bg-indigo-700">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
