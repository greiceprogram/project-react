import { Header } from "./src/pattern/composition";
import { HeaderContainer } from "./style";

export default function HeaderComposition() {
    return (
        <HeaderContainer>
            <h1>coloque o composition aqui</h1>
            <Header.Brand />
        </HeaderContainer>
    )
}