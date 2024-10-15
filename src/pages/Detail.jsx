import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Detail({products}) {
  let {id} = useParams();
  const [num, setNum] = useState(0);
  let [alert, setAlert] = useState(true);

  useEffect(()=>{
    console.log(num);
  },[num]);

  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 10000);
  }, []);

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
            <h4 className="pt-5">{ products[id - 1].title }</h4>
            <p>{ products[id - 1].detail }</p>
            <button className="btn btn-danger">주문하기</button>
            <button onClick={() => setNum(num+1)}>
              +1
            </button>
            { alert ? <div> 지금 주문하세요 </div> : null}
          </div>
        </div>
      </div>
    );
  }
  