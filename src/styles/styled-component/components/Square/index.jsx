// export default function Square(){
//     return (
//         <h1>Square</h1>
//     )
// }

import { SquareContainer, SquareLink } from "./styles";

export default function Square(props){
    return(
        <SquareContainer>

        <SquareLink squad={props.squad} href="" target=""> Click aqui  </SquareLink>
        {props.squad}
        </SquareContainer>
    );

}