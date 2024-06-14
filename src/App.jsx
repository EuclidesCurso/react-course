import "./App.css"
import { Titulo } from "./styles/css-modules/components/Título";
import Headline from "./styles/css-modules/components/Headline";
import Logo from "./styles/styled-components/components/Logo"
import Square from "./styles/styled-components/components/Square";
import Header from "./styles/css-modules/components/Header";
import DropdownMenu from "./Hooks/components/DropdownMenu";

import {Route, Routes } from "react-router-dom"
import Navbar from "./Hooks/components/Navbar";
import GetCep from "./request";




function App() {
  return (
    <body>
      <Routes>
        <Route path="/" Component={GetCep} />
        <Route path="/navbar" Component={Navbar} />
        </Routes>
    </body>
  );
 }

export default App;
