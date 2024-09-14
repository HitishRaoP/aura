'use client';
import { Button } from '../components/button';
import toast, { Toaster } from 'react-hot-toast';

export const LandingPage = () => {
  return (
    <div className="flex justify-center py-4">
      <Toaster />
      <Button onClick={() => toast.success('Turborepo is setup')}>Aura</Button>
    </div>
  );
};
