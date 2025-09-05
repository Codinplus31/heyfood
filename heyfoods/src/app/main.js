'use client';

import React, {useState, useContext, useEffect } from 'react';

import {
  Box,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Stack
} from "@mui/material";

import Cards from "./card.js"
import Sort from "./sort.js"
import All from './all.js';
import { MyContext } from './page.js';

export default function StoreFilter() {
  const { data } = useContext(MyContext);
  const [groupedByGenre, setgroup] = useState(null)
  useEffect(()=> {
    if(data !== null){

      const vendors = data?.restaurants;
      // Step 1: Collect all unique genres
      const allGenres = [...new Set(vendors?.flatMap(v => v.genre))];
      
      // Step 2: Map each genre to an object with vendors that include it
      const groupedByGenre = allGenres.map(genre => ({
        genre,
        vendors: vendors.filter(vendor => vendor.genre.includes(genre))
      }));
      setgroup(groupedByGenre)
    }
  }, [data])

console.log(groupedByGenre);

  return (
    <div style={{width: "100%", height: "max-content", marginTop: "5em", marginBottom: "4em"}}>

    <Stack direction="row" justifyContent="space-around">
   <Sort />
    <Box sx={{width: {xs: "100%", sm:"80%"}}}>
      {groupedByGenre !== null && groupedByGenre?.map(((e,i)=> (
        
        <Cards data={e} key={i}/>
      )))}
    <All />
    </Box>

    </Stack>
    </div>
  );
}