import "@/assets/styles/globals.css";

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
