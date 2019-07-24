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
        </div>
        <div className="imgthree">
          <img src={bustwo} alt=""/>
        </div>
        <div className="imgfour">
          <img src={busthree} alt=""/>
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
`;

export default App;
