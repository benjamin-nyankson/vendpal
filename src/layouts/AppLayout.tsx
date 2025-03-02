import { ReactNode, useEffect } from "react";
import RenderedRoutes from "../routes/RenderedRoutes";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import useWindowSize from "../hooks/useWindownSize";
import Alert from "../components/ui/AlertComponent";
import { useStore } from "../store/useStore";
import { useLocation } from "react-router-dom";

// Main Layout
const Layout = ({ children }: { children?: ReactNode }) => {
  const { isSidebarOpen, open, setSideBar } = useStore();
  const { screenWidth } = useWindowSize();
  const location = useLocation();

  useEffect(() => {
    if (screenWidth >= 768) {
      setSideBar(true);
    } else if (screenWidth < 768) {
      setSideBar(false);
    }
  }, [screenWidth, setSideBar]);

  useEffect(() => {
    const titles: { [key: string]: string } = {
      "/": "Dashboard - Venpal",
      "/analytics": "Analytics - Venpal",
      "/budget": "Budget Room - Venpal",
      "/budget/currency": "Currency & Taxes - Venpal",
      "/budget/budget-line": "Budget Line - Venpal",
      "/budget/brc": "BRC - Venpal",
      "/budget/budget-control": "Budget Control - Venpal",
      "*": "Page Not Found - Venpal",
    };

    document.title = titles[location.pathname] || "Venpal";
  }, [location]);
  return (
    <div className=" h-screen">
      <Navbar />
      {open && <Alert />}

      <div className="flex  ">
        {isSidebarOpen && (
          <div>
            <Sidebar />
          </div>
        )}
        <main className="p-5 overflow-auto h-screen w-full">
          {children || <RenderedRoutes />}
        </main>
      </div>
    </div>
  );
};

export default Layout;
