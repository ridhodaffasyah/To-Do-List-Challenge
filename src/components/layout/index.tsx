import { Navbar } from "../molecules";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Navbar/>
            <div className="flex flex-col px-5 md:px-[120px] lg:px-[220px] py-6">
                {children}
            </div>
        </>
    );
};
    
export default Layout;