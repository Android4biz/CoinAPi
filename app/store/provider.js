"use client"
import React from "react";
import { store } from "./index";
import { Provider } from "react-redux";


export default function Providers({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
