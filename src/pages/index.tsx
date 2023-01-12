import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "../shared/components/Link";
import ProTip from "../shared/components/ProTip";
import Copyright from "../shared/components/Copyright";
import { Button } from "@mui/material";
import { useAppThemeContext } from "../contexs";

export default function Home() {
  const { toggleTheme } = useAppThemeContext();
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          MUI v5 + Next.js with TypeScript example
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <ProTip />
        <Copyright />
        <Button variant="outlined" onClick={toggleTheme}>
          teste
        </Button>
      </Box>
    </Container>
  );
}
