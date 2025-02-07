import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/assets/styles/globals.css";

export const metadata = {
  title: "Property Plus",
  keywords: "real estate, property, rental",
  description: "Real estate and property rental",
};

const MainLayout = ({ children }) => {
  return (
    <html>
      <body className="font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default MainLayout;
