import React from "react";
import Blogs from "../components/Blogs";
import ContactUs from "../components/ContactUs";
import NavBar from "../components/NavBar";

const BlogsPage = () => {
  return (
    <div>
      <NavBar />
      <Blogs />
      <ContactUs />
    </div>
  );
};

export default BlogsPage;
