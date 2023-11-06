import React from 'react';

interface DropdownProps {
  children: React.ReactNode;
  className?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({ children, className }) => {
  return (
    <div className={`${className} text-center m-6 ms-0 p-4 ps-0 font-content font-semibold text-base break-words`}>
      <text className='cursor-pointer'>{children}</text>
    </div>
  );
};
