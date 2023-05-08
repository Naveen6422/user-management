import * as React from "react";
import { AppBar, Toolbar,styled} from "@mui/material";
import { Link } from "react-router-dom";



const Header = styled(AppBar)`
    background: #111111; 
`
const TypographyStyle = styled(Link)`
  font-size: 20px;
  color: #ffffff;
  margin-left: 20px;
    text-decoration: none;
`;



const NavBar = () => {
    return (
      <Header position="static">
        <Toolbar>
          <TypographyStyle to="/">Logo</TypographyStyle>
          <TypographyStyle to="/all">All Users</TypographyStyle>
          <TypographyStyle to="/add">Add users</TypographyStyle>
        </Toolbar>
      </Header>
    );
    }
    export default NavBar;

