import { useState,useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from "react-router-dom"
import axios from 'axios';
import { AiFillStar } from "react-icons/ai";
import { FaTag } from "react-icons/fa";
import { Nav, Navbar, Container, NavDropdown,Row,Col, Button,Form } from 'react-bootstrap';


function  Detail() {
    let [val ,seta] =useState()
    let [status ,setstatus] =useState(false);
    let [img ,setimg] =useState([]);
    const[subimg,setsubimg]=useState(img[0]);
    const {id} = useParams();

  useEffect (() => {
      axios.get(`https://dummyjson.com/products/${id}`)
        .then(function (response) {
          seta(response.data);
          setimg(response.data.images);
          setsubimg(response.data.images[0]);
          setstatus(true);
         })
        .catch(function (error) {
        console.log(error);
        })            
  },[])

  if(status){
    return(
        <>
            <div className="row p-4 pb-0">
                <div className="d-flex">
                    <div className="col-1 border align-items-center">
                      {
                        img.map((image)=>{
                            return(
                                <img src={image} className="img d-block pb-2" width='100px'onClick={()=>setsubimg(image)}></img>
                            )
                          })
                      }
                  </div>
                  <div className=" p-2 col-5 border">
                    <img src={subimg}width='400px' height='300px' className="m-2"></img>
                    <div className=" m-3 ps-3"><span className="add1 add text-center me-4 h6">ADD TO CART</span><span className="add2 add text-center h6">BUY NOW</span></div>
                    {
                    <img src={val.thumbnail} width='100px'></img>
                    }
                  </div>
                  
                  <div className="col-6 p-2">
                    <div className="h5">{val.title}</div>
                    <div>brand:{val.brand}</div>
                    <span className="reting">{val.rating}<AiFillStar ></AiFillStar></span><a>494 Ratings & 30 Reviews</a>
                    <div className="off">Special discount{val.price*(val.discountPercentage)/100}</div>
                    <div className="h4">₹{val.price}<span className="off h6 p-2">{val.discountPercentage}%</span></div>
                    <span className="h6">Available offers</span>
                    <div className="size"><span className="h6"><FaTag style={{color:'#13BE48'}}></FaTag>Bank Offer</span>10% off on ICICI Bank Credit Cards, up to ₹1,250, on orders of ₹5,000 and above  <span className="textsky ">T&C</span></div>
                    <div className="size"><span className="h6"><FaTag style={{color:'#13BE48'}}></FaTag>Bank Offer</span>10% off on ICICI Bank Credit Card EMI Transactions, up to ₹2,000, on orders of ₹5,000 and above  <span className="textsky ">T&C</span></div>
                    <div className="size"><span className="h6"><FaTag style={{color:'#13BE48'}}></FaTag>Bank Offer</span>10% off on ICICI Bank Debit Card EMI Transactions, up to ₹2,000, on orders of ₹5,000 and above  <span className="textsky ">T&C</span></div>
                    <div className="size"><span className="h6 "><FaTag style={{color:'#13BE48'}}></FaTag>Special PriceGet</span>at flat ₹149T <span className="textsky ">T&C</span></div>
                    <div className=""><span className="h6">Description: </span>{val.description}</div>
                    <div>Stock:{val.stock}</div>
                  </div>
                </div>
            </div>
            
        </>
     )
    
     }
     else{
        return(
            <></>
        )
     }
   
}
export default Detail;