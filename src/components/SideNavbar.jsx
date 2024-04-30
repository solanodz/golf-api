import { Globe2, HomeIcon, TrophyIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { FaFedex, FaHome } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import { BsFillTrophyFill } from "react-icons/bs";
import { MdLeaderboard } from "react-icons/md";

const Navbar = () => {
    return (
        <div className='bg-zinc-100 border-b sm:w-fit sm:justify-between font-semibold sm:min-h-screen border-zinc-300 p-4 '>
            <div className='flex sm:flex-col flex-row gap-4 ml-auto justify-center my-0 sm:my-6 w-full'>
                <Link href='/' className='flex items-center gap-2'>
                    <FaHome className='h-6 w-6' />
                    <span className='hidden md:flex'> Home</span>
                </Link>
                <Link href='/schedules' className='flex items-center gap-2'>
                    <BsFillTrophyFill className='h-6 w-6' />
                    <span className='hidden md:flex'> Torneos</span>
                </Link>
                <Link href='/world-ranking' className='flex items-center gap-2'>
                    <BiWorld className='h-6 w-6' />
                    <span className='hidden md:flex'> Ranking Mundial</span>
                </Link>
                <Link href='/fedex-ranking' className='flex items-center gap-2'>
                    <FaFedex className='h-6 w-6' />
                    <span className='hidden md:flex'> Ranking FedEx</span>
                </Link>
                <Link href='/leaderboard' className='flex items-center gap-2'>
                    <MdLeaderboard className='h-6 w-6' />
                    <span className='hidden md:flex'>Leaderboard</span>
                </Link>
            </div>
        </div>
    )
}

export default Navbar
