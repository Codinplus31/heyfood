
import React, {useState} from 'react';

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

export default function Sort(){
  const [sortKey, setSortKey] = useState("Most Popular");

    return ( <Box sx={{ p: 2, width: "20%",  display: {
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
    </Box> )
}