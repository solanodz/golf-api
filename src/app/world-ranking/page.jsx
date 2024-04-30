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

    const url = 'https://golf-leaderboard-data.p.rapidapi.com/world-rankings';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '471c6c95fdmsh5030523155cb834p186b27jsn8e86428abcbc',
            'X-RapidAPI-Host': 'golf-leaderboard-data.p.rapidapi.com'
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
                            <TableHead className="w-[100px]">Puesto</TableHead>
                            <TableHead>Jugador</TableHead>
                            <TableHead>Puntos</TableHead>
                            <TableHead>Pts. Ganados</TableHead>
                            <TableHead className=''>Pts. Perdidos</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data?.results?.rankings.map((ranking, index) => (
                            <TableRow key={index} className='text-left'>
                                <TableCell className="font-medium">{ranking.position}</TableCell>
                                <TableCell className='font-semibold'>{ranking.player_name}</TableCell>
                                <TableCell className='text-'>{ranking.total_points}</TableCell>
                                <TableCell className='text-green-500'>{ranking.points_gained}</TableCell>
                                <TableCell className='text-red-500'>{ranking.points_lost}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </div>
        </div>
    )
}

export default Page
