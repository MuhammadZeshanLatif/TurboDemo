import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const FormSix = React.lazy(() => import("pages/FormSix"));
const FormFive = React.lazy(() => import("pages/FormFive"));
const FormFour = React.lazy(() => import("pages/FormFour"));
const FormThree = React.lazy(() => import("pages/FormThree"));
const FormTwo = React.lazy(() => import("pages/FormTwo"));
const FormOne = React.lazy(() => import("pages/FormOne"));
const Slide169Five = React.lazy(() => import("pages/Slide169Five"));
const Slide169Four = React.lazy(() => import("pages/Slide169Four"));
const Slide169Three = React.lazy(() => import("pages/Slide169Three"));
const Slide169Two = React.lazy(() => import("pages/Slide169Two"));
const Slide169One = React.lazy(() => import("pages/Slide169One"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/slide169one" element={<Slide169One />} />
          <Route path="/slide169two" element={<Slide169Two />} />
          <Route path="/slide169three" element={<Slide169Three />} />
          <Route path="/slide169four" element={<Slide169Four />} />
          <Route path="/slide169five" element={<Slide169Five />} />
          <Route path="/formone" element={<FormOne />} />
          <Route path="/formtwo" element={<FormTwo />} />
          <Route path="/formthree" element={<FormThree />} />
          <Route path="/formfour" element={<FormFour />} />
          <Route path="/formfive" element={<FormFive />} />
          <Route path="/formsix" element={<FormSix />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
