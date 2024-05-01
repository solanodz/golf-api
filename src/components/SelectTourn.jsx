
"use client"


import React, { useEffect, useState } from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const SelectTourn = () => {

  const [data, setData] = useState(null);

  const url = process.env.NEXT_PUBLIC_SCHEDULES_URL;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY,
      'X-RapidAPI-Host': process.env.NEXT_PUBLIC_SCHEDULES_API_HOST
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
    <Select>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Select a tournament" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {data?.schedule.map((event) => (
            <SelectItem
              key={event.tournId}
              value={event.tournId}
              onClick={() => onChange(event.tournId)}
            >
              {event.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default SelectTourn