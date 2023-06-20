import React, { Component } from 'react';
 import "../app/footer.css";
 import 'bootstrap/dist/css/bootstrap.min.css';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faGithub, faLinkedin, faTwitter, faInstagram, faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'





const Footer = () => {
    return(<footer className="footer-main bg-dark">
        <div className="container">
        <section class="">
      <form action="">
        <div class="row d-flex justify-content-center">
  
          <div className="col-auto">
            <p className="pt-2">
              <strong>Sign up for our newsletter</strong>
            </p>
          </div>
      
          <div className="col-md-5 col-12">
      
            <div className="form-outline form-white mb-4">
              <input type="email" id="form5Example2" className="form-control" />
              <label className="form-label" for="form5Example2">Email address</label>
            </div>
          </div>
      
          <div className="col-auto">

    
            <button type="submit" className="btn btn-outline-light mb-4">
              Subscribe
            </button>
          </div>
   
        </div>
    
      </form>
    </section>
          <div className="row address-main">
            <div className="col-lg-4 col-sm-12 col-xs-12">
              <div className="address-box clearfix">
                <div className="add-icon">
                  <img src="Img/footer-icon-01.png" alt="" />
                </div>
                <div className="add-content">
                  <h5>Address</h5>
                  <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut veniam </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 col-xs-12">
              <div className="address-box clearfix">
                <div className="add-icon">
                  <img src="Img/footer-icon-02.png" alt="" />
                </div>
                <div className="add-content">
                  <h5>Phone</h5>
                  <p> 555-555-5555<br />
                  555-555-5555 </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 col-xs-12">
              <div className="address-box clearfix">
                <div className="add-icon">
                  <img src="Img/footer-icon-03.png" alt="" />
                </div>
                <div className="add-content">
                  <h5>Email</h5>
                  <p> <a href="mailto:" style={{textDecoration:"none"}}>fadsfdsfa@dfasfadsfsaf.com</a> </p>
                </div>
              </div>
            </div>
          </div>
      </div>
      
      <footer className="bg-dark text-center text-white">
      <div className="container p-4 pb-0">
       
    <section className="mb-4">
      
      <a className="btn btn-primary btn-floating m-1" style={{backgroundColor: "#3b5998", border:"2px solid transparent", borderRadius:"50%",height:"42px",width:"42px"}} href="#!" role="button"><FontAwesomeIcon style={{border: "2px solid transparent", borderRadius:"50%",marginLeft:"-9px",marginTop:"-3px"}} height="2rem" width="2rem" icon={faFacebook} /></a>

   
      <a className="btn btn-primary btn-floating m-1" style={{backgroundColor: "#55acee", border:"2px solid transparent", borderRadius:"50%",height:"42px",width:"42px"}} href="#!" role="button"><FontAwesomeIcon style={{border: "2px solid transparent", borderRadius:"50%",marginLeft:"-9px",marginTop:"-3px"}} height="2rem" width="2rem" icon={faTwitter} /></a>


      <a className="btn btn-primary btn-floating m-1" style={{backgroundColor: "#dd4b39", border:"2px solid transparent", borderRadius:"50%",height:"42px",width:"42px"}} href="#!" role="button"><FontAwesomeIcon style={{border: "2px solid transparent", borderRadius:"50%",marginLeft:"-9px",marginTop:"-3px"}} height="2rem" width="2rem" icon={faGoogle} /></a>


      <a className="btn btn-primary btn-floating m-1" style={{backgroundColor: "#ac2bac", border:"2px solid transparent", borderRadius:"50%",height:"42px",width:"42px"}} href="#!" role="button"><FontAwesomeIcon style={{border: "2px solid transparent", borderRadius:"50%",marginLeft:"-9px",marginTop:"-3px"}} height="2rem" width="2rem" icon={faInstagram} /></a>


      <a className="btn btn-primary btn-floating m-1" style={{backgroundColor: "#0082ca", border:"2px solid transparent", borderRadius:"50%",height:"42px",width:"42px"}} href="#!" role="button"><FontAwesomeIcon style={{border: "2px solid transparent",
    borderRadius:"50%",marginLeft:"-9px",marginTop:"-3px"}} height="2rem" width="2rem" icon={faLinkedin} /></a>

      <a className="btn btn-primary btn-floating m-1" style={{backgroundColor: "#333333", border:"2px solid transparent", borderRadius:"50%",height:"42px",width:"42px"}} href="https://github.com/" role="button">
        <FontAwesomeIcon style={{border: "2px solid transparent",
    borderRadius:"50%",marginLeft:"-9px",marginTop:"-3px",backgroundColor:"purple"}} height="2rem" width="2rem" icon={faGithub} />
    </a>
    </section>
   

      </div>
      <div className="text-center p-3" style={{backgroundColor:`rgba(0, 0, 0, 0.2)`}}>
       © 2023 All Rights Reserved.
      </div>
      </footer>
      </footer>
    )
}
export default Footer;