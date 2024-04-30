import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='bg-zinc-100 border-b w-full font-semibold text-right border-zinc-300 p-4 '>
            <div className='flex flex-row gap-4 ml-auto w-full justify-end'>
                <Link href='/'>Home</Link>
                <Link href='/schedules'>Torneos</Link>
                <Link href='/world-ranking'>World Ranking</Link>
                <Link href='/leaderboard'>Leaderboard</Link>
            </div>
        </div>
    )
}

export default Navbar
