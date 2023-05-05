import Link from 'next/link';
import React from 'react';

interface NavbarItemProps {
    label: string;
}

const NavbarItem : React.FC<NavbarItemProps> =({
    label
}) => {
  return (
    <div className='cursor-pointer transition'>
     {label}

    </div>
  )
}

export default NavbarItem