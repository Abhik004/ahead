import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const logo = '/logo.png'; // Assuming you have a logo.png file in the public folder
  const links = [
    { name: 'Emotion', url: '#' },
    { name: 'Manifesto', url: '#' },
    { name: 'Self-awareness test', url: '#' },
    { name: 'Work With Us', url: '#' }
  ];

  return (
    <nav className='my-5 mx-8 flex items-center justify-between'>
      {/* Logo */}
      <Link href='/' className='flex items-center'>
        
          <Image src={logo} alt='logo' height={40} width={40} className='rounded-lg' />

       
      </Link>

      {/* Links */}
      <ul className='hidden md:flex items-center gap-8 text-lg font-medium'>
        {links.map((link) => (
          <li key={link.url}>
            <Link href={link.url} className='text-gray-800 hover:text-gray-600'>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Button */}
      <div>
        <Button variant='default' className='bg-black text-white rounded-full px-4 py-2'>
          Download Now
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
