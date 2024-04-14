import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

// eslint-disable-next-line react/prop-types
const AuthenticatedRoute = ({ children }) => {
  return (
    <main className="flex flex-col lg:flex-row relative overflow-hidden w-full min-h-screen">
      <aside className="fixed hidden lg:block w-[20vw] h-screen">
        <Sidebar />
      </aside>
      <header className="lg:hidden h-[7vh] bg-gray-400 w-full">
        <Header />
      </header>
      <section className="w-full lg:ml-[20vw]">{children}</section>
    </main>
  );
};

export default AuthenticatedRoute;
