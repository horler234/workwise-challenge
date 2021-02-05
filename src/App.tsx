import { BrowserRouter } from "react-router-dom";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { DevelopmentSection } from "./components/DevelopmentSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/header";
import { StaySection } from "./components/StaySection";
import "./styles/index.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <DevelopmentSection />
      <AboutSection />
      <ContactSection />
      <StaySection />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
