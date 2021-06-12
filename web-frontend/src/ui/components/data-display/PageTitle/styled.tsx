import { experimentalStyled as styled } from "@material-ui/core/styles";

export const PageTitleContainer = styled("div")`
  margin: ${({ theme }) => theme.spacing(5) + " " + 0};
  text-align: center;
`;

export const PageTitleStyled = styled("h2")`
  margin: 0;
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: ${({ theme }) => theme.typography.h6.fontSize};
  font-weight: 600;

  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: ${({ theme }) => theme.typography.body1.fontSize};
  }
`;

export const PageSubTitleStyled = styled("h3")`
  margin: ${({ theme }) => theme.spacing(1.5) + "" + "0"};
  color: ${(props) => props.theme.palette.text.primary};
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
  font-weight: normal;
`;

/*import  styled from "styled-components";

export const PageTitleContainer = styled.div`
    text-align: center;
    margin: 40px 0;
`;

export const PageTitleStyled = styled.h2`
    margin: 0;
    color: #6B2AEE;
    font-size:  ${(props) => props.medium};
    font-weight: 600;
`;*/
