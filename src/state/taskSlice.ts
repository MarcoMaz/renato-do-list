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
}

// Define the initial state using that type
const initialState: taskProps[] = [
  {
    id: 0,
    label: 'batman',
    isCompleted: false,
    speed: 666,
    urgency: 1,
    fun: 1,
    total: 4,
    isClicked: false,
  },
  {
    id: 1,
    label: 'robin',
    isCompleted: false,
    speed: 1,
    urgency: 1,
    fun: 1,
    total: 3,
    isClicked: false,
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
      };
      state.push(newTask);
    },
    editTask: (state, action) => {
      const todos = state.find((todo) => todo.id === action.payload.index);
      if (todos) {
        todos.label = action.payload.label;
      }
    },
    toggleTask: (state, action) => {
      const todos = state.find((todo) => todo.id === action.payload);
      if (todos) {
        todos.isCompleted = !todos.isCompleted;
      }
    },
    removeTask: (state, action) => {
      const todos = state.filter((todo) => todo.id !== action.payload);
      return todos;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTask, editTask, toggleTask, removeTask } = taskSlice.actions;

export const selectCount = (state: RootState) => state.task;

export default taskSlice.reducer;
