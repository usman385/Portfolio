import HomePage from "./modules/HomePage";
import BlogsPage from "./modules/BlogsPage";
import ProjectsPage from "./modules/ProjectsPage";
import SkillsPage from "./modules/SkillsPage";
import ServicesPage from "./modules/ServicesPage";
import ContactUs from "./modules/ContactPage";
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/BlogsPage" element={<BlogsPage />} />
        </Routes>
      </BrowserRouter>
      <HashRouter>
        <Routes>
          <Route path="/ProjectsPage" element={<ProjectsPage />} />
          <Route path="/SkillsPage" element={<SkillsPage />} />
          <Route path="/ServicesPage" element={<ServicesPage />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
