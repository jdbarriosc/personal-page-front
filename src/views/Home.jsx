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
                            <Circle id={'refer-redirect-btn-'} />
                            <div id='home-top-info-text'>
                                <h1>Juan Diego Barrios</h1>
                                <h2>Bachelor in Computer Science</h2>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }
}

export default Home;