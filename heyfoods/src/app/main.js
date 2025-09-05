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
// import Sort from "./sort.js"
import All from './all.js';
import { MyContext } from './page.js';

export default function StoreFilter() {
  const { data } = useContext(MyContext);
  const [groupedByGenre, setgroup] = useState(null)
  const [sort, setsort] = useState(false);
  const [sortdata, setsortdata] = useState(null)
  const [sortKey, setSortKey] = useState("Most Popular");

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
    <Box sx={{ p: 2, width: "20%",  display: {
      xs: "none",
      sm:"block"
    } }}>
      <Stack direction="column" alignItems="space-between">
        <Typography variant="h5" sx={{marginBottom: "1em", fontWeight: 800, fontSize: "145%"}}>All Stores</Typography>
        <Typography variant="body1" color="text.secondary" sx={{marginBottom: "1em", fontWeight: 400, fontSize: "120%"}}>
          (570 Stores)
        </Typography>
      </Stack>

      <Stack direction="row" spacing={1} alignItems="center" mt={2}>
        <img src="/icons/new/sort-desc.svg" alt="sort" />
        <Typography variant="h5" sx={{fontWeight: 800}}>Sort</Typography>
      </Stack>

      <FormControl component="fieldset" sx={{ mt: 2 }}>
        <RadioGroup
          name="sortKey"
          value={sortKey}
          onChange={(e) => setSortKey(e.target.value)}
        >
          <FormControlLabel
            value="Most Popular"
            control={<Radio sx={{background: "#efefef"}}/>}
            label="Most Popular"
          />
          <FormControlLabel value="Nearest" control={<Radio />} label="Nearest" />
          <FormControlLabel
            value="Highest rated"
            control={<Radio sx={{background: "#efefef"}}/>}
            label="Highest rated"
          />
          <FormControlLabel value="Newest" control={<Radio />} label="Newest" />
          <FormControlLabel
            value="Most Rated"
            control={<Radio sx={{background: "#efefef"}}/>}
            label="Most Rated"
          />
        </RadioGroup>
      </FormControl>
    </Box> 
    <Box sx={{width: {xs: "100%", sm:"80%"}}}>
      {sort ? 
      <All />: 
    groupedByGenre !== null && groupedByGenre?.map(((e,i)=> (
        
        <Cards data={e} key={i}/>
      )))
      }
      <All data={data?.restaurants} setsort={setsort} issort={sort} isnull={data}/>
      </Box>


    </Stack>
    </div>
  );
}