import { Grid2 as Grid, Chip } from "@mui/material";

const mainMenu = [
  "Olympiáda",
  "Volby",
  "Zeman v Motole",
  "Už budu",
  "Střelba na fakultě",
];

const MainMenu = () => {
  return (
    <Grid
      size={12}
      direction="row"
      maxWidth="lg"
      sx={{
        position: "sticky",
        top: { xs: "56px", md: "64px" },
        zIndex: 1100,
        display: "flex",
        gap: "6px",
        marginLeft: "auto",
        marginRight: "auto",
        mt: { xs: 0, md: 10 },
        textAlign: "center",
        justifyContent: { xs: "flex-start", md: "center" },
        alignItems: "center",
        backgroundColor: "primary.main",
        py: "6px",
        width: "100%",
        flexWrap: "nowrap",
        overflowX: "auto",
        "&::-webkit-scrollbar": {
          display: "none",
        },
        msOverflowStyle: "none",
        scrollbarWidth: "none",
        scrollBehavior: "smooth",
        WebkitOverflowScrolling: "touch",
        minHeight: "50px",
        px: 2,
        boxSizing: "border-box",
      }}
    >
      {mainMenu.length > 1 &&
        mainMenu.map((category: string, index: number) => (
          <Chip
            component="a"
            href={category}
            key={index}
            label={category}
            clickable
            sx={{
              backgroundColor: "primary.main",
              color: "white.main",
              fontSize: "14px",
              lineHeight: "20px",
              fontWeight: 600,
              border: "1px solid rgba(255, 255, 255, 0.3)",
              borderRadius: "6px",
              padding: "8px 12px",
              flexShrink: 0,
              whiteSpace: "nowrap",
            }}
          />
        ))}
    </Grid>
  );
};

export default MainMenu;
