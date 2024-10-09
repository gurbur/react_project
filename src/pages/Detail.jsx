import { useParams } from "react-router-dom";

export default function Detail({writings}) {
  let {id} = useParams();

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
          />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{ writings[id].title }</h4>
            <p>{ writings[id].top_line }</p>
            <button className="btn btn-danger">주문하기</button>
          </div>
        </div>
      </div>
    );
  }
  