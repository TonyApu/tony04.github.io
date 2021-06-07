import React from "react";
import { Admin, Resource } from "react-admin";
import { UserList } from "./components/admin-page/user";
import { PostList } from "./components/admin-page/posts";
import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group";
import Dashboard from "./components/admin-page/Dashboard";
import authProvider from "./components/authen/authProvider";
import jsonServerProvider from "ra-data-json-server";
import { createMuiTheme } from "@material-ui/core/styles";
import "./App.css";

const dataProvider = jsonServerProvider("http://jsonplaceholder.typicode.com");
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#b2a429",
    },
    secondary: {
      main: "#b2a429",
    },
  },
  typography: {
    fontFamily: "Comic Sans MS",
    body2: {
      fontFamily: "Times New Roman",
      fontSize: "1.3rem"
    }
  },
  shape: {
    borderRadius: 30
  },
  spacing: 10  
});

const App = () => (
  <Admin
    theme={theme}
    dashboard={Dashboard}
    authProvider={authProvider}
    dataProvider={dataProvider}
  > 
    <Resource name="books" list={PostList} icon={PostIcon} />
    <Resource name="users" list={UserList} icon={UserIcon} />
    
  </Admin>
);

export default App;
