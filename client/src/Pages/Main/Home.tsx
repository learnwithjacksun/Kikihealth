import {
  About,
  Banner,
  Contact,
  Founder,
  Hero,
  Project,
  RecentBlogs,
  Services,
  Values,
} from "@/Components/Main";
import { MainLayout } from "@/Layouts";

const Home = () => {
  return (
    <>
      <MainLayout>
        <Hero />
        <About />
        <Values />
        <Founder />
        <Services />
        <Project />
        <Banner />
        <RecentBlogs />
        <Contact />
      </MainLayout>
    </>
  );
};

export default Home;
