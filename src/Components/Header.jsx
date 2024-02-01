import React from 'react'
import Footer from './Footer'; 

function Header() {
  return (
    <header id="header">
				<div class="inner">
					<a href="#" class="image avatar">
          <img src={process.env.PUBLIC_URL + '/images/dp2.jpg'} alt="" /></a>
					<h1> <strong>Hi, I'm SAIMA ASAD</strong>, 
          <br />
          Full Stack Web Developer 
         
</h1>
				</div>
        <Footer/>

			</header>  
      );
}

export default Header;

