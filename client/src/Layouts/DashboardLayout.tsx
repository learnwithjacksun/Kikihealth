import { DesktopSidebar, Header } from "@/Components/Dashboard";

interface DashboardLayoutProps {
  children?: React.ReactNode;
  title?: string;
}

const DashboardLayout = ({ children, title }: DashboardLayoutProps) => {
  return (
    <>
      <div className="h-[100dvh] flex overflow-hidden">
        <div className="flex-1 h-screen overflow-hidden hidden md:block space-y-4">
          <DesktopSidebar />
        </div>
        <div className="flex-1/2 overflow-y-scroll">
          <Header />
          <main className="space-y-6 w-[90%] mx-auto py-6">
           {title && <h3 className="text-xl font-semibold text-green-800 rounded-l-lg"> {title} </h3>}
            {children}
          </main>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
