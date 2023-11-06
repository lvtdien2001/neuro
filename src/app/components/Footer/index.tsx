
interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer 
      className={`${className} bg-[#131316] pt-12 pb-4`}
    >
      <div className='flex max-w-[1280px] mx-auto px-8'>
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

        <div className='flex w-full justify-end items-center'>
          <div className='font-heading'>Overview</div>
          <div className='font-heading ms-8'>Features</div>
          <div className='font-heading ms-8'>Pricing</div>
          <div className='font-heading ms-8'>Careers</div>
          <div className='font-heading ms-8'>Help</div>
          <div className='font-heading ms-8'>Privacy</div>
        </div>
      </div>
    </footer>
  );
};
