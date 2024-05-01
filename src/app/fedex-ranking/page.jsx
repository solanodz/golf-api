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

    const url = process.env.NEXT_PUBLIC_FEDEX_RANKING_URL;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY,
            'X-RapidAPI-Host': process.env.NEXT_PUBLIC_FEDEX_RANKING_API_HOST
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
                <h1 className='font-bold text-3xl tracking-tight '>{data?.name}</h1>
                <p>{data?.description}</p>
            </div>
            <div className='max-w-3xl mx-auto my-8'>
                <p>Ranking FedEx del año {data?.year}</p>
                <Table>
                    <TableCaption>A list of your recent invoices.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className=" text-xs text-left">Puesto</TableHead>
                            <TableHead className='text-xs'>Jugador</TableHead>
                            <TableHead className='text-xs'>Victorias</TableHead>
                            <TableHead className='text-xs '>Eventos</TableHead>
                            <TableHead className='text-xs '>Veces en top10</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data?.rankings.map((ranking, index) => (
                            <TableRow key={index} className='text-left'>
                                <TableCell className="font-medium text-xs">{ranking.rank}°</TableCell>
                                <TableCell className='font-semibold text-xs'>{ranking.firstName} {ranking.lastName}</TableCell>
                                <TableCell className='text-center text-slate-700 font-semibold'>{ranking.numWins}</TableCell>
                                <TableCell className='text-center'>{ranking.events}</TableCell>
                                <TableCell className='text-center'>{ranking.numTop10s}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </div>
        </div>
    )
}

export default Page
