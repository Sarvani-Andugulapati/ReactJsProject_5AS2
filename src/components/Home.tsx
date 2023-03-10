import { SsearchLister } from "./SearchLister"
import { Container,Row,Col } from "react-bootstrap"
import { Favourites } from "./Favourites-List"

const Home = () =>{
    return(
        <Container>
            <Row>
                <Col lg={9}>
                <SsearchLister></SsearchLister>
                </Col>
                <Col>
                <Favourites></Favourites>
                </Col>
            </Row>
        </Container>
    )
}
export{Home}