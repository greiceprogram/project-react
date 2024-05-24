import "./styles.css"
import { Team } from "./src/pattern/composition"

const TeamUsers = [
    {
        image: "https://static.wikia.nocookie.net/herois/images/8/80/Deq4azi-b90e3470-9532-46dc-9f3c-afddd9574d60.png/revision/latest?cb=20220529162438&path-prefix=pt-br",
        name: "Greice Santana",
        role: "Analista de Dados",
        description: "Analista e Desenvolvedora Jr.",
        socialMedias:{
            linkedin:"https://www.linkedin.com/in/greice-santana-40837b300/",
            x:"https://x.com/?lang=pt-br",
            driblle:"https://dribbble.com/",
        }
    },
    {
        image: "https://static.wikia.nocookie.net/herois/images/8/80/Deq4azi-b90e3470-9532-46dc-9f3c-afddd9574d60.png/revision/latest?cb=20220529162438&path-prefix=pt-br",
        name: "Greice Santana",
        role: "Analista de Dados",
        description: "Analista e Desenvolvedora Jr.",
        socialMedias:{
            linkedin:"https://www.linkedin.com/in/greice-santana-40837b300/",
            x:"https://x.com/?lang=pt-br",
            driblle:"https://dribbble.com/",
        }
    },
    {
        image: "https://static.wikia.nocookie.net/herois/images/8/80/Deq4azi-b90e3470-9532-46dc-9f3c-afddd9574d60.png/revision/latest?cb=20220529162438&path-prefix=pt-br",
        name: "Greice Santana",
        role: "Analista de Dados",
        description: "Analista e Desenvolvedora Jr.",
        socialMedias:{
            linkedin:"https://www.linkedin.com/in/greice-santana-40837b300/",
            x:"https://x.com/?lang=pt-br",
            driblle:"https://dribbble.com/",
        }
    },
    {
        image: "https://static.wikia.nocookie.net/herois/images/8/80/Deq4azi-b90e3470-9532-46dc-9f3c-afddd9574d60.png/revision/latest?cb=20220529162438&path-prefix=pt-br",
        name: "Greice Santana",
        role: "Analista de Dados",
        description: "Analista e Desenvolvedora Jr.",
        socialMedias:{
            linkedin:"https://www.linkedin.com/in/greice-santana-40837b300/",
            x:"https://x.com/?lang=pt-br",
            driblle:"https://dribbble.com/",
        }
    },
    {
        image: "https://static.wikia.nocookie.net/herois/images/8/80/Deq4azi-b90e3470-9532-46dc-9f3c-afddd9574d60.png/revision/latest?cb=20220529162438&path-prefix=pt-br",
        name: "Greice Santana",
        role: "Analista de Dados",
        description: "Analista e Desenvolvedora Jr.",
        socialMedias:{
            linkedin:"https://www.linkedin.com/in/greice-santana-40837b300/",
            x:"https://x.com/?lang=pt-br",
            driblle:"https://dribbble.com/",
        }
    },
]

export default function TeamComposition() {
    return (

        <div className="team-container">
            <Team.Section />
            <div className="team-content-wrapper">

{
    TeamUsers.map((user, key) =>{
        return (
            <Team.Content 
            key={key}
            image={user.image}
            name={user.name}
            role={user.role}
            description={user.description}
            linkedin={user.linkedin}
            x={user.x}
            dribble={user.driblle}
            />
        )

    })
}

            <Team.Content 
            image="https://static.wikia.nocookie.net/herois/images/8/80/Deq4azi-b90e3470-9532-46dc-9f3c-afddd9574d60.png/revision/latest?cb=20220529162438&path-prefix=pt-br"
            name="Greice Santana"
            role="Analista de Dados"
            description="Desenvolvedora"
            linkedin="https://www.linkedin.com/in/greice-santana-40837b300/"
            x="https://x.com/?lang=pt-br"
            dribble="https://dribbble.com/"

            />
            

            </div>
   
            <Team.Main />
        </div>
    )
}