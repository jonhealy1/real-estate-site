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
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
