import React from "react";
import { HeaderAppBar, HeaderLogo } from "./styles";
import { Toolbar } from "@material-ui/core";
import { Container } from "@material-ui/core";


const Header: React.FC = () => {
    return (
        <HeaderAppBar>
            <Toolbar component={Container}>
                <HeaderLogo src={"/img/logos/logo.svg"} alt={"e-diaristas"} />
            </Toolbar>
        </HeaderAppBar>
    );
};
export default Header;
