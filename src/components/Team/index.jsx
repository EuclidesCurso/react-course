import "./styles.css"
import { Team } from "./pattern/componets"


const TeamUsers = [
    {
        Image:"https://th.bing.com/th/id/OIP.87_M9d6lKlgqG-T133oPgQHaHa?w=184&h=184&c=7&r=0&o=5&dpr=1.2&pid=1.7",
        name:"Euclides Curso",
        role: "Aluno",
        description:"Contador e aprendendo Javascript",
        socialMedias: {
            LinkedIn: "https://br.linkedin.com/",
            X:"https://x.com/",
            dribble:"https://dribbble.com/",

        },
    },
    {
        Image:"https://th.bing.com/th/id/OIP.87_M9d6lKlgqG-T133oPgQHaHa?w=184&h=184&c=7&r=0&o=5&dpr=1.2&pid=1.7",
        name:"Euclides Curso",
        role: "Aluno",
        description:"Contador e aprendendo Javascript",
        socialMedias: {
            LinkedIn: "https://br.linkedin.com/",
            X:"https://x.com/",
            dribble:"https://dribbble.com/",

        },
    },
];



export default function TeamComposition() {
    return (
        <div className="team-container">
            <Team.Section/>
            <div className="team-content-wrapper">

        {
            TeamUsers.map((user, key) => {
                return (
                    <Team.Content
                    key={key}
                    image={user.image}
                    name={user.name}
                    role={user.role}
                    description={user.description}
                    LinkedIn={user.socialMedias.LinkedIn}
                    x={user.socialMedias.x}
                    dribble={user.socialMedias.dribble}
                    /> 
                )
            }
        )
        }


               
                    
            </div>
            <Team.Main/>        
        </div>
    )
}