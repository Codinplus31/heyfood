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
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ width: "95%", margin: "0 auto" }}
      >
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
      xs: "1fr",              // mobile ≤600px → 1 column
      sm: "repeat(2, 1fr)",   // ≥600px → 2 columns
      md: "repeat(2, 1fr)",   // ≥900px still 2 columns
      lg: "repeat(3, 1fr)",   // ≥1300px → 3 columns
    },
    gap: "1.5em",
    marginTop: "20px",
    width: "95%",
    marginX: "auto",
  }}
>
        {arr.map((e, index) => (
          <Card
            key={index}
            elevation={0}
            sx={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "100%",
            }}
          >
            {/* Banner Card */}
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
                    position: "absolute",
                    top: "10px",
                    fontSize: "92%",
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
                    bottom: "10px",
                    fontSize: "92%",
                  }}
                >
                  Opens at 09:00 AM
                </Typography>
              </CardContent>
            </Card>

            {/* Info Card */}
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
          </Card>
        ))}
      </Box>
    </Box>
  );
}
