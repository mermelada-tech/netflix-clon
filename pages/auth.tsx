import Image from 'next/image';
import Input from '@/components/Input';
import { useCallback, useState } from 'react';
import React from 'react';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [variant, setVariant] = useState('login');

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const toggleVariant = useCallback(() => {
    setVariant(currentVariant =>
      currentVariant === 'login' ? 'register' : 'login',
    );
  }, []);

  return (
    <div className='relative h-full w-full bg-[url("/images/hero.jpg")] bg-no-repeat bg-center bg-fixed bg-cover'>
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="flex justify-center sm:justify-start px-12 pt-10">
          <Image
            src="/images/logo.png"
            alt="Netflix Logo"
            width={178}
            height={48}
          />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-12 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {variant === 'login' ? 'Sign in' : 'Register'}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === 'register' && (
                <Input
                  label="Username"
                  onChange={handleName}
                  id="name"
                  type="text"
                  value={name}
                />
              )}
              <Input
                label="Email"
                onChange={handleEmail}
                id="email"
                type="email"
                value={email}
              />
              <Input
                label="Password"
                onChange={handlePassword}
                id="password"
                type="password"
                value={password}
              />
            </div>
            <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
              {variant === 'login' ? 'Login' : 'Sign up'}
            </button>
            <p className="text-neutral-500 mt-12">
              {variant === 'login'
                ? 'First time using Netflix?'
                : 'Already have an account?'}
              <span
                onClick={toggleVariant}
                className="text-white ml-1 hover:underline cursor-pointer"
              >
                {variant === 'login' ? 'Create an account' : 'Login'}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
