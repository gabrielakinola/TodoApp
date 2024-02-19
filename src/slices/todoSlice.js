import { createSlice } from "@reduxjs/toolkit";

//Store the initial state in a variable

const initialState = {
  todos: [],
};

//Create the slice
const todosSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    addTodoItem: (state, { payload }) => {
      if (payload.description === "") {
        return;
      }
      state.todos.push(payload);
    },
    removeTodoItem: () => {
      console.log("remove Todo Item is running");
    },
  },
});

//Export the reducers functions (addTodoItem and removeTodoItem)
//This is used where we want to dispatch the action/ function
export const { addTodoItem, removeTodoItem } = todosSlice.actions;

//Export the reducer as default
//This is used to configure our store
export default todosSlice.reducer;
