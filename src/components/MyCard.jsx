import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

export default function MyCard(props) {
    let navigate = useNavigate();
      return (
        <Card onClick={()=>navigate(`/detail/${props.writing.id}`) }>
            <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{props.writing.title}</Card.Title>
                    <Card.Text>
                        {props.writing.top_line}
                    </Card.Text>
                    <Button variant="primary">Read</Button>
            </Card.Body>
        </Card>
      );
}