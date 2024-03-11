import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Tags from './Tags';


const MyCard = ({imgCard, nombre, descrp, colorFondo, texto}) =>{
  return (
    <Card style={{ width: '18rem', margin: '0 10px 0 10px'}}>
      <Card.Img className='car-imagen' variant="top" src={imgCard} />
      <Card.Body>
        <Card.Title >{nombre}</Card.Title>
        <Card.Text>
          {descrp}          
        </Card.Text>
        <Tags bg={colorFondo} texto={texto}/>
      </Card.Body>
    </Card>
  );
};

export default MyCard;