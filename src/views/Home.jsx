import React from 'react';
import styled from 'styled-components';
import NavigationBar from '../components/navigation/NavigationBar';
import Footer from '../components/navigation/Footer';
import './Home.css';

class Home extends React.Component {
    render() {
        const Circle = styled.div`
        height: 350px;
        width: 350px;
        background: url('/images/my-picture.png') no-repeat white 20px 0px;
        background-size: 330px 400px;
        box-shadow: 4px 4px  rgba(0,0,0,0.2);
        -moz-box-shadow: 4px 4px  rgba(0,0,0,0.2);
        -webkit-box-shadow: 4px 4px  rgba(0,0,0,0.2);
        -o-box-shadow: 4px 4px  rgba(0,0,0,0.5);
        border-radius: 50%;
        @media only screen and (max-width: 450px) {
            height: 115px;
            width: 115px;
            background-size: 85px 85px;

        }
        `
        return (
            <div id='view'>
                <NavigationBar />
                <main>
                    <div id='home'>
                        <div id='home-top-info'>
                            <div id='home-top-info-image'>
                                <Circle  />
                            </div>
                            <div id='home-top-info-text'>
                                <h1>Juan Diego Barrios</h1>
                                <h2>Bachelor in Computer Science, full stack developer and self learner...</h2>
                            </div>
                        </div>
                        <div id='home-content'>
                            <div className='home-content-section'>
                                <h2>Self Description:</h2>
                                <h3>I am a computer science student at Universidad de Los Andes in Colombia. I discovered my passion for programming during one of the mandatory courses in my initial program of civil engineering, in which I learned the Java language. This led me to change my major to my nowadays program of computer science. Besides my formal education at the university, I have expanded my learning process by developing several projects in collaboration with colleagues and professors that have helped me grow in experience. I am a full stack developer, I don’t mind if I am in charge of the back-end, front-end, mobile or web, just give me any programming challenge and I won't just fulfill it but I will have fun while doing it.</h3>
                            </div>
                            {/* <div className='home-content-section'>
                                <h2>Skills:</h2>
                                <ApexChart/>
                            </div> */}
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }
}

export default Home;