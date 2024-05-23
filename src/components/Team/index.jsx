import "./styles.css"

import { Team } from "./pattern/componets"

export default function TeamComposition() {
    return (
        <div className="team-container">
            <Team.Section/>
            <Team.Content/>
            <Team.Main/>
        </div>
    )
}