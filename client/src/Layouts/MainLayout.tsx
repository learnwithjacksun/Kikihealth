import { Header } from "@/Components/Main"
import { Footer } from "@/Components/UI"

const MainLayout = ({children}:{children: React.ReactNode}) => {
  return (
    <>
    <Header />  
    <main className="space-y-10 md:space-y-20 py-10">
        {children}
    </main>
    <Footer />
    </>
  )
}

export default MainLayout