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
import SelectTourn from '@/components/SelectTourn';
import Link from 'next/link';



const Page = () => {

    const [data, setData] = useState(null);
    const [tournId, setTournId] = useState(null);

    // const url = 'https://golf-leaderboard-data.p.rapidapi.com/world-rankings'
    // headers: {
    //     'X-RapidAPI-Key': '0f7de4c0d4mshd8a6a62ef1b964bp1a69fcjsnc125c166ff7b',
    //     'X-RapidAPI-Host': 'golf-leaderboard-data.p.rapidapi.com'
    // }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const url = process.env.NEXT_PUBLIC_LEADERBOARD_URL + `&tournId=${tournId}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY,
                'X-RapidAPI-Host': process.env.NEXT_PUBLIC_LEADERBOARD_API_HOST
            }
        };


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
    }

    return (
        <div className='mx-auto max-w-7xl my-12 text-slate-600'>
            <div className='text-center'>
                <h1 className='font-bold text-3xl tracking-tight  '>{data?.tournId}</h1>

            </div>
            <div className='max-w-3xl mx-auto my-8'>
                <form onSubmit={handleSubmit}>
                    <label>
                        Tournament ID:
                        <input
                            type="text"
                            value={tournId}
                            onChange={event => setTournId(event.target.value)}
                        />
                    </label>
                    <button type="submit">Submit</button>
                </form>
                <p>Corte: ({data?.cutLines?.[0]?.cutScore})</p>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className=" text-xs text-left">Puesto</TableHead>
                            <TableHead className='text-xs'>Jugador</TableHead>
                            <TableHead className='text-xs'>Total</TableHead>
                            <TableHead className='text-xs '>1° ronda</TableHead>
                            <TableHead className='text-xs '>2° ronda</TableHead>
                            <TableHead className='text-xs '>3° ronda</TableHead>
                            <TableHead className='text-xs '>4° ronda</TableHead>
                            <TableHead className='text-xs '>Pts. Perdidos</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data?.leaderboardRows?.map((row, index) => (
                            <TableRow key={index} className='text-left'>
                                <TableCell className="font-medium text-xs">{row.position}°</TableCell>
                                <TableCell className='font-semibold text-xs'>{row.firstName} {row.lastName}</TableCell>
                                <TableCell className={`bg-slate-100 font-semibold text-center text-xs ${row.total < 0 ? 'text-green-500' : 'text-red-500' && row.total === 'E' ? 'text-blue-500' : 'text-red-500'}`}>{row.total}</TableCell>
                                <TableCell className={`text-xs text-center ${row.rounds?.[0]?.scoreToPar < 0 ? 'text-green-500' : 'text-red-500' && row.rounds?.[0]?.scoreToPar === 'E' ? 'text-blue-500' : 'text-red-500'}`}>
                                    <Link href={`/player/${row.playerId}`}>
                                        {row.rounds?.[0]?.scoreToPar}
                                    </Link>
                                </TableCell>

                                <TableCell className={`text-xs text-center ${row.rounds?.[1]?.scoreToPar < 0 ? 'text-green-500' : 'text-red-500' && row.rounds?.[1]?.scoreToPar === 'E' ? 'text-blue-500' : 'text-red-500'}`}>{row.rounds?.[1]?.scoreToPar}</TableCell>
                                <TableCell className={`text-xs text-center ${row.rounds?.[2]?.scoreToPar < 0 ? 'text-green-500' : 'text-red-500' && row.rounds?.[2]?.scoreToPar === 'E' ? 'text-blue-500' : 'text-red-500'}`}>{row.rounds?.[2]?.scoreToPar}</TableCell>
                                <TableCell className={`text-xs text-center ${row.rounds?.[3]?.scoreToPar < 0 ? 'text-green-500' : 'text-red-500' && row.rounds?.[3]?.scoreToPar === 'E' ? 'text-blue-500' : 'text-red-500'}`}>{row.rounds?.[3]?.scoreToPar}</TableCell>
                                <TableCell TableCell className='text-red-500 text-xs '>{row.points_lost}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </div>
        </div>
    )
}

export default Page
