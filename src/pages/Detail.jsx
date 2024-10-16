import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import TabContent from "../components/TabContent";
import { Context1 } from './../App';

export default function Detail(props) {
  let {id} = useParams();
  const [num, setNum] = useState(0);
  let [alert, setAlert] = useState(true);
  let {tab, setTab} = useContext(Context1);

  useEffect(()=>{
    console.log(num);
    let seenItem = localStorage.getItem("seenItem");
    if (seenItem === null && seenItem !== id) {
      localStorage.setItem("seenItem", id);
    }
  },[num]);

  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 10000);
  }, []);

  function addCart() {
    localStorage.setItem("savedId", id);
  }
  

  let shoesimage = "https://codingapple1.github.io/shop/shoes"+ id +".jpg";
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src={shoesimage}
            width="100%"
          />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{ props.products[id - 1].title }</h4>
            <p>{ props.products[id - 1].detail }</p>
            <button className="btn btn-danger" onClick={()=>{addCart()}}>주문하기</button>
            <button onClick={() => setNum(num+1)}>
              +1
            </button>
            { alert ? <div> 지금 주문하세요 </div> : null}
          </div>
          
        </div>
        <TabContent tab={tab}/>
      </div>
    );
  }

