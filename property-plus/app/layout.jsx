import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/assets/styles/globals.css";
import AuthProvider from "@/components/AuthProvider";

export const metadata = {
  title: "Property Plus",
  keywords: "real estate, property, rental",
  description: "Real estate and property rental",
};

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
    <html>
      <body className="font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
    </AuthProvider>
  );
};

export default MainLayout;
