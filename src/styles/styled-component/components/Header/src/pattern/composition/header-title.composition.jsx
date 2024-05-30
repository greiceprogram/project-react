import styled  from "styled-components"
import { Box, BoxOn, ButtonBox, Container, Content, Description, Text } from "../../../styles"

export default function Title(props) {
    return(
        <Container>
            <div className="Container-box">
                <Text> Medium length hero headline goes here</Text>
                <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</Description>
            </div>

    <Content>
                <Box>
                <ButtonBox> Button </ButtonBox>
                </Box>
                <Box>
                     <button className="button-box"> Button </button>
                </Box>

    </Content>

        </Container>
    )
}