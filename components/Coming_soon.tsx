import data from '../data.json';
import { Button, Card } from 'react-bootstrap';

const ComingSoonMovies = ()=>{

    return(
        <>
        <Card style={{ width: '150px' }}>
      <Card.Img variant="top" src= '' />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
         Movie Name
        </Card.Text>
        <Button variant="primary">Details</Button>
      </Card.Body>
    </Card>
        </>
    )
}
export{ComingSoonMovies}