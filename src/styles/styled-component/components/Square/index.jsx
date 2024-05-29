// export default function Square(){
//     return (
//         <h1>Square</h1>
//     )
// }

import { SquareContainer, SquareLink } from "./styles";

export default function Square(props){

    console.log(props.borderStyle)

    return(
        <SquareContainer borderStyle={props.borderStyle}>

        <SquareLink  href="" target=""> Click aqui  
        {props.borderStyle ? props.borderStyle : "Adicione a prop no Square"}
        </SquareLink>
        
        </SquareContainer>
    );

}