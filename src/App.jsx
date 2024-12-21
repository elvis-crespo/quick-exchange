import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { darkTheme, lightTheme } from "./utils/themes";
import React, { Suspense } from "react";

// Lazy loaded components
const Landing = React.lazy(() => import("./Pages/Landing"));
const Home = React.lazy(() => import("./Pages/Home"));
const NotFound = React.lazy(() => import("./Pages/NotFound"));
const History = React.lazy(() => import("./Pages/History"));
const ContactUs = React.lazy(() => import("./Pages/ContactUs"));
const Login = React.lazy(() => import("./Pages/Login"));

function App() {
  // const themes = useSelector((state) => state.theme); // dark or light object
  const theme = useSelector((state) => state.theme.theme); // dark or light string

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <BrowserRouter>
        <Suspense fallback={<div>Loading... ❤️</div>}>
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Landing />} />
            <Route path="/history" element={<History />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/login" element={<Login />} />
            <Route element={<ProtectedRoute isAllowed={false} />}>
              <Route path="/home" element={<Home />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
