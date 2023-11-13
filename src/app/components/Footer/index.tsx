import Image from 'next/image';

interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={`${className} bg-[#131316] w-full pt-12 pb-4`}>
      <div className="flex container mx-auto px-8">
        <div className="flex">
          <Image
            alt="logo"
            src="/static/images/logo-black.svg"
            className="me-[11px]"
            width={44}
            height={44}
          />
          <Image
            alt="N"
            src="/static/images/vector-n.svg"
            className="me-[9px]"
            width={11}
            height={10}
          />
          <Image
            alt="E"
            src="/static/images/vector-e.svg"
            className="me-[9px]"
            width={11}
            height={10}
          />
          <Image
            alt="U"
            className="me-[9px]"
            src="/static/images/vector-u.svg"
            width={12}
            height={10}
          />
          <Image
            alt="R"
            src="/static/images/vector-r.svg"
            className="me-[9px]"
            width={11}
            height={10}
          />
          <Image
            alt="O"
            src="/static/images/vector-o.svg"
            width={13}
            height={10}
          />
        </div>

        <div className="flex w-full justify-end items-center">
          <div className="font-heading">Overview</div>
          <div className="font-heading ms-8">Features</div>
          <div className="font-heading ms-8">Pricing</div>
          <div className="font-heading ms-8">Careers</div>
          <div className="font-heading ms-8">Help</div>
          <div className="font-heading ms-8">Privacy</div>
        </div>
      </div>
    </footer>
  );
};
