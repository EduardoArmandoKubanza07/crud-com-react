import { GlobalStyles } from "./styles/GlobalStyles";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes";
import { Header } from "./components/Header";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
      <GlobalStyles />
    </BrowserRouter>
  )
}