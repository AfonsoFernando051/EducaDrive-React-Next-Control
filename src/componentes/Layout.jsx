import React from "react";
import Sidebar from "./Sidebar";
import Cadastrar from "@/pages/Cadastrar";

const Layout = ({children}) => {
    return(
    <div className="container">
        <Sidebar />
        <main>{children}</main>
    </div>
    )
}

export default Layout;