import { ListGroup, ListGroupItem, Image } from "react-bootstrap"
import { useEffect, useState } from "react";

export default function RecentlySeen({ isLogin }) {
    const [recent, setRecent] = useState([]);
    const [has_recent, set_has_recent] = useState(false);

    useEffect(() => {
        const recent_data = JSON.parse(localStorage.getItem("watched"));
        if (recent_data && recent_data.length !== 0) {
            setRecent(recent_data);
            set_has_recent(true);
            console.log("check");
        } else {
            set_has_recent(false);
        }
    }, [isLogin]);

    function RecentContents({ id }) {
        console.log("hi" + id)
        let image = `https://codingapple1.github.io/shop/shoes${id}.jpg`;
        return( <Image
                src={image}
                fluid
                style={{ width: "100px", height: "100px", objectFit: "cover" }}
                />
        );
    }

    return (
        <div>
            최근 본 상품
            <ListGroup>
                {isLogin && has_recent && 
                    recent.map((_recent, index) => (
                        <ListGroupItem key={index}>
                            <RecentContents id={_recent} />
                        </ListGroupItem>
                    ))}
            </ListGroup>
        </div>
    )
}
