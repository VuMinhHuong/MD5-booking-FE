import HomePage from "./pages/HomePage";
import RoomPage from "./pages/RoomPage";
import BookingPage from "./pages/BookingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import UserPage from "./pages/UserPage";
import NotFoundPage from "./pages/NotFoundPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import React from "react";

let routes = [
  {
    id: 1,
    path: "/",
    element: <HomePage />,
  },
  {
    id: 2,
    path: "/roomPage",
    element: <RoomPage />,
  },
  {
    id: 3,
    path: "/bookingPage",
    element: <BookingPage />,
  },
  {
    id: 4,
    path: "/loginPage",
    element: <LoginPage />,
  },
  {
    id: 5,
    path: "/registerPage",
    element: <RegisterPage />,
  },
  {
    id: 6,
    path: "/resetPasswordPage",
    element: <ResetPasswordPage />,
  },
  {
    id: 7,
    path: "/userPage",
    element: <UserPage />,
  },
  {
    id: 8,
    path: "/notFoundPage",
    element: <NotFoundPage />,
  },
  {
    id: 9,
    path: "/forgotPasswordPage",
    element: <ForgotPasswordPage />,
  },
];
export default routes;
