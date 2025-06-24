import { About, Contact, Founder, Hero, Project, RecentBlogs, Services, Values } from "@/Components/Main"
import { MainLayout } from "@/Layouts"

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
     <RecentBlogs />
     <Contact />
    </MainLayout>
    </>
  )
}

export default Home