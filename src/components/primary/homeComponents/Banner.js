'use client'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from "next/image";
import Link from "next/link";
import logo from "../../../Asset/logo2.png";
const Banner = () => {
    const image1 = 'https://images.pexels.com/photos/6801636/pexels-photo-6801636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
    useEffect(() => {
        AOS.init(); // Initialize AOS when the component mounts
    }, []);
    return (
        <div className="w-full md:flex items-center justify-center relative z-[1] dark:text-white -mt-24 pb-52 pt-44" >
        <div className="w-full h-full absolute top-0 left-0 z-[-1] bg-[#E9F1FA] dark:bg-neutral-800"></div>
            <div className="relative container  mx-auto w-[85%]">
                <div className="flex flex-col-reverse md:flex-row justify-center md:justify-between  items-center gap-10 h-full overflow-hidden">
                    <div data-aos="fade-right" className='text-neutral-800 space-y-7 md:w-1/2 dark:text-white text-center md:text-left w-full '>
                        <h2 className="text-5xl font-semibold leading-tight dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:to
                         -[#008cbb] dark:from-white">Unearth Insights <br></br> With Our Thorough <span className="bg-gradient-to-r from-[#00ABE4] dark:text-gray-300  to-[#008cbb] text-transparent bg-clip-text">Surveys</span></h2>
                        <p className="">Share Your Thoughts  and Shape the Future!</p>
                            <Link href="/about"><button className="btn-lg border border-transparent rounded-md bg-[#00ABE4] text-white shadow font-semibold mr-5  dark:bg-transparent dark:border-white hover:bg-white hover:border-[#00abe4] hover:border dark:hover:text-black dark:hover:bg-white dark:hover:border-transparent dark:text-white  hover:text-[#00ABE4] mt-6 transition duration-500 ease-in-out">Create Survey</button> </Link>
                    </div>
                    <div className="" data-aos="fade-left">
                        <Image width={600} height={600} alt="company logo" src={logo}className={`max-w-md object-contain object-center`}  />

                    </div>
                </div>
                
            </div>



        </div>
    )
};

export default Banner;