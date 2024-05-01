"use client"

import Scorecards from '@/components/Scorecards'
import React, { useState, useEffect } from 'react'

const Page = () => {

    const [scorecard, setScorecard] = useState(null);

    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_SCORECARD_URL, {
            method: 'GET',
            headers: {
                'x-rapidapi-host': process.env.NEXT_PUBLIC_SCORECARD_API_HOST,
                'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPID_API_KEY
            }
        })
            .then(response => response.json())
            .then(data => setScorecard(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className='mx-auto max-w-7xl my-12 text-slate-600'>
            <div className='text-center'>
                <h1 className='font-bold text-3xl tracking-tight  '>SCORECARD</h1>

            </div>
            <div className='max-w-3xl mx-auto my-8'>
                <Scorecards />
            </div>
        </div>
    )
}

export default Page
