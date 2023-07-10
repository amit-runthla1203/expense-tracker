import { Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import CustomeTable from "./Table";

const TransactionList = () => {
  const transactions = useSelector(state => state.transactions.transactions);

  return (
    <Grid>
      <h2>Transaction List</h2>

      {transactions.length > 0 ? (
        <CustomeTable rows={transactions} />
      ) : (
        <Grid style={{ marginLeft: "10px" }}>{"NO TRANSCATIONS"}</Grid>
      )}
    </Grid>
  );
};

export default TransactionList;
