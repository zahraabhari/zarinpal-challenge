import { Box, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Box>
      <Link to="/form/users">
        <Button>User Form</Button>
      </Link>
      <Link to="/form/product">
        <Button>Product Form</Button>
      </Link>
    </Box>
  );
}
