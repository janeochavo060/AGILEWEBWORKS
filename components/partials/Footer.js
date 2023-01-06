import Image from 'next/image'
const Footer = (props) => {
  return (
    <>
      <div
        className={`md:py-4 py-0 z-50 w-full transition duration-600 ease-in-out`}
      >
        <div className="xxl:max-w-[1345px] xl:max-w-[1260px] w-full items-center mx-auto overflow-x-hidden overflow-y-hidden ">
          <div className="flex lg:flex-row flex-col lg:justify-between justify-center items-center">
            <div
              className="flex text-sm xxl:mx-0 py-6 cursor-pointer"
            >
              <Image
                src="/svg/copyright.svg"
                alt="Vercel Logo"
                className='mx-1'
                width={15}
                height={15}
              />
              {`2020 Cool Writings - Powered by Statamic`}
            </div>
            <div className="flex-row md:mx-0 mx-6 py-6 ">
              <div className="flex flex-no-wrap border-transparent items-center whitespace-nowrap overflow-x-auto">
                <Image
                  src="/svg/twitter.svg"
                  alt="Vercel Logo"
                  className='mx-1'
                  width={35}
                  height={24}
                />
                <Image
                  src="/svg/github.svg"
                  alt="Vercel Logo"
                  className='mx-1'
                  width={35}
                  height={24}
                />
                <Image
                  src="/svg/mail.svg"
                  alt="Vercel Logo"
                  className='mx-1'
                  width={35}
                  height={24}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
