import { useRef } from 'react';
import {
  Box,
  Typography,
  Button, 
  IconButton,
  Stack,
  Card,
  CardContent
} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Cards() {
  let arr = [0, 0, 0, 0, 0];

  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8; // scroll 80% of visible area
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box sx={{ width: {xs: "100%", sm:"94%"}, marginBottom: "4em", marginLeft: "1em" }}>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h4" sx={{ fontSize: "175%", fontWeight: 600 }}>
          Spend Less, Order More!🤩
        </Typography>
        <Box
          sx={{
            width: "max-content",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          <Button
            variant="text"
            color="inherent"
            sx={{ color: "black", textTransform: "none" }}
          >
            See all
          </Button>
          <Box sx={{ display: "flex", gap: "15px" }}>
            <IconButton
              onClick={() => handleScroll("left")}
              sx={{ background: "#EEEEEE" }}
            >
              <ArrowBackIcon sx={{ color: "black" }} />
            </IconButton>

            <IconButton
              onClick={() => handleScroll("right")}
              sx={{ background: "#EEEEEE" }}
            >
              <ArrowForwardIcon sx={{ color: "black" }} />
            </IconButton>
          </Box>
        </Box>
      </Stack>

      <Box
        ref={scrollRef}
        id="scroll"
        sx={{
          width: "100%",
          height: "max-content",
          marginTop: "20px",
          display: "flex",
          justifyContent: "space-between",
          gap: "4em",
          overflowX: "auto",
          scrollBehavior: "smooth",
          '&::-webkit-scrollbar': { display: 'none' },
        }}
      >
        {arr.map((e, index) => (
          <Box key={index} sx={{ width: {lg:' 26.5vw', xs: '34.5vw'}, minWidth: {xs: "48%",  
            lg: "26.5vw"}, height: "max-content" }}>
            <Card
              elevation={0}
              sx={{
                backgroundImage: "url('./banners/Frame 1572.png')",
                backgroundSize: "100% 100%",
                backgroundPosition: "center",
                aspectRatio: 2.66667 / 1,
                height: "122px",
                color: "white",
              }}
            >
              <CardContent
                sx={{
                  marginTop: "auto",
                  position: "relative",
                  height: "100%",
                }}
              >
                <Typography
                  component="span"
                  variant="body1"
                  sx={{
                    background: "rgba(0, 0, 0, 0.8)",
                    padding: "0.3em 1.2em",
                    paddingBlock: "6px",
                    position: "absolute",
                    top: "10px",
                    fontSize: "92%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "4px",
                    borderRadius: "3em",
                  }}
                >
                  ₦500 off order
                </Typography>
                <Typography
                  component="span"
                  variant="body1"
                  sx={{
                    background: "#FFA900",
                    paddingInline: "10px",
                    paddingBlock: "6px",
                    borderRadius: "0.3em",
                    position: "absolute",
                    bottom: "50px",
                    fontSize: "92%",
                  }}
                >
                  Opens at 09:00 AM
                </Typography>
              </CardContent>
            </Card>
            <Card elevation={0} sx={{ marginTop: "1em" }}>
              <Typography
                variant="h5"
                sx={{ fontWeight: 500, color: "black", marginBottom: "0.3em" }}
                noWrap
              >
                Ile Iyan bodija
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#757575", marginBottom: "0.3em" }}
              >
                Goat meat, Soup bowl
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "9px",
                  marginBottom: "0.3em",
                }}
              >
                <span>⭐ 3.6</span>
                <span>737+ Ratings</span>
              </Box>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
}  
