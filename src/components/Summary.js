import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const Summary = () => {
  const transactions = useSelector(state => state.transactions.transactions);

  const categories = [
    ...new Set(transactions.map(transaction => transaction.category))
  ];
  const categoryBreakdown = categories.map(category => {
    const amount = transactions
      .filter(transaction => transaction.category === category)
      .reduce(
        (total, transaction) => total + parseFloat(transaction.amount),
        0
      );
    return { category, amount };
  });

  return (
    <Grid>
      <h2>Summary</h2>
      <Grid>
        <Grid>
          {categoryBreakdown.map(category => (
            <Grid key={category.category}>
              <Box style={{ display: "flex" }}>
                <Typography fontWeight={"bold"} style={{ margin: 10 }}>
                  {category.category}:
                </Typography>

                <Typography style={{ margin: 10 }}>
                  {category.amount}
                  {" Rs."}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Summary;
