"use client"
import { configureStore } from '@reduxjs/toolkit'
import Counter from '@/app/Redux/Features/Counter/Counter'

export const store = configureStore({
  reducer: {
    Counter : Counter
  },
})