import { ReactNode } from "react";
import RenderedRoutes from "../routes/RenderedRoutes";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";

// Main Layout
const Layout = ({ children }: { children?: ReactNode }) => {
  return (
    <div className=" h-screen">
      <Navbar />
      <div className="flex  ">
        <Sidebar />
        <main className="p-5 overflow-auto">
          {children || <RenderedRoutes />}
        </main>
      </div>
    </div>
  );
};

export default Layout;
