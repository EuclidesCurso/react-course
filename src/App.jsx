import "./App.css"

import card from "./assets/images/svg/card-holder-svgrepo-com.svg"
import coffee from "./assets/images/svg/coffee-svgrepo-com.svg"
import laptop from "./assets/images/svg/laptop-svgrepo-com.svg"
import shopping from "./assets/images/svg/shopping-svgrepo-com.svg"
import tips from "./assets/images/svg/tips-svgrepo-com.svg"
import transportation from "./assets/images/svg/transportation-svgrepo-com.svg"


function App() {
    return (
    <body>
     <div className="card">
       <h1>React Course</h1>
       <p>Front-End Javascript</p>
     </div>

    <Banner title="card" description="descrição" image={card} />
    <Banner title="coffee" description="descrição" image={coffee} />
    <Banner title="laptop" description="descrição" image={laptop} />
    <Banner title="shopping" description="descrição" image={shopping} />
    <Banner title="tips" description="descrição" image={tips} />
    <Banner title="transportation" description="descrição" image={transportation} />

     
    </body>
  );
 }

export default App;
