import { Button, Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 4,
        a: { textDecoration: "none" },
      }}
    >
      <Link to="/form/users">
        <Button variant="outlined">User Form</Button>
      </Link>
      <Link to="/form/product">
        <Button variant="outlined" sx={{ ml: 3 }}>
          Product Form
        </Button>
      </Link>
    </Container>
  );
}
