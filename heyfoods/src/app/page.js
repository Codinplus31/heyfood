"use client";
import Image from "next/image";
// import styles from "./page.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import {Box, Stack, IconButton, useMediaQuery} from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Header from './header';
import Main from './main';
import "./index.css";
import  {useState, useRef} from "react";

export default function Home() {
  const restaurantTags = [
  {
    label: "Rice",
    icon: "/tags/rice.svg",
  },
  {
    label: "Chicken",
    icon: "/tags/chicken.svg",
  },
  {
    label: "Shawarma",
    icon: "/tags/shawarma.svg",
  },
  {
    label: "Juice",
    icon: "/tags/juice.svg",
  },
  {
    label: "Goat Meat",
    icon: "/tags/goatmeat.svg",
  },
  {
    label: "Fast Food",
    icon: "/tags/fastfood.svg",
  },
  {
    label: "Amala",
    icon: "/tags/amala.svg",
  },
  {
    label: "Soup Bowl",
    icon: "/tags/soupbowl.svg",
  },
  {
    label: "Turkey",
    icon: "/tags/turkey.svg",
  },
  {
    label: "Grills",
    icon: "/tags/grills.svg",
  },
  {
    label: "Grocery", 
    icon: "/tags/grocery.svg",
  },
  {
    label: "Doughnuts",
    icon: "/tags/doughnut.svg",
  },
  {
    label: "Smothies",
    icon: "/tags/smothies.svg",
  },
  {
    label: "Vegetable",
    icon: "/tags/vegetable.svg",
  },
  {
    label: "Ice Cream",
    icon: "/tags/icecream.svg",
  },
  {
    label: "Pizza",
    icon: "/tags/pizza.svg",
  },
  {
    label: "Native Corner",
    icon: "/tags/nativecorner.svg",
  },
  {
    label: "SandWish",
    icon: "/tags/sandwish.svg",
  },
  {
    label: "Snacks",
    icon: "/tags/snacks.svg",
  },
  {
    label: "Burger",
    icon: "/tags/burger.svg",
  },
  {
    label: "Parfait",
    icon: "/tags/parfait.svg",
  },
  {
    label: "Chinese",
    icon: "/tags/chinese.svg",
  },
  {
    label: "Ewa Agoyin",
    icon: "/tags/ewaagoyin.svg",
  },
  {
    label: "Pastries",
    icon: "/tags/pastries.svg",
  },
  {
    label: "Cup Cakes",
    icon: "/tags/cupcake.svg",
  },
  {
    label: "Salad",
    icon: "/tags/salad.svg",
  },
  {
    label: "Small Chops",
    icon: "/tags/smallchops.svg",
  },
  {
    label: "Sea food",
    icon: "/tags/seafood.svg",
  },
  {
    label: "Peppersoup",
    icon: "/tags/peppersoup.svg",
  },
  {
    label: "fries",
    icon: "/tags/fries.svg",
  },
  {
    label: "Smoothies",
    icon: "/tags/smoothes.svg",
  },
  {
    label: "Yoghurt",
    icon: "/tags/yohurt.svg",
  },
  {
    label: "Abacha",
    icon: "/tags/abacha.svg",
  },
  // ...add the rest here
];

const bannerRef = useRef(null);
  const isMobile = useMediaQuery('(max-width:600px)');

  const scrollLeft = () => {
    if (bannerRef.current) {
      bannerRef.current.scrollLeft -= 300;
    }
  };

  const scrollRight = () => {
    if (bannerRef.current) {
      bannerRef.current.scrollLeft += 300;
    }
  };

  
const bannerRef = useRef(null);

  const scrollLeft = () => {
    if (bannerRef.current) {
      bannerRef.current.scrollBy({
        left: -500,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (bannerRef.current) {
      bannerRef.current.scrollBy({
        left: 500,
        behavior: 'smooth',
      });
    }
  };

  let ban = ["./banners/Frame 2664.png", "./banners/Frame 1572.png", "./banners/Frame 2684 (1).png", "./banners/Survey banner.png", "./banners/Frame 1599.png"]
  return (
       
      <main style={{width: "100%",  display: "flex", alignItems: "center",  flexDirection: "column"}}>
      <Header/>
      <div style={{width: "95%", padding: "1.6em 0em", borderBottom: "2px solid rgba(150, 150, 150, 0.1)", }}>
<Button
              variant="contained"
              disableElevation
              // startIcon={}

  sx={{
  bgcolor: 'common.black',
  color: 'common.white',
      padding: "1.4em 2.7em",
      marginRight: "12px",
  borderRadius: '5em',
  '&:hover': {
    bgcolor: 'gray', // Uses green from theme
  }
}}
            >
              <span className="jss354 jss378">Restaurants</span>
            </Button>
<Button
              variant="text"
              color="inherit"
              // startIcon={}

  sx={{
  
  color: 'black',
      padding: "1.4em 2.7em",
  borderRadius: '5em',
  minWidth: "64px"
  
}}
            >
              <span className="jss354 jss378">Grocery</span>
            </Button>
      </div>
      <Box id="root_restaurantTags" sx={{ p: 2, paddingLeft: "5em", width: '95%', overflowX: "scroll", '&::-webkit-scrollbar': {
            display: 'none', // Hide scrollbar for Chrome/Safari
          }, }}>
      <Stack
        direction="row"
        justifyContent={"flex-start"}
        gap={2}
        id="restaurantTags"
        
      >
        {restaurantTags.map((tag) => (
          <Button
            key={tag.label}
            variant="text"
            color="inherit"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textTransform: "none",
              minWidth: 80,
              color: "black"
  
            }}
            
          >
            <img
              src={tag.icon}
              alt={tag.label}
              style={{ width: 40, height: 40, marginBottom: 4 }}
            />
            <Typography variant="body2">{tag.label}</Typography>
          </Button>
        ))}
      </Stack>
    </Box>
    <Box
      sx={{
        width: '100vw',
        height: '162px',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {isMobile ? (
        // Mobile View: Swiper with dots
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          style={{ width: '100%', height: '162px' }}
        >
          {ban.map((e, i) => (
            <SwiperSlide key={i}>
              <Card
                sx={{
                  height: '100%',
                  width: '100%',
                  borderRadius: '0.6em',
                  aspectRatio: 2.435 / 1,
                }}
              >
                <img
                  src={e}
                  alt={`banner-${i}`}
                  style={{ width: '100%', height: '100%', borderRadius: '0.6em' }}
                />
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        // Desktop View: Scrollable + Arrows
        <>
          <IconButton
            onClick={scrollLeft}
            sx={{
              background: '#EEEEEE',
              position: 'absolute',
              left: '14px',
              zIndex: 10,
            }}
          >
            <ArrowBackIcon sx={{ color: 'black' }} />
          </IconButton>

          <Stack
            ref={bannerRef}
            direction="row"
            spacing={2}
            sx={{
              overflowX: 'scroll',
              height: '162px',
              paddingLeft: '2.3rem',
              scrollbarWidth: 'none',
              '&::-webkit-scrollbar': {
                display: 'none',
              },
              scrollBehavior: 'smooth',
              gap: '2em',
            }}
          >
            {ban.map((e, i) => (
              <Card
                key={i}
                sx={{
                  height: '100%',
                  minWidth: { lg: '29.5vw', xs: '80%' },
                  borderRadius: '0.6em',
                  aspectRatio: 2.435 / 1,
                }}
              >
                <img
                  src={e}
                  alt={`banner-${i}`}
                  style={{ width: '100%', height: '100%', borderRadius: '0.6em' }}
                />
              </Card>
            ))}
          </Stack>

          <IconButton
            onClick={scrollRight}
            sx={{
              background: '#EEEEEE',
              position: 'absolute',
              right: '14px',
              zIndex: 10,
            }}
          >
            <ArrowForwardIcon sx={{ color: 'black' }} />
          </IconButton>
        </>
      )}
    </Box>

      <Main />
     </main>
    
  );
}
