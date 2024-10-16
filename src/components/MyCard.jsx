import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

export default function MyCard(props) {
    let navigate = useNavigate();
    let shoesimage = "https://codingapple1.github.io/shop/shoes"+ props.product.id +".jpg";
      return (
        <Card onClick={()=>navigate(`/detail/${props.product.id}`) }>
            <Card.Img variant="top" src={shoesimage} />
                <Card.Body>
                    <Card.Title>{props.product.title}</Card.Title>
                    <Card.Text>
                        {props.product.content}
                    </Card.Text>
                    <Button variant="primary">Read</Button>
            </Card.Body>
        </Card>
      );
}