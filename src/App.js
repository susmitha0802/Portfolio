import { ThemeProvider } from "./context/ThemeContext";
import { NavBar } from "./components/navbar/NavBar"
import { Content } from "./components/content/Content";
import { Footer } from "./components/footer/Footer";
import "./App.css";

export const App = () => {
  return (
    <ThemeProvider >
      <NavBar />
      <Content />
      <Footer />
    </ThemeProvider>
  )
}