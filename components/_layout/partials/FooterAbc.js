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
        <div className='relative z-10 xl:w-[1345px] bg-white rounded-lg shadow-xl mx-4 mb-8 py-8 px-4'>

            {/* menus */}
            <div className='flex flex-wrap'>
                {menus2.map(menu => (
                    <div key={menu.parent} className='w-1/2 xl:w-auto xl:mr-12 mb-4'>
                        <div className='font-semibold text-[#07336E] flex items-center'>
                            <div className='bg-[#E11C38] w-[10px] h-[15px] mr-2'></div>
                            {menu.parent.toUpperCase()}
                        </div>
                        {menu.childrens.map(menuChildren => (
                            <div key={menuChildren} className='text-[14px] text-[#656565] font-semibold py-2 w-full'>
                                {menuChildren}
                            </div>
                        ))}
                    </div>
                ))}

                <div className='w-full lg:w-auto mb-4'>
                    <div className='font-semibold text-[#07336E] flex items-center mb-2'>
                        <div className='bg-[#E11C38] w-[10px] h-[15px] mr-2'></div>
                        GET IN TOUCH
                    </div>
                    <input
                        type='text'
                        name='name'
                        className='text-xs border-[0.5px] py-[8.5px] px-4 mb-2 w-full outline-0'
                        placeholder='Name'
                    />
                    <input
                        type='email'
                        name='email'
                        className='text-xs border-[0.5px] py-[8.5px] px-4 mb-2 w-full outline-0'
                        placeholder='Email'
                    />
                    <textarea name='message' placeholder='Message' className='text-xs border-[0.5px] py-[8.5px] px-4 w-full outline-0' />
                    <div className='font-semibold text-[#07336E] text-right'>
                        SEND
                    </div>
                    <hr className='bg-[#07336E] h-[4px] w-[27px] float-right' />
                </div>
            </div>

            <hr />

            {/* logos */}
            <div className="flex justify-between items-center xl:float-left py-2">
                <Link href="/">
                    <Image
                        src={depedLogo}
                        alt="DepEd Logo"
                        className="mx-1 xl:px-0 pr-2"
                        width={150}
                        height={24}
                    />
                </Link>
                <Link href="/" className='xl:mx-4'>
                    <Image
                        src={usAidLogo}
                        alt="USAID Logo"
                        className="mx-1 xl:px-0"
                        width={200}
                        height={24}
                    />
                </Link>
                <Link href="/">
                    <Image
                        src={rtiLogo}
                        alt="RTI Logo"
                        className="mx-1 xl:px-0 pl-2"
                        width={150}
                        height={24}
                    />
                </Link>
            </div>

            {/* abc+ */}
            <p className='xl:hidden font-semibold text-[#07336E] text-center py-4'>
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
                    <div className='text-[14px] text-[#656565] font-medium'>
                        {getCurrentYear()} ABC+. All Rights Reserved.
                    </div>
                </div>
                <div className='text-[14px] text-[#656565] text-center font-medium'>
                    Privacy Policy | Terms of Use
                </div>
            </div>
        </div>
      </div>
  );
};
