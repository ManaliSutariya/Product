import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect} from 'react';
import axios from 'axios';
import {  FaFacebookF,FaTwitter,FaGooglePlusG,FaLinkedinIn,FaBehance} from "react-icons/fa";
import { Nav, Navbar, Container, NavDropdown,Row,Col, Button,Form } from 'react-bootstrap';
import { AiFillStar } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { FaAngleDown,FaShoppingCart } from "react-icons/fa";
import Offcanvas from 'react-bootstrap/Offcanvas';

function Product() {
  let [char,setchar]=useState([])
  
  useEffect (()=>{
    axios.get('https://dummyjson.com/products/')
  .then(function (response) {
    setchar(response.data.products)
    console.log(response.data.products);
  })
  .catch(function (error) {
    console.log(error);
  })            
  },[])


  const searchdata = (pname)=>{
    axios.get(`https://dummyjson.com/products/search?q=${pname}`)
    .then(function (response) {
      setchar(response.data.products)
      console.log(response.data.products);
    })
    .catch(function (error) {
      console.log(error);
    })  
  }

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const categorydata = (category)=>{
    axios.get(`https://dummyjson.com/products/category/${category}`)
    .then(function (response) {
      setchar(response.data.products)
      console.log(response.data.products);
    })
    .catch(function (error) {
      console.log(error);
    })  
  }
 
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" className='headercolor'>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" style={{}}>
          <Button variant="primary" onClick={handleShow} className='ms-4' style={{fontSize:'16px',backgroundColor:'black'}}>
            category
          </Button>

          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Product</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Button onClick={()=>categorydata("smartphones")} className='me-2'>smartphones</Button>
              <Button onClick={()=>categorydata("laptops")} className='me-2'>laptops</Button>
              <Button onClick={()=>categorydata("skincare")} className='me-2'>skincare</Button><br></br><br></br>
              <Button onClick={()=>categorydata("fragrances")} className='me-2'>fragrances</Button>
              <Button onClick={()=>categorydata("groceries")} className='me-2'>groceries</Button>
              <Button onClick={()=>categorydata("home-decoration")} className='me-2'>home-decoration</Button><br></br><br></br>
              <Button onClick={()=>categorydata("furniture")} className='me-2'>furniture</Button>
              <Button onClick={()=>categorydata("tops")} className='me-2'>tops</Button>
              <Button onClick={()=>categorydata("womens-dresses")} className='me-2'>womens-dresses</Button><br></br><br></br>
              <Button onClick={()=>categorydata("womens-shoes")} className='me-2'>womens-shoes</Button>
              <Button onClick={()=>categorydata("mens-shirts")} className='me-2'>mens-shirts</Button><br></br><br></br>
              <Button onClick={()=>categorydata("mens-shoes")} className='me-2'>mens-shoes</Button>
              <Button onClick={()=>categorydata("mens-watches")} className='me-2'>mens-watches</Button><br></br><br></br>
              <Button onClick={()=>categorydata("womens-watches")} className='me-2'>womens-watches</Button>
              <Button onClick={()=>categorydata("womens-bags")} className='me-2'>womens-bags</Button><br></br><br></br>
              <Button onClick={()=>categorydata("womens-jewellery")} className='me-2'>womens-jewellery</Button>
              <Button onClick={()=>categorydata("sunglasses")} className='me-2'>sunglasses</Button><br></br><br></br>
              <Button onClick={()=>categorydata("automotive")} className='me-2'>automotive</Button>
              <Button onClick={()=>categorydata("motorcycle")} className='me-2'>motorcycle</Button>
              <Button onClick={()=>categorydata("lighting")} className='me-2'>lighting</Button>
            </Offcanvas.Body>
          </Offcanvas>
            <Nav.Link href='/'className='' style={{color:'white',fontSize:'15px'}}>HOME</Nav.Link>
            <Nav.Link href='about' style={{color:'white',fontSize:'15px'}}>ABOUT</Nav.Link>
            
          </Nav>
          <Nav>
            <h1><input type='search'className='me-2 rounded-3' onChange={(e)=>{searchdata(e.target.value)}}style={{width:'350px',height:'40px',fontSize:'16px'}} ></input></h1>
            <Button variant="outline-success" className=' me-5 mt-3' onChange={(e)=>{searchdata(e.target.value)}} style={{backgroundColor:'black',color:'white',width:'70px',height:'35px',fontSize:'16px'}}>Search</Button>
            <Nav.Link href="contact" className='pt-3' style={{color:'white',fontSize:'15px'}}>BECOME A SELLER</Nav.Link>
            <Nav.Link href="events" className='pt-3' style={{color:'white',fontSize:'15px'}}>MORE<FaAngleDown></FaAngleDown></Nav.Link>
            <Nav.Link href="" className='pt-3 me-4' style={{color:'white',fontSize:'15px'}}><FaShoppingCart></FaShoppingCart>CART</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    {
      char.map((a) => {
        return (
          <>
          <div className='row card-body'>
            <div className=" d-flex p-3 col-lg-4 allimg">
            <Link to={`/Detail/${a.id}`}><img src={a.thumbnail} className="img-fluid  rounded "></img></Link>
            </div>
            <div className='col-lg-4 p-4'>
              <h6><span className='fw-bold'>Title: </span>{a.title}</h6>
              <h6><span className='fw-bold'>Description: </span>{a.description}</h6>
              <h6><span className='fw-bold'>DiscountPercentage: </span>{a.discountPercentage}</h6>
              <h6><span className='fw-bold'>Category: </span>{a.category}</h6>
            </div>
            <div className='col-lg-4 p-4'>
              <span className='size h4'>₹{a.price}</span>
              <h6  className='starcolor'><span><AiFillStar></AiFillStar><AiFillStar></AiFillStar><AiFillStar></AiFillStar><AiFillStar></AiFillStar><AiFillStar></AiFillStar></span>{a.rating}</h6>
              <h6 className=' textcolor'><span className='fw-bold'>Brand: </span>{a.brand}</h6>
              <h6 className='text_color mb-4'><span className='fw-bold'>Stock: </span>{a.stock}</h6> 
            <Link to={`/Detail/${a.id}`} className='shop p-2  fw-bold'>shop now</Link>
            </div>
          </div>
          
          </>  
        )
      })
    }
    <div>
     <div className='foot1 text-white text-center py-5'>
         <Container>
             <Row>
                 <div className='d-flex'>
                     <Col><FaFacebookF className='my-3 mx-3 f_1'></FaFacebookF>
                     <FaTwitter className='my-3 mx-3 f_1'></FaTwitter>
                     <FaGooglePlusG className='my-3 mx-3 f_1'></FaGooglePlusG>
                    <FaLinkedinIn className='my-3 mx-3 f_1'></FaLinkedinIn>
                     <FaBehance className='my-3 mx-3 f_1'></FaBehance></Col>
                 </div>
                 <p className='py-3 fs-5'>All Right Reserved © 2021<span> Products</span></p>
             </Row>
         </Container>
     </div>
 </div>
    </div>
  );
}

export default Product;