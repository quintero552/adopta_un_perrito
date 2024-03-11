import Badge from "react-bootstrap/Badge";
//import Stack from "react-bootstrap/Stack";
import imagenes from "../assets/animales/imagenes";

const Tags = ({colorFondo,  texto }) => {
  return (
    <>
        <Badge style={{width: '100%', cursor: 'pointer'}} bg={colorFondo}>{ texto }</Badge>
    </>
    
  );
};

export default Tags;
