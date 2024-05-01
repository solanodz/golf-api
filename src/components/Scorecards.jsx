"use client"

import React, { useEffect, useState } from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


const Scorecards = () => {

    const [data, setData] = useState(null);

    // const url = 'https://golf-leaderboard-data.p.rapidapi.com/world-rankings'
    // headers: {
    //     'X-RapidAPI-Key': '0f7de4c0d4mshd8a6a62ef1b964bp1a69fcjsnc125c166ff7b',
    //     'X-RapidAPI-Host': 'golf-leaderboard-data.p.rapidapi.com'
    // }

    const url = process.env.NEXT_PUBLIC_SCORECARD_URL;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY,
            'X-RapidAPI-Host': process.env.NEXT_PUBLIC_SCORECARD_API_HOST
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
    }, []);

    return (
        <div>
            {/* <h1>{data?.[0].firstName} {data?.[0].lastName}</h1> */}
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className='text-xs'>
                            {Array.isArray(data?.[0].holes) && data?.[0].holes?.map((hole, index) => <div key={index}>{hole.holeId.$numberInt}</div>)}
                        </TableHead>
                        {/* <TableHead className=" text-xs text-left"></TableHead>
                        <TableHead className='text-xs'>{data?.[0].holes?.[1].holeId.$numberInt}</TableHead>
                        <TableHead className='text-xs'>2</TableHead>
                        <TableHead className='text-xs '>3</TableHead>
                        <TableHead className='text-xs '>4</TableHead>
                        <TableHead className='text-xs '>5</TableHead>
                        <TableHead className='text-xs '>6</TableHead>
                        <TableHead className='text-xs '>7</TableHead>
                        <TableHead className='text-xs'>7</TableHead>
                        <TableHead className='text-xs'>9</TableHead>
                        <TableHead className='text-xs bg-slate-100'>IDA</TableHead>
                        <TableHead className='text-xs '>10</TableHead>
                        <TableHead className='text-xs '>11</TableHead>
                        <TableHead className='text-xs '>12</TableHead>
                        <TableHead className='text-xs '>13</TableHead>
                        <TableHead className='text-xs'>14</TableHead>
                        <TableHead className='text-xs '>15</TableHead>
                        <TableHead className='text-xs '>16</TableHead>
                        <TableHead className='text-xs '>17</TableHead>
                        <TableHead className='text-xs '>18</TableHead>
                        <TableHead className='text-xs '>VUELTA</TableHead>
                        <TableHead className='text-xs'>TOTAL</TableHead> */}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {/* {data?.leaderboardRows?.map((row, index) => ( */}
                    <TableRow className='text-left'>
                        <TableCell className="font-medium text-xs">PAR</TableCell>
                        <TableCell className='text-xs'>4</TableCell>
                        <TableCell className='text-xs'>4</TableCell>
                        <TableCell className='text-xs '>3</TableCell>
                        <TableCell className='text-xs '>4</TableCell>
                        <TableCell className='text-xs '>4</TableCell>
                        <TableCell className='text-xs '>4</TableCell>
                        <TableCell className='text-xs '>4</TableCell>
                        <TableCell className='text-xs'>4</TableCell>
                        <TableCell className='text-xs'>4</TableCell>
                        <TableCell className='text-xs '>35</TableCell>
                        <TableCell className='text-xs '>4</TableCell>
                        <TableCell className='text-xs '>4</TableCell>
                        <TableCell className='text-xs '>3</TableCell>
                        <TableCell className='text-xs '>4</TableCell>
                        <TableCell className='text-xs'>4</TableCell>
                        <TableCell className='text-xs '>4</TableCell>
                        <TableCell className='text-xs '>4</TableCell>
                        <TableCell className='text-xs '>4</TableCell>
                        <TableCell className='text-xs '>4</TableCell>
                        <TableCell className='text-xs '>35</TableCell>
                        <TableCell className='text-xs'>70</TableCell>
                    </TableRow>
                    <TableRow className='text-left font-semibold'>
                        <TableCell className="font-medium text-xs">SCORE</TableCell>
                        <TableCell className='text-xs'>4</TableCell>
                        <TableCell className='text-xs'>4</TableCell>
                        <TableCell className='text-xs'>3</TableCell>
                        <TableCell className='text-xs'>4</TableCell>
                        <TableCell className='text-xs'>4</TableCell>
                        <TableCell className='text-xs'>4</TableCell>
                        <TableCell className='text-xs'>4</TableCell>
                        <TableCell className='text-xs'>4</TableCell>
                        <TableCell className='text-xs'>4</TableCell>
                        <TableCell className='text-xs'>35</TableCell>
                        <TableCell className='text-xs'>4</TableCell>
                        {/* Eagle */}
                        <TableCell className='text-xs px-1'><p className='h-7 w-7 m-1 font-semibold border-4 border-double border-slate-400 flex text-center justify-center items-center rounded-full'>2</p></TableCell>
                        {/* Birdie */}
                        <TableCell className='text-xs px-1'><p className='h-7 w-7 m-1 font-semibold border-2 border-slate-400 flex text-center justify-center items-center rounded-full'>3</p></TableCell>
                        {/* Par */}
                        <TableCell className='text-xs px-1'><p className='h-7 w-7 m-1 font-semibold flex text-center justify-center items-center rounded-full'>4</p></TableCell>
                        {/* Bogey */}
                        <TableCell className='text-xs px-1'><p className='h-7 w-7 m-1 font-semibold border-2 border-slate-400 flex text-center justify-center items-center '>5</p></TableCell>
                        {/* Doble bogey */}
                        <TableCell className='text-xs px-1'><p className='h-7 w-7 m-1 font-semibold border-4 border-double border-slate-400 flex text-center justify-center items-center'>6</p></TableCell>
                        <TableCell className='text-xs px-1'>4</TableCell>
                        <TableCell className='text-xs'>4</TableCell>
                        <TableCell className='text-xs'>4</TableCell>
                        <TableCell className='text-xs'>35</TableCell>
                        <TableCell className='text-xspx-1'><p className='h-9 w-9 m-1 font-semibold rounded-full bg-slate-500 text-white flex text-center justify-center items-center'>70</p></TableCell>
                    </TableRow>
                    {/* ))} */}
                </TableBody>
            </Table>
        </div>
    )
}

export default Scorecards
