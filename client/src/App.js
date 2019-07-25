import React from 'react';
import styled from 'styled-components';
import './App.css';
import orange from './orange.jpg';
import imageone from './imageone.jpg';
import busone from './busone.jpg';
import bustwo from './bustwo.png';
import busthree from './busthree.jpg';

function App() {
  return (
    <div className="App">
      <Home>
        <Header>
          <div>
          <span>P</span>
          <span>R</span>
          </div>
          <h4>Phillip Rhoades</h4>
        </Header>
      </Home>
      <Parallax image={orange}>
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
      </Parallax>
    </div>
  );
}

const Home = styled.div`
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
  justify-content: center;
  align-items: center;
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

export default App;
