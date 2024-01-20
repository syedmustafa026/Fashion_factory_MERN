import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import './footer.css'
// Assets

export default function Footer() {

  const getCurrentYear = () => {
    return new Date().getFullYear();
  }

  return (
    <footer>

      <div class="f-contact" data-aos="zoom-in-up" data-aos-offset="200">
        <div>
          <h1>Fashion Factory</h1>
          <p style={{fontSize:'16px'}}> © All Copyrights reserverd {getCurrentYear()}</p>

          {/* <i class="fa fa-whatsapp"></i>
          <i class="fa fa-instagram"></i>
          <i class="fa fa-telegram"></i>
          <i class="fa fa-twitter"></i> */}
        </div>


        <div>
          <h3>Useful links</h3>
          <p>New Arrivals</p>
          <p>Blouses</p>
          <p>Shoes</p>
          <p>Dresses</p>

        </div>

        <div>
          <h3>Details</h3>
          <p>Store</p>
          <p>UAN (000-111-222)</p>
          <p>About</p>
          <p>Start Selling</p>

        </div>

        <div>
          <h3>Help & Support</h3>
          <p>Privacy policy</p>
          <p>Term & conditions</p>
          <p>Technical support</p>
          <p>Customer care</p>
        </div>
      </div>
    </footer>
  );
}

