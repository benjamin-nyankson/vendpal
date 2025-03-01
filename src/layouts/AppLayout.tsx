import { ReactNode } from "react";
import RenderedRoutes from "../routes/RenderedRoutes";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import useWindowSize from "../hooks/useWindownSize";
import Alert from "../components/ui/AlertComponent";
import { useStore } from "../store/useStore";

// Main Layout
const Layout = ({ children }: { children?: ReactNode }) => {
  const { isSidebarOpen,open } = useStore();
  const { screenWidth } = useWindowSize();
  return (
    <div className=" h-screen">
      <Navbar />
      {open && <Alert />}
      
      <div className="flex  ">
        {(isSidebarOpen || screenWidth >= 820) && (
          <div>
            <Sidebar />
          </div>
        )}
        <main className="p-5 overflow-auto h-screen">
          {children || <RenderedRoutes />}
        </main>
      </div>
    </div>
  );
};

export default Layout;
