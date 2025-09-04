'use client';

import React, {useState} from 'react';
// import Typography from '@mui/material/Typography';
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
// import SortIcon from '@mui/icons-material/Sort';
// import { Box, Stack } from '@mui/material';

// export default function FilterRoot() {
//   const [sortKey, setSortKey] = React.useState('Most Popular');

//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         padding: 2,
//         flexWrap: 'wrap',
//         flexDirection: "column",
//         gap: 2,
//         backgroundColor: 'background.paper',
//       }}
//       className="filterRoot"
//     >
//       {/* Left: Title & Store Count */}
//       <Stack direction="row" spacing={2} alignItems="center">
//         <Typography variant="h5" fontWeight="600">
//           All Stores
//         </Typography>
//         <Typography variant="body1" color="text.secondary">
//           (570 Stores)
//         </Typography>
//       </Stack>

//       {/* Middle: Sort Label with Icon */}
//       <Typography
//         variant="h5"
//         component="h5"
//         sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
//         className="sort"
//       >
//         <SortIcon fontSize="small" />
//         Sort
//       </Typography>

//       {/* Right: Radio Group for Sorting Options */}
//       <FormControl component="fieldset">
//         <RadioGroup
//           row
//           name="sortKey"
//           value={sortKey}
//           onChange={(e) => setSortKey(e.target.value)}
//           sx={{ flexDirection: { xs: 'column', sm: 'row' }, gap: 1 }}
//         >
//           {['Most Popular', 'Nearest', 'Highest rated', 'Newest', 'Most Rated'].map((value) => (
//             <FormControlLabel
//               key={value}
//               value={value}
//               control={<Radio size="small" />}
//               label={value}
//               sx={{
//                 '& .MuiTypography-root': { fontSize: '0.875rem' },
//                 margin: 0,
//               }}
//             />
//           ))}
//         </RadioGroup>
//       </FormControl>
//     </Box>
//   );
// }


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
import All from './all.js';
export default function StoreFilter() {
  const [sortKey, setSortKey] = useState("Most Popular");

  return (
    <div style={{width: "100%", height: "max-content", marginTop: "5em", marginBottom: "4em"}}>

    <Stack direction="row" justifyContent="space-around">
    <Box sx={{ p: 2, width: "20%", border: "1px solid #e0e0e0" }}>
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
    <Box sx={{width: "80%", border: "1px solid #e0e0e0"}}>
    <Cards />
    <All />
    </Box>

    </Stack>
    </div>
  );
}