"use client"


import React, { useEffect, useState } from 'react'

const Page = () => {

    const [data, setData] = useState(null);

    // const url = 'https://golf-leaderboard-data.p.rapidapi.com/world-rankings'
    // headers: {
    //     'X-RapidAPI-Key': '0f7de4c0d4mshd8a6a62ef1b964bp1a69fcjsnc125c166ff7b',
    //     'X-RapidAPI-Host': 'golf-leaderboard-data.p.rapidapi.com'
    // }

    const url = 'https://live-golf-data.p.rapidapi.com/schedule?orgId=1&year=2024';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0f7de4c0d4mshd8a6a62ef1b964bp1a69fcjsnc125c166ff7b',
            'X-RapidAPI-Host': 'live-golf-data.p.rapidapi.com'
        }
    };


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url, options);
                const data = await response.json();
                setData(data);
                console.log(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <div className='max-w-7xl mx-auto'>
            {
                data && (

                    <div>
                        <h2 className='font-bold text-3xl tracking-tight my-12 text-center'>Events</h2>
                        <div className='grid grid-cols-1 sm:grid-cols-3 gap-2 m-2'>
                            {data.schedule.map((event) => (
                                <div key={event.id} className=' max-w-md bg-zinc-100 border border-zinc-300 p-2 rounded-md'>
                                    <p className='font-semibold'>{event.name}</p>
                                    <span className='text-green-600'>1° lugar: $ {event.winnersShare?.$numberInt}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Page
