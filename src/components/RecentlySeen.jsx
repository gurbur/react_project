import { ListGroup, ListGroupItem, Image } from "react-bootstrap"

export default function RecentlySeen({ isLogin }) {
    let has_recent = false;
    let recent = localStorage.getItem("watched");
    if (!recent && recent.length != 0) {
        has_recent = true;
    }

    function RecentContents() {
        recent.map(_recent => {
            let image = "https://codingapple1.github.io/shop/shoes"+ _recent +".jpg";
            return( <ListGroupItem><Image src={image} fluid /></ListGroupItem> );
        });
    }

    return (
        (isLogin && has_recent)&&<div>
            최근 본 상품
            <ListGroup>
                <RecentContents />
            </ListGroup>
        </div>
    )
}
