// transactions.js
export const ADD_TRANSACTION = "ADD_TRANSACTION";
export const DELETE_TRANSACTION = "DELETE_TRANSACTION";
export const FETCH_TRANSACTIONS = "FETCH_TRANSACTIONS";

export const addTransaction = transaction => ({
  type: ADD_TRANSACTION,
  payload: transaction
});

export const deleteTransaction = transactionId => ({
  type: DELETE_TRANSACTION,
  payload: transactionId
});

const initialState = {
  transactions: []
};

const transactionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [...state.transactions, action.payload]
      };
    case DELETE_TRANSACTION:
      const prevTransaction = [...state.transactions];
      console.log(prevTransaction, action.payload);
      prevTransaction.splice(action.payload, 1);
      return {
        ...state,
        transactions: [...prevTransaction]
      };
    default:
      return state;
  }
};

export default transactionsReducer;
