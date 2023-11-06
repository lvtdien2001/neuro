import React, {useState} from 'react';

interface ContactProps {
  children: React.ReactNode;
  className?: string;
}

interface ContactImageProps {
  className?: string;
  alt: string;
  src: string;
  width?: string;
  height?: string;
}

export const Contact: React.FC<ContactProps> = ({ children, className }) => {
  const [color, setColor] = useState('#26272B');
  // const [show, setShow] = useState(false);

  return (
    <div 
      className={`${className} h-[300px] bg-[#131316] border-[#26272B] border-solid border-4 rounded-lg p-4`}
      // onMouseOver={() => setShow(true)}
      // onMouseOut={() => setShow(false)}
    >
      <div className='px-3 py-6'>
        <div className='w-[144px]'>
          {children}
          <div 
            className={`flex justify-center items-center font-content h-12 mt-3 p-2 border-[${color}] border-solid rounded border-2`}
            onMouseOver={() => setColor('#FF3D00')}
            onMouseOut={() => setColor('#26272B')}
          >
            PROFILE
          </div>
        </div>
      </div>
    </div>
  );
};

export const ContactImage: React.FC<ContactImageProps> = ({className, alt, src, width, height}) => {
  return (
    <div className={`${className} mb-3 flex justify-center`}>
      <img 
        alt={alt}
        src={src}
        width={width}
        height={height}
        className='rounded-[50%]'
      />
    </div>
  )
}

export const ContactTitle: React.FC<ContactProps> = ({children, className}) => {
  return (
    <div className={`${className} font-heading text-2xl justify-center h-8 flex items-center mb-2`}>
      {children}
    </div>
  )
}

export const ContactText: React.FC<ContactProps> = ({children, className}) => {
  return (
    <div className={`${className} font-content text-lg h-7 flex items-center justify-center text-[#E4E4E7]`}>
      {children}
    </div>
  )
}
