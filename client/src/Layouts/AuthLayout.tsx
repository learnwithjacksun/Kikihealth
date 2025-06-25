import { Lock } from "lucide-react";

interface AuthLayoutProps {
  children?: React.ReactNode;
  title: string;
  description?: string;
}

const AuthLayout = ({ children, title, description }: AuthLayoutProps) => {
  return (
    <>
      <div className="h-[100dvh] flex overflow-hidden">
        <div className="flex-1 h-screen overflow-hidden relative hidden md:block">
          <div className="absolute inset-0 bg-gradient-to-b from-green-500/10 to-green-700" />
          <img src="/auth.jpg" className="h-full w-full object-cover" />
        </div>
        <div className="flex-1/3 overflow-y-scroll">
          <main className="md:w-[480px] w-[90%] space-y-6 mx-auto md:py-10 py-6">
            <div className="space-y-4">
              <a href="/"><img src="/logo.png" alt="KIKI LOGO" width={80} /></a>
              <div className="mt-6">
                <h1 className="text-2xl font-semibold">{title}</h1>
                <p className="text-muted">{description}</p>
              </div>
            </div>
            {children}
            <p className="text-xs text-muted font-medium center">
                <Lock size={16} className="inline-block mr-1 text-yellow-500" />
                Secured by Appwrite
            </p>
          </main>
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
