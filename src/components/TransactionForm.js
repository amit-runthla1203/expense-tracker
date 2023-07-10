import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTransaction } from "../redux/transactions";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";

const TransactionForm = () => {
  const dispatch = useDispatch();
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    const newTransaction = {
      id: Date.now().toString(),
      description,
      amount,
      category,
      date: new Date().toLocaleDateString()
    };
    dispatch(addTransaction(newTransaction));
    setDescription("");
    setAmount("");
    setCategory("");
  };

  return (
    <Grid>
      <h2>Add Transaction</h2>
      <Grid
        flexDirection={"column"}
        sx={{
          "& > :not(style)": {
            m: 1,
            width: "25ch"
          }
        }}
        container
      >
        <Grid item>
          <TextField
            type="text"
            placeholder="Category"
            value={category}
            onChange={e => setCategory(e.target.value)}
            id="Category"
            label="Category"
            variant="outlined"
            required
            fullWidth
          />
        </Grid>
        <Grid item>
          <TextField
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            id="Amount"
            label="Amount"
            variant="outlined"
            required
            fullWidth
          />
        </Grid>
        <Grid item>
          <TextField
            id="Description"
            type="text"
            placeholder="Description"
            label="Description"
            variant="outlined"
            value={description}
            required
            onChange={e => setDescription(e.target.value)}
            fullWidth
          />
        </Grid>

        <Grid item>
          <Button variant="contained" onClick={handleSubmit}>
            {"Add Transaction"}
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TransactionForm;
