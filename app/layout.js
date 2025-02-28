"use client"
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";
import Navbar from "./Components/navbar/page";
import SessionWrapper from "./Components/SessionWrapper";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider store={store}>
      <SessionWrapper>
      <body>
        <Navbar/>
        {children}
      </body>
      </SessionWrapper>
      </Provider>
      
    </html>
  );
}
