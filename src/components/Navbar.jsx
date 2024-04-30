import Link from 'next/link'
import React from 'react'
import { buttonVariants } from './ui/button'

const Navbar = () => {
    return (
        <div>
            <nav className='flex text-right gap-2 justify-end mb-12 p-2 bg-slate-300'>
                <Link href='/login' className={buttonVariants({ variant: 'default' })}>Inicia sesión</Link>
                <Link href='/login' className={buttonVariants({ variant: 'default' })}>Registrate</Link>
            </nav>
        </div>
    )
}

export default Navbar
