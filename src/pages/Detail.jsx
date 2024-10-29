import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import TabContent from "../components/TabContent";
import { Context1 } from './../App';

export default function Detail(props) {
  let {id} = useParams();
  let [alert, setAlert] = useState(true);
  let {tab, setTab} = useContext(Context1);

  useEffect(()=>{
    let watched = JSON.parse(localStorage.getItem("watched"));
    if(watched) { // watched is exist
      if (watched.indexOf(id) === -1) { // id not existed
        // add id to watched
        watched.push(id);
        localStorage.setItem("watched", JSON.stringify(watched));
      }
      // if id exist already
      // pass
    }
    else { // watched not exist
      // add [id] to localStorage, using key name "watched"
      localStorage.setItem("watched", JSON.stringify([id]));
    }
    setTimeout(() => {
      setAlert(false);
      }, 10000
    );
  }, []);

  function addCart() {
    let in_cart = localStorage.getItem("inCart");
    if (!in_cart) { // inCart exist
      if (in_cart.indexOf(id) === -1) { // product not exist in in_cart
        // TODO

      }
      else { // product already exist in in_cart
        // TODO

      }
    }
    else { // inCart not exist
      // TODO

    }
    //localStorage.setItem("inCart", id);
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
            { alert ? <div> 지금 주문하세요 </div> : null}
          </div>
          
        </div>
        <TabContent tab={tab}/>
      </div>
    );
  }

