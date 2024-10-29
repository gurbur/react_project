import { useState, useEffect } from "react";
import { ListGroup, ListGroupItem, Button, Row, Col } from "react-bootstrap";

export default function MyCart(props) {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const itemsInCart = JSON.parse(localStorage.getItem("inCart")) || [];
        setCartItems(itemsInCart);
    }, []);


    return (
        <div>
            <h2>내 장바구니</h2>
            <ListGroup>
                {cartItems.map(id => (
                    <ListGroupItem key={id - 1}>
                        <Row>
                            <Col xs={3}>
                                <img 
                                    src={props.products[id - 1].image} 
                                    alt={props.products[id - 1].name} 
                                    style={{ width: "100%", height: "auto" }} 
                                />
                            </Col>
                            <Col xs={5}>
                                <h5>{props.products[id - 1].title}</h5>
                                <p>가격: {props.products[id - 1].price} 원</p>
                                <p>설명: {props.products[id - 1].content}</p>
                            </Col>
                            <Col xs={2}>
                                <Button variant="danger">삭제</Button>
                            </Col>
                        </Row>
                    </ListGroupItem>
                ))}
            </ListGroup>
            <div style={{ marginTop: "20px", textAlign: "right" }}>
                <Button variant="primary">구매하기</Button>
            </div>
        </div>
    );
}
