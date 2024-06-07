import "./App.css"
import { Titulo } from "./styles/css-modules/components/Título";
import Headline from "./styles/css-modules/components/Headline";
import Logo from "./styles/styled-components/components/Logo"
import Square from "./styles/styled-components/components/Square";
import Header from "./styles/css-modules/components/Header";
import DropdownMenu from "./Hooks/components/DropdownMenu";
import Navbar from "./Hooks/components/Navbar";


function App() {

        const pages = [
          {
          title: "Page one",
          description: "Lorem ipsum, dolor sit amet consectetur adipisicing."
          },
          {
          title: "Page one",
          description: "Lorem ipsum, dolor sit amet consectetur adipisicing."
          },
          {
          title: "Page one",
          description: "Lorem ipsum, dolor sit amet consectetur adipisicing."
          },
          {
          title: "Page one",
          description: "Lorem ipsum, dolor sit amet consectetur adipisicing."
          },



        ]
    return (
    <body>
     
      <Navbar />
    </body>
  );
 }

export default App;
