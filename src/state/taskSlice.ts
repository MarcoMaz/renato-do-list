/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';

// Define a type for the slice state
export interface taskProps {
  id: number;
  label: string;
  isCompleted: boolean;
  speed: number;
  urgency: number;
  fun: number;
  total: number;
  isClicked: boolean;
  isHighlighted: boolean;
}

// Define the initial state using that type
const initialState: taskProps[] = [
  {
    id: 0,
    label: 'batman',
    isCompleted: false,
    speed: 666,
    urgency: 50,
    fun: 121,
    total: 837,
    isClicked: false,
    isHighlighted: false,
  },
  {
    id: 1,
    label: 'robin',
    isCompleted: false,
    speed: 2433,
    urgency: 1800,
    fun: 11,
    total: 4244,
    isClicked: false,
    isHighlighted: false,
  },
];

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: Date.now(),
        label: action.payload.label,
        isCompleted: false,
        speed: action.payload.speed,
        urgency: action.payload.urgency,
        fun: action.payload.fun,
        total:
          action.payload.speed + action.payload.urgency + action.payload.fun,
        isClicked: false,
        isHighlighted: false,
      };
      state.push(newTask);
    },
    editTask: (state, action) => {
      const todos = state.find((todo) => todo.id === action.payload.index);
      if (todos) {
        todos.label = action.payload.label;
        todos.speed = action.payload.speed;
        todos.urgency = action.payload.urgency;
        todos.fun = action.payload.fun;
      }
    },
    toggleTask: (state, action) => {
      const todos = state.find((todo) => todo.id === action.payload);
      if (todos) {
        todos.isCompleted = !todos.isCompleted;
      }
    },
    highlightTask: (state, action) => {
      const todos = state.find((todo) => todo.id === action.payload);
      if (todos) {
        todos.isHighlighted = !todos.isHighlighted;
      }
    },
    removeTask: (state, action) => {
      const todos = state.filter((todo) => todo.id !== action.payload);
      return todos;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTask, editTask, highlightTask, toggleTask, removeTask } =
  taskSlice.actions;

export const selectCount = (state: RootState) => state.task;

export default taskSlice.reducer;
