import React from 'react';
import styled from 'styled-components';
import pic from '../images/profilepic.jpg';
import resume from '../images/resume6.pdf';

function About() {
    return (
        <Cont>
            <Header>
                <h2>About <span>Me</span></h2>
                <div>
                    Social Links
                </div>
            </Header>
            <img src={pic} alt=""/>
            <p>
            My name is Phillip Rhoades and I have a prevailing interest in Graphic Design, 
            Illustration, and Photography. This site is made with the purpose of maintaining 
            and showing all of my current work and projects. 
            </p>
            <a href={resume} download='PhilRhoades'>Resume</a>
        </Cont>
    )
}

const Cont = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    p{
        max-width: 674px;
        width: 100%;
        line-height: 36pt;
    }
    a{
        text-decoration: none;
        height: 60px;
        width: 150px;
        background: orange;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1rem;
        font-weight: bold;
        box-shadow: 2px 2px 2px rgb(0,0,0, .5);
        &:hover{
            background: white;
            color: orange;
        }
        margin-bottom: 100px;
    }
`;

const Header = styled.div`
    display: flex;
    width: 100%;
    max-width: 674px;
    justify-content: space-between;
    align-items: center;
    h2{
        font-size: 3rem;
        span{
            color: orange;
        }
    }
`;

export default About;