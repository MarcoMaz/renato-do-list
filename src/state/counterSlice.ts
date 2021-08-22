/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';

// Define a type for the slice state
interface CounterState {
  id: number;
  label: string;
  isCompleted: boolean;
  speed: number;
  urgency: number;
  fun: number;
  total: number;
}

// Define the initial state using that type
const initialState: CounterState[] = [
  {
    id: 0,
    label: 'batman',
    isCompleted: false,
    speed: 3,
    urgency: 100,
    fun: 3,
    total: 106,
  },
  {
    id: 1,
    label: 'robin',
    isCompleted: false,
    speed: 2,
    urgency: 1,
    fun: 1,
    total: 4,
  },
];

export const counterSlice = createSlice({
  name: 'counter',
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
      };
      state.push(newTodo);
    },
    toggleTodo: (state, action) => {
      const todoss = state.find((todo) => todo.id === action.payload);
      if (todoss) {
        todoss.isCompleted = !todoss.isCompleted;
      }
    },
    removeTodo: (state, action) => {
      const yeah = state.filter((todo) => todo.id !== action.payload);
      return yeah;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, toggleTodo, removeTodo } = counterSlice.actions;

export const selectCount = (state: RootState) => state.counter;

export default counterSlice.reducer;
