import React from 'react'
import 'boxicons'
import '../styles/banner.css';

const Banner = () => {
  return (
    <div class='banner'>
      <div class='container'>
        <div class='row p-5' >
          <div class='col-xl-8 col-lg-8'>
            <div class='textblock'>
              <h3>Hello, It's Me</h3>
              <h1>Kalparatna Mahajan</h1>
              <h3>And I'm a <span>Full Stack Developer</span></h3>
              <p>Let's connect on social media!</p>
              <div class="social-media">
                <a href="https://www.linkedin.com/in/kalparatna-mahajan-72b45225b" target="_blank" rel="noreferrer"><box-icon type='logo' name='linkedin-square'></box-icon></a>
                <a href="https://github.com/Kalparatna" target="_blank" rel="noreferrer"><box-icon name='github' type='logo' ></box-icon></a>
                <a href="https://twitter.com/Kalparatna74375" target="_blank" rel=""><box-icon name='twitter' type='logo' ></box-icon></a>
                <a href="https://instagram.com/kalparatna_mahajan?igshid=YmMyMTA2M2Y= " target="_blank" rel="nonreferrer"><box-icon name='instagram' type='logo' ></box-icon></a>
              </div>
              <a href=".https://drive.google.com/file/d/1flb2F4I6YcoiOndJp2JsxiUz7iVVYuHE/view?usp=drive_link" download class="btn mt-2">Download CV</a>
            </div>
          </div>
          <div class='col-xl-4 col-lg-4'>
            <img src="./bannar.png" alt="" class='home-img' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner