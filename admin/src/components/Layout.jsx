import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";

export const Layout = ({children, setToken}) => {
  return (
    <div className="bg-gray-50">
      <Navbar setToken={setToken}/>
      <hr/>
      <div className="flex">
        <Sidebar/>
        {children}
      </div>
    </div>
  );
};