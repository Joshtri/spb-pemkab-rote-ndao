import React, { useState } from 'react';
import { Button, Label, TextInput, Card } from 'flowbite-react';
import { Lock, User } from 'lucide-react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    // Contoh validasi sederhana
    if (username === 'admin' && password === 'password123') {
      alert('Login berhasil!');
      setErrorMessage('');
    } else {
      setErrorMessage('Username atau password salah');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <Card className="w-80">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <Label htmlFor="username" value="Username" />
            <div className="flex items-center border rounded-md p-2">
              <User className="mr-2" />
              <TextInput 
                id="username"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <Label htmlFor="password" value="Password" />
            <div className="flex items-center border rounded-md p-2">
              <Lock className="mr-2" />
              <TextInput 
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          {errorMessage && <p className="text-red-500 text-center mb-4">{errorMessage}</p>}
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">Login</Button>
        </form>
      </Card>
    </div>
  );
};

export default Login;