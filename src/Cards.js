import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const writings = [
    { title:"title1", top_line:"top line 1", id:1 },
    { title:"title2", top_line:"top line 2", id:2 },
    { title:"title3", top_line:"top line 3", id:3 },
    { title:"title4", top_line:"top line 4", id:4 },
  ];

function Cards() {
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
        {card}
    </ul>
  );
}

export default Cards;