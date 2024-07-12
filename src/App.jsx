import AboutMe from "./Components/AboutMe/AboutMe";
import ContactMe from "./Components/ContactMe/ContactMe";
import Footer from "./Components/Footer/Footer";
import Introduction from "./Components/Introduction/Introduction";
import HomeSection from "./Components/HomeSection/HomeSection";
import Navbar from "./Components/Navbar/Navbar";
import ProjectsSection from "./Components/ProjectsSection/ProjectsSection";
import ProfileCard from "./Components/ProfileCard/ProfileCard";


function App() {
  return (
    <div>
      <Navbar />
      <HomeSection />
      <Introduction />
      
      {/* <ProfileCard /> */}
      
      {/* <AboutMe /> */}
      {/* <ProjectsSection /> */}
      {/* <ContactMe /> */}
      <Footer />
    </div>
  );
}

export default App;
