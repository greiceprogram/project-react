import "./styles.css"
import { Team } from "./src/pattern/composition"
import livro1 from "./src/assets/images/livro1.jpg"
import livro2 from "./src/assets/images/livro2.jpg"
import livro3 from "./src/assets/images/livro3.jpg"
import livro4 from "./src/assets/images/livro4.jpg"
import livro5 from "./src/assets/images/livro5.jpg"
import livro6 from "./src/assets/images/livro6.jpg"

const TeamUsers = [
    {
        image: livro6,
        name: "O poder do Hábito",
        role: "",
        description: "Por que fazemos o que fazemos na vida",
        socialMedias:{
            linkedin:"https://www.linkedin.com/in/greice-santana-40837b300/",
            x:"https://x.com/?lang=pt-br",
            driblle:"https://dribbble.com/",
        }
    },
    {
        image: livro5,
        name: "Pai Rico, pai Pobre",
        role: "",
        description: "Edição de 20 Anos Atualizada e Ampliada",
        socialMedias:{
            linkedin:"https://www.linkedin.com/in/greice-santana-40837b300/",
            x:"https://x.com/?lang=pt-br",
            driblle:"https://dribbble.com/",
        }
    },
    {
        image: livro4,
        name: "O homem mais rico da Babilônia",
        role: "",
        description: "O homem mais rico da Babilônia é um clássico sobre como multiplicar riqueza e solucionar problemas financeiros.",
        socialMedias:{
            linkedin:"https://www.linkedin.com/in/greice-santana-40837b300/",
            x:"https://x.com/?lang=pt-br",
            driblle:"https://dribbble.com/",
        }
    },
    {
        image: livro3,
        name: "Método Financeiro Do Primo Rico",
        role: "",
        description: "Thiago Nigro reúne toda a bagagem que adquiriu ao longo dos erros e acertos de sua carreira para ensinar o caminho do sucesso a quem deseja chegar lá, com dicas de como gerenciar seus ganhos, gastos, aportes e dividendos.",
        socialMedias:{
            linkedin:"https://www.linkedin.com/in/greice-santana-40837b300/",
            x:"https://x.com/?lang=pt-br",
            driblle:"https://dribbble.com/",
        }
    },
    {
        image: livro2,
        name: "Hábitos Atômicos",
        role: "",
        description: "um Método Fácil e Comprovado de Criar Bons Hábitos e se Livrar dos Maus",
        socialMedias:{
            linkedin:"https://www.linkedin.com/in/greice-santana-40837b300/",
            x:"https://x.com/?lang=pt-br",
            driblle:"https://dribbble.com/",
        }
    },

    {
        image: livro1,
        name: "A psicologia financeira",
        role: "",
        description: " lições atemporais sobre fortuna, ganância e felicidade",
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


            </div>
   
            <Team.Main />
        </div>
    )
}