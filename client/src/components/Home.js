import React from 'react';
import styled from 'styled-components';
import orange from '../images/orange.jpg';
import imageone from '../images/imageone.jpg';
import busone from '../images/busone.jpg';
import bustwo from '../images/bustwo.png';
import busthree from '../images/busthree.jpg';
import { NavLink } from 'react-router-dom';

class Home extends React.Component{
    state = {
      menu: false
    }
    close = () => {
      this.setState({
        menu: !this.state.menu
      })
    }
    render(){
        return(
            <div>
                <Hero>
                  {/* {this.state.menu ?
                  <Menu onClick={this.close}>
                    <div className='links'>
                    <h2>Menu</h2>
                      <NavLink to="/digitaldesign">Digital Design</NavLink>
                      <NavLink to="/photography">Photography</NavLink>
                      <NavLink to="/about">About</NavLink>
                      <NavLink to="/contact">Contact</NavLink>
                    </div>
                    <h3 onClick={this.close}>Close</h3>
                  </Menu>
                  :
                    <Hamburger onClick={this.close}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </Hamburger>
                  } */}
                  <NavLink to="/about" id='about'>About</NavLink>
                  <Middle>
                    <NavLink to="/digitaldesign" id='digitaldesign'>Digital Design</NavLink>
                    <Header>
                        <div>
                            <span>P</span>
                            <span>R</span>
                        </div>
                        <h4>Phillip Rhoades</h4>
                    </Header>
                    <NavLink to="/photography" id='photography'>Photography</NavLink>
                  </Middle>
                  <NavLink to="/contact" id='contact'>Contact</NavLink>
                </Hero>
                {/* <Parallax image={orange}>
                    Hiring Campaigns, Van Mocks, Marketing Spread
                </Parallax>
                <ContentOne>
                    <div className="imgone">
                        <img src={imageone} alt=""/>
                    </div>
                    <div className="imgtwo">
                        <img src={busone} alt=""/>
                        <p>While working with Razorback Transit, I has heavily involved with hiring 
                            campaigns on social media and printed media. One of the main goals of mine 
                            at Razorback Transit was to improve the hiring ads and materials. Most of my 
                            decisions in making these were based in simplifying the information; without 
                            mincing words and keeping the message clear, we wanted our draw to be clear 
                            and without confusion.</p>
                        </div>
                        <div className="imgthree">
                        <img src={bustwo} alt=""/>
                        <p>I was also asked to create base van mock-up files for the new vans for the service SAFE-RIDE. 
                            Using the photographs given, I created vector mocks that could be edited and changed to whatever
                            design any of those in charge of the service would want.</p>
                        </div>
                        <div className="imgfour">
                        <img src={busthree} alt=""/>
                        <p>
                        I also used similar assets that I had made from previous projects with other provided by PassioGO! 
                        to create a printed ad spread that would go on the back of parking maps that get handed out by the 
                        Parking Dept. during events. I was able to design this spread for hiring, bus schedules, and the app,
                        PassioGO!
                        </p>
                    </div>
                </ContentOne>
                <Parallax image={orange}>
                    Passio GO! Bus Shelter Poster Ad
                </Parallax> */}
            </div>
        )
    }
}

const Middle = styled.div`
  display: flex;
  justify-content: space-between;
  a{
    font-size: 1.3rem;
    text-decoration: none;
    color: white;
    &:hover{
      color: orange;
      font-size: 1.5rem;
    }
  }
  #digitaldesign{
    transform: rotate(90deg);
    height: 10px;
  }
  #photography{
    transform: rotate(270deg);
    height: 10px;
  }
  width: 100%;
  align-items: center;
  font-weight: 300;
`;

const Menu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 500px;
  width: 350px;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: 'Roboto', sans-serif;
  .links{
    display: flex;
    flex-direction: column;
    h2{
      margin-bottom: 50px;
      font-family: 'Roboto', sans-serif;
    }
    a{
      margin-bottom: 20px;
      text-decoration: none;
      font-size: 1.7rem;
      color: rgb(51, 51, 51);
      font-family: 'Roboto', sans-serif;
      &:hover{
        color: orange;
      }
    }

  }
  h3{
    cursor: pointer
    &:hover{
      color: orange;
    }
  }
`;

const Hamburger = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  margin-right: 20px;
  padding: 2px 5px;
  border: 1px solid white;
  border-top: none;
  border-radius: 4px;
  div{
    width: 35px;
    height: 3px;
    background-color: white;
    margin: 6px 0;
    border-radius: 1.5px;
  }
  &:hover{
    background: white;
    cursor: pointer;
    div{
      background-color: rgb(51, 51, 51);
    }
  }
`;

const Hero = styled.div`
  height: 100vh;
  background: rgb(51, 51, 51);
  span:nth-child(1){
    font-family: 'Arimo', sans-serif;
    color: black;
    font-size: 10rem;
    font-weight: bold;
    text-shadow: 0 1px 0 rgb(89, 89, 89),
               0 2px 0 rgb(77, 77, 77),
               0 3px 0 rgb(64, 64, 64),
               0 4px 0 rgb(51, 51, 51),
               0 5px 0 #262626,
               0 6px 1px rgba(0,0,0,.1),
               0 0 5px rgba(0,0,0,.1),
               0 1px 3px rgba(0,0,0,.3),
               0 3px 5px rgba(0,0,0,.2),
               0 5px 10px rgba(0,0,0,.25),
               0 10px 10px rgba(0,0,0,.2),
               0 20px 20px rgba(0,0,0,.15);
  }
  span:nth-child(2) {
    font-family: 'Arimo', sans-serif;
    color: orange;
    font-size: 10rem;
    font-weight: bold;
    transform: rotateY(180deg);
    display: inline-block;
    text-shadow: 0 1px 0 rgb(255, 204, 153),
               0 2px 0 rgb(255, 204, 102),
               0 3px 0 rgb(255, 204, 0),
               0 4px 0 rgb(255, 153, 0),
               0 5px 0 rgb(255, 128, 0),
               0 6px 1px rgba(0,0,0,.1),
               0 0 5px rgba(0,0,0,.1),
               0 1px 3px rgba(0,0,0,.3),
               0 3px 5px rgba(0,0,0,.2),
               0 5px 10px rgba(0,0,0,.25),
               0 10px 10px rgba(0,0,0,.2),
               0 20px 20px rgba(0,0,0,.15);
  }
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  #about{
    margin-top:20px;
  }
  #contact{
    margin-bottom: 20px;
  }
  a{
    font-size: 1.3rem;
    text-decoration: none;
    color: white;
    &:hover{
      color: orange;
      font-size: 1.5rem;
    }
  }
`;

const Header = styled.div`
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  h4{
    color: white;
    margin: 0;
    font-weight: 100;
    letter-spacing: 10px;
    font-size: 1.5rem;
  }
`;

const Parallax = styled.div`
  background-image: url(${props => props.image});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
  color: rgb(51, 51, 51);
  font-family: 'Arimo', sans-serif;
  text-shadow: 0 1px 0 rgb(89, 89, 89),
               0 2px 0 rgb(77, 77, 77),
               0 3px 0 rgb(64, 64, 64),
               0 4px 0 rgb(51, 51, 51),
               0 5px 0 #262626,
               0 6px 1px rgba(0,0,0,.1),
               0 0 5px rgba(0,0,0,.1),
               0 1px 3px rgba(0,0,0,.3),
               0 3px 5px rgba(0,0,0,.2),
               0 5px 10px rgba(0,0,0,.25),
               0 10px 10px rgba(0,0,0,.2),
               0 20px 20px rgba(0,0,0,.15);
`;

const ContentOne = styled.div`
  background: rgb(51, 51, 51); 
  .imgone{
    padding: 50px 0;
  }
  padding-bottom: 50px;
  .imgtwo, .imgthree, .imgfour{
    img{
      margin-bottom: 50px;
    }
    p{
      max-width: 1000px;
      width: 100%;
      color: white;
      margin: 0 auto;
      margin-bottom: 100px;
      font-size: 1.5rem;
      line-spacing: 2;
      text-align: left;
    }
  }
`;

export default Home;