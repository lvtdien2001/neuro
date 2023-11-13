import Image from 'next/image';
import React, { useState } from 'react';

interface ContactProps {
  children: React.ReactNode;
  className?: string;
}

interface ContactImageProps {
  className?: string;
  src: string;
  alt: string;
}

const Root: React.FC<ContactProps> = ({ children, className }) => {
  const [color, setColor] = useState('#26272B');

  return (
    <div
      className={`${className} flex justify-center h-[300px] bg-[#131316] border-[#26272B] border-solid border-4 rounded-lg p-4`}
    >
      <div className="px-3 py-6">
        <div className="w-[144px]">
          {children}
          <div
            className={`flex justify-center items-center font-content h-12 mt-3 p-2 border-[${color}] border-solid rounded border-2`}
            onMouseOver={() => setColor('#FF3D00')}
            onMouseOut={() => setColor('#26272B')}
            onBlur={() => 0}
            onFocus={() => 0}
          >
            PROFILE
          </div>
        </div>
      </div>
    </div>
  );
};

const Avatar: React.FC<ContactImageProps> = ({ className, src, alt }) => {
  return (
    <div className={`${className} mb-3 flex justify-center`}>
      <Image
        alt={alt}
        src={src}
        className="rounded-[50%]"
        width={80}
        height={80}
      />
    </div>
  );
};

const Title: React.FC<ContactProps> = ({ children, className }) => {
  return (
    <div
      className={`${className} font-heading text-2xl justify-center h-8 flex items-center mb-2`}
    >
      {children}
    </div>
  );
};

const Text: React.FC<ContactProps> = ({ children, className }) => {
  return (
    <div
      className={`${className} font-content text-lg h-7 flex items-center justify-center text-[#E4E4E7]`}
    >
      {children}
    </div>
  );
};

export const Contact = { Root, Avatar, Title, Text };
