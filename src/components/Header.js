import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material";

const navItems = [
  { name: "Transaction List", path: "/" },
  { name: "Add Transaction", path: "/add-transaction" },
  { name: "Summary", path: "/summary" }
];

const Header = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            onClick={() => navigate("/")}
          >
            {"Expense-Tracker"}
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map(item => {
              const { name, path } = item;
              return (
                <Button
                  key={item}
                  sx={{ color: "#fff" }}
                  onClick={() => navigate(path)}
                >
                  {name}
                </Button>
              );
            })}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
