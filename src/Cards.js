import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards({ isLogin, writings }) {
    const card = writings.map(writing =>
    <li key={writing.key} style={{ width: '18rem' }}>
        <Card >
            <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{writing.title}</Card.Title>
                    <Card.Text>
                        {writing.top_line}
                    </Card.Text>
                    <Button variant="primary">Read</Button>
            </Card.Body>
        </Card>
    </li>
  );
  return (
    <ul>

        {isLogin && card}
    </ul>
  );
}

export default Cards;