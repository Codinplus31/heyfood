import {
  Box,
  Typography,
  Button,
  Stack,
  Card,
  CardContent
} from "@mui/material";

export default function Cards() {
  let arr = [0, 0, 0, 0, 0, 0];

  return (
    <Box sx={{ width: "100%" }}>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h4" sx={{ fontSize: "175%", fontWeight: 600 }}>
          Spend Less, Order More!🤩
        </Typography>
        <Button variant="text" sx={{ color: "black", textTransform: "none" }}>
          See all
        </Button>
      </Stack>

      {/* ✅ Responsive Grid Layout */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(2, 1fr)",   // mobile/tablet (<= 1299px)
            lg: "repeat(3, 1fr)",   // large screens (> 1299px)
          },
          gap: "1.5em",
          marginTop: "20px",
          width: "90%",
        }}
      >
        {arr.map((e, index) => (
          <Box key={index} sx={{ width: {lg:' 21vw', xs: '34.5vw'}, minWidth: {
            lg: "21vw"}, height: "max-content" }}>
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
