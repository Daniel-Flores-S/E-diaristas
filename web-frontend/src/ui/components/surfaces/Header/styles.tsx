import { AppBar, experimentalStyled as styled } from "@material-ui/core";

export const HeaderAppBar = styled(AppBar)`
    position: sticky;
    background-color: ${(props) => props.theme.palette.background.paper};
    box-shadow: 0px 5px 4px rgba(0, 0, 0, 1);

    ${(props) => props.theme.breakpoints.up("md")} {
        .MuiToolbar-root {
            height: 100px;
        }
    }

    ${(props) => props.theme.breakpoints.down("md")} {
        .MuiToolbar-root {
            display: flex;
            justify-content: center;
        }
    }
`;

export const HeaderLogo = styled("img")`
    height: 25px;

    ${(props) => props.theme.breakpoints.up('md')} {
        height: 47px;
    }
`;
