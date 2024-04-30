"use client"

import { useState, useEffect } from 'react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


const Page = () => {

    const [data, setData] = useState(null);

    // const url = 'https://golf-leaderboard-data.p.rapidapi.com/world-rankings'
    // headers: {
    //     'X-RapidAPI-Key': '0f7de4c0d4mshd8a6a62ef1b964bp1a69fcjsnc125c166ff7b',
    //     'X-RapidAPI-Host': 'golf-leaderboard-data.p.rapidapi.com'
    // }

    const url = process.env.NEXT_PUBLIC_WORLD_RANKING_URL;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.NEXT_PUBLIC_WORLD_RANKING_API_KEY,
            'X-RapidAPI-Host': process.env.NEXT_PUBLIC_WORLD_RANKING_API_HOST
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
        <div className='mx-auto max-w-7xl my-12'>
            <div className='text-center'>
                <h1 className='font-bold text-3xl tracking-tight '>{data?.meta?.title}</h1>
                <p>{data?.meta?.description}</p>
            </div>
            <div className='max-w-3xl mx-auto my-8'>
                <p>Last update: {data?.results?.last_updated}</p>
                <Table>
                    <TableCaption>A list of your recent invoices.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className=" text-xs text-left">Puesto</TableHead>
                            <TableHead className='text-xs'>Jugador</TableHead>
                            <TableHead className='text-xs'>Puntos</TableHead>
                            <TableHead className='text-xs '>Pts. Ganados</TableHead>
                            <TableHead className='text-xs '>Pts. Perdidos</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data?.results?.rankings.map((ranking, index) => (
                            <TableRow key={index} className='text-left'>
                                <TableCell className="font-medium text-xs">{ranking.position}°</TableCell>
                                <TableCell className='font-semibold text-xs'>{ranking.player_name}</TableCell>
                                <TableCell className='text- text-xs text-slate-700 font-semibold'>{ranking.total_points}</TableCell>
                                <TableCell className='text-green-500 text-xs '>{ranking.points_gained}</TableCell>
                                <TableCell className='text-red-500 text-xs '>{ranking.points_lost}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </div>
        </div>
    )
}

export default Page
