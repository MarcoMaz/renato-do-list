/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';

// Define a type for the slice state
export interface ToDo {
  id: number;
  label: string;
  isCompleted: boolean;
  speed: number;
  urgency: number;
  fun: number;
  total: number;
  dueDate: string;
}

// Define the initial state using that type
const initialState: ToDo[] = [
  {
    id: 0,
    label: 'batman',
    isCompleted: false,
    speed: 3,
    urgency: 100,
    fun: 3,
    total: 106,
    dueDate: '1984-07-08',
  },
  {
    id: 1,
    label: 'robin',
    isCompleted: false,
    speed: 2,
    urgency: 1,
    fun: 1,
    total: 4,
    dueDate: '1984-07-08',
  },
];

export const toDoSlice = createSlice({
  name: 'toDo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        label: action.payload.label,
        isCompleted: false,
        speed: action.payload.speed,
        urgency: action.payload.urgency,
        fun: action.payload.fun,
        total:
          action.payload.speed + action.payload.urgency + action.payload.fun,
        dueDate: action.payload.dueDate,
      };
      state.push(newTodo);
    },
    toggleTodo: (state, action) => {
      const todos = state.find((todo) => todo.id === action.payload);
      if (todos) {
        todos.isCompleted = !todos.isCompleted;
      }
    },
    removeTodo: (state, action) => {
      const todos = state.filter((todo) => todo.id !== action.payload);
      return todos;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, toggleTodo, removeTodo } = toDoSlice.actions;

export const selectCount = (state: RootState) => state.toDo;

export default toDoSlice.reducer;
