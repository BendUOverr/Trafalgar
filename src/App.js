import React from "react";
import { Header } from "./components/Header";
import { OurServices } from "./components/OurServices";
import { HealthcareProv } from "./components/HealthcareProv";
import { DownloadOurApps } from "./components/DownloadOurApps";
import { Testimonials } from "./components/Testimonials";
import { LastArticle } from "./components/LastArticle";
import { Footer } from "./components/Footer";


export const App = () => {
  return (
    <div>
      <Header />
      <OurServices />
      <HealthcareProv />
      <DownloadOurApps />
      <Testimonials />
      <LastArticle />
      <Footer />
    </div>
  );
};
