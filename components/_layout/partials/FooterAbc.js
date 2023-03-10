import { useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image'
import { getCurrentYear } from '@/lib/services/globalService';
import { GlobalContext } from '@/lib/context/GlobalContext';
import depedLogo from "@/public/img/deped_logo.png";
import usAidLogo from "@/public/img/usaid_logo.png";
import rtiLogo from "@/public/img/rti_logo.png";
import footerBg from "@/public/img/footer_bg.png";
import TwitterIcon from "@/components/svg/TwitterIcon";
import FbIcon from "@/components/svg/FbIcon";
import LinkedInIcon from "@/components/svg/LinkedInIcon";

export default function FooterAbc () {
  const router = useRouter()
  const { tenantDetails, menus } = useContext(GlobalContext);
  const global = tenantDetails?.data?.main;
  const menuHandler = menus?.parentNodes;
  const menus2 = [
    {
      parent: 'About',
      childrens: [
        'ABC+',
        'Partners',
        'What is EGL?',
        'EGL in the Philippines',
        'EGL Resources Portal',
      ]
    },
    {
      parent: 'News',
      childrens: [
        'Current Events',
        'Success Stories',
      ]
    },
    {
      parent: 'Resources',
      childrens: [
        'EGRMs',
        'Training Materials',
        'Assessment Tools',
        'Image Gallery',
        'Videos',
      ]
    },
    {
      parent: 'Contact',
      childrens: [
        'ABC+ Contact',
        'DepEd Contact',
      ]
    },
  ]

  return (
      <div
        className='px-4 pb-4 pt-8 w-full xl:flex xl:justify-center'
        style={{
            backgroundImage: `linear-gradient(to top, rgba(255,255,255, 0) 50%, rgba(255,255,255) 100%), url('img/footer_bg.png')`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
        }}
    >
        <div className='relative z-10 xl:w-[1345px] bg-white rounded-lg shadow-xl mb-8 py-8 px-4'>
            {/* menus */}
            <div className="grid grid-cols-2 xl:grid-cols-6 gap-6 mb-4 xl:mb-8">
                {menus2.map(menu => (
                    <div key={menu.parent} className="">
                        <div className="font-extrabold text-[#07336E] text-lg xl:text-1xl flex items-center mb-2">
                            <div className="bg-[#E11C38] w-[10px] h-[16px] mr-2"></div>
                            {menu.parent.toUpperCase()}
                        </div>
                        {menu.childrens.map(menuChildren => (
                            <div key={menuChildren} className="text-[13px] xl:text-sm text-[#656565] font-semibold py-[6px] w-full">
                                {menuChildren}
                            </div>
                        ))}
                    </div>
                ))}

                <div className="col-span-2">
                    <div className="font-extrabold text-[#07336E] text-lg xl:text-xl flex items-center mb-2">
                        <div className="bg-[#E11C38] w-[10px] h-[16px] mr-2"></div>
                        GET IN TOUCH
                    </div>
                    <div className="grid grid-cols-2 gap-y-3 gap-x-4 py-[6px]">
                        <input
                            type="text"
                            name="name"
                            className="text-xs border-[0.5px] py-[8.5px] px-3 w-full outline-0 col-span-2 xl:col-span-1"
                            placeholder="Name"
                        />
                        <input
                            type="email"
                            name="email"
                            className="text-xs border-[0.5px] py-[8.5px] px-3 w-full outline-0 col-span-2 xl:col-span-1"
                            placeholder="Email"
                        />
                        <textarea name="message" placeholder="Message" className="text-xs border-[0.5px] py-[8.5px] px-3 w-full outline-0 col-span-2" />
                    </div>
                    <div className="font-extrabold text-[#07336E] text-right mt-1">
                        SEND
                    </div>
                    <hr className="bg-[#07336E] h-[4px] w-[27px] float-right" />
                </div>
            </div>

            <hr />

            {/* logos */}
            <div className="flex justify-center items-center xl:justify-between xl:float-left py-2">
                <Link href="/">
                    <div className="relative w-[120px] h-[40px] sm:w-[140px] sm:h-[50px]">
                        <Image
                            src={depedLogo}
                            alt="DepEd Logo"
                            className="px-2"
                            fill
                            style={{
                                objectFit: "contain",
                                objectPosition: "center",
                            }}
                        />
                    </div>
                </Link>
                <Link href="/" className='xl:mx-4'>
                    <div className="relative w-[140px] h-[40px] sm:w-[180px] sm:h-[80px]">
                        <Image
                            src={usAidLogo}
                            alt="USAID Logo"
                            className="px-2"
                            fill
                            style={{
                                objectFit: "contain",
                                objectPosition: "center",
                            }}
                        />
                    </div>
                </Link>
                <Link href="/">
                    <div className="relative w-[110px] h-[30px] sm:w-[130px] sm:h-[40px]">
                        <Image
                            src={rtiLogo}
                            alt="RTI Logo"
                            className="px-2"
                            fill
                            style={{
                                objectFit: "contain",
                                objectPosition: "center",
                            }}
                        />
                    </div>
                </Link>
            </div>

            {/* abc+ */}
            <p className='xl:hidden font-extrabold text-base text-[#07336E] text-center py-4'>
                <span className='text-[#E11C38]'>ABC+: </span>
                Advancing Basic Education in the Philippines
            </p>

            <hr className='xl:hidden' />

            <div className='xl:float-right'>
                {/* socmed icons */}
                <div className='flex justify-center xl:justify-end pt-4'>
                    <Link href="/">
                        <TwitterIcon width="20" height="20" fill="#E11C38" className="drop-shadow-md" />
                    </Link>
                    <Link href="/">
                        <FbIcon width="20" height="20" fill="#E11C38" className="drop-shadow-md mx-6" />
                    </Link>
                    <Link href="/">
                        <LinkedInIcon width="20" height="20" fill="#E11C38" className="drop-shadow-md" />
                    </Link>
                </div>

                {/* cc */}
                <div className='flex justify-center items-center pt-4'>
                    <Image
                        src='/svg/copyright.svg'
                        alt='Copyright Logo'
                        className='mx-1'
                        width={15}
                        height={15}
                    />
                    <div className='text-[12px] text-[#656565] font-medium'>
                        {getCurrentYear()} ABC+. All Rights Reserved.
                    </div>
                </div>
                <div className='text-[12px] text-[#656565] text-center font-medium'>
                    Privacy Policy | Terms of Use
                </div>
            </div>
        </div>
      </div>
  );
};
