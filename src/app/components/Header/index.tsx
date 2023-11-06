'use client'
import { useState } from "react";

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
  const [show, setShow] = useState(false);

  return (
    <header 
      className={`${className} fixed z-[100] top-0 right-0 w-full`}
    >
      <div className='flex items-center justify-between rounded-lg h-20 py-3 px-8 max-w-[1376px] my-2 mx-auto bg-[#000000CC]'>
        <div className="flex">
          <img
            alt='logo'
            src='/static/images/logo-black.svg'
            className="me-[11px]"
          />
          <img
            alt='N'
            src='/static/images/vector-n.svg'
            className='me-[9px]'
          />
          <img
            alt='E'
            src='/static/images/vector-e.svg'
            className='me-[9px]'
          />
          <img
            alt='U'
            className='me-[9px]'
            src='/static/images/vector-u.svg'
          />
          <img
            alt='R'
            src='/static/images/vector-r.svg'
            className='me-[9px]'
          />
          <img
            alt='O'
            src='/static/images/vector-o.svg'
          />
        </div>
        <div className='flex items-center'>
          <div className='grid grid-rows-2 font-content px-3 py-4 w-[142px]'>
            <div
              className='flex cursor-pointer items-end mb-[-15px] justify-between'
              onClick={() => setShow(prev => !prev)}
            >
              <div>Neuro</div>
              <div>
                {show
                ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M18 15L12 9L6 15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                : <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M5 7.5L10 12.5L15 7.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                }
              </div>
            </div>
            {show && <div className='w-[148px] mt-8 ms-[-12px] font-content bg-[#131316] rounded-md text-center p-3'>
              <div className='mb-1 px-2 py-2 hover:bg-[#26272B] hover:border-[#FF3D00] hover:border-x-4 rounded-lg'>
                About Us
              </div>
              <div className='mb-1 px-2 py-2 hover:bg-[#26272B] hover:border-[#FF3D00] hover:border-x-4 rounded-lg'>
                Service
              </div>
              <div className='px-2 py-2 hover:bg-[#26272B] hover:border-[#FF3D00] hover:border-x-4 rounded-lg'>
                Neuro News
              </div>
            </div>}
          </div>
          <div className='font-content h-full px-3 py-4'>
            <div className='font-content text-[8px] leading-[8px] text-[#FF3D00]'>
              COMING SOON
            </div>
            <div className='hover:text-[#FF3D00]'>
              Neuro AI
            </div>
          </div>
          <div className='font-content h-full px-3 py-4'>
            <div className='font-content text-[8px] leading-[8px] text-[#FF3D00]'>
              COMING SOON
            </div>
            <div className='hover:text-[#FF3D00]'>
              Daaps V3
            </div>
          </div>
          <div className='font-content h-full px-3 py-4'>
            <div className='font-content text-[8px] leading-[8px] text-[#FF3D00]'>
              COMING SOON
            </div>
            <div className='hover:text-[#FF3D00]'>
              Dashboard
            </div>
          </div>
          <div className='font-content h-full px-3 py-4'>
            <div className='font-content text-[8px] leading-[8px] text-[#FF3D00]'>
              COMING SOON
            </div>
            <div className='hover:text-[#FF3D00]'>
              Contact
            </div>
          </div>
          <div className='bg-[#26272B] hover:bg-[#FF3D00] cursor-pointer flex items-center w-[194px] h-12 ms-5 border-2 border-solid rounded-[32px] border-[#FF3D00] py-3 px-12'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10.0002 12.5L7.50016 10M10.0002 12.5C11.1642 12.0573 12.2809 11.499 13.3335 10.8334M10.0002 12.5V16.6667C10.0002 16.6667 12.5252 16.2084 13.3335 15C14.2335 13.65 13.3335 10.8334 13.3335 10.8334M7.50016 10C7.94362 8.84957 8.502 7.74676 9.16683 6.70838C10.1378 5.15587 11.4898 3.87758 13.0943 2.99512C14.6988 2.11266 16.5024 1.65535 18.3335 1.66671C18.3335 3.93338 17.6835 7.91671 13.3335 10.8334M7.50016 10H3.3335C3.3335 10 3.79183 7.47504 5.00016 6.66671C6.35016 5.76671 9.16683 6.66671 9.16683 6.66671M3.75016 13.75C2.50016 14.8 2.0835 17.9167 2.0835 17.9167C2.0835 17.9167 5.20016 17.5 6.25016 16.25C6.84183 15.55 6.8335 14.475 6.17516 13.825C5.85125 13.5159 5.42457 13.3372 4.97702 13.3234C4.52946 13.3096 4.09256 13.4615 3.75016 13.75Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className='ms-2'>
              LAUNCH
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
