import { Outlet } from "react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ScrollToTop } from "../components/ScrollToTop";

export function Root() {
  return (
    <div className="flex flex-col min-h-screen text-slate-800 bg-white" style={{ fontFamily: "'Roboto Slab', Georgia, serif" }}>
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}