import React from 'react';
import NavigationBar from '../components/navigation/NavigationBar';
import Footer from '../components/navigation/Footer';
import './Projects.css';
import YouTube from 'react-youtube';


class Projects extends React.Component {
    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
              autoplay: 0
            }
          };
        const redirectToSuperAndes = () => {

            window.open('https://github.com/jdbarriosc/SuperAndes');
        }
        const redirectToAtPos = () => {

            window.open('https://github.com/jdbarriosc/Atpos-Project');
        }
        const redirectToChicagoCabs = () => {

            window.open('https://github.com/jdbarriosc/p3_201810');
        }
        return (
            <div id='view'>
                <NavigationBar />
                <main>
                    <div id='projects'>
                        <div id='projects-content'>
                            <div className='projects-content-section'>
                                <h2>
                                    TripBuilder (Project for university course)
                                </h2>
                                <h3>Developed a web platform for the creation of travel plans.</h3>
                                <h3>Worked with SCRUM methodology. Controlled the planning, monitoring and documentation with TeamWork (www.teamwork.com), with continuous integration managed through Github, Maven, Jenkins and Sonarqube.</h3>
                                <h3>Position:</h3>
                                <h4>- Implementation of Back-end in Java, a JPA Persistence, using a REST API.</h4>
                                <h4>- Collaboration in the design of the front using Master / Detail design patterns, with a horizontal display; finally developed in Angular by the rest of the team.</h4>
                                <h4>- Creation of integration tests with post-man collections, and unit tests of logic and persistence with Junit.</h4>
                                <h3>Results:</h3>
                                <h4>- A functional and persistent page with local deployment was delivered.</h4>
                                <br></br>
                                <YouTube
                                    videoId="9na7HuXStPw"
                                    opts={opts}
                                    onReady={this._onReady}
                                />
                            </div>
                            <div className='projects-content-section'>
                                <h2>
                                    ATpos (Project for university course)
                                    <div className='projects-content-section-image'  >
                                        <img src='/images/github.png' alt='github-link' onClick={redirectToAtPos}></img>
                                    </div>
                                </h2>
                                <h3>Creation of the entire architecture, with the different software quality requirements (Availability, Ease of Modification, Performance, Security, Latency) of the ATpos platform.</h3>
                                <h3>Position:</h3>
                                <h4>- In this project the architecture views were generated in its entirety: Context Model, Domain Model, Deployment Model and Component Model, applying different detailed design patterns to achieve the different chosen ASRs.</h4>
                                <h4>- Certain components were developed in Python and several active replicas were deployed in EC2 with a load balancer.</h4>
                                <h4>- Load tests were performed with JMeter.</h4>
                                <h4>- Authentication systems were developed using Auth0.</h4>
                                <h4>- We created a simple Front for interaction with the system.</h4>
                                <h3>Results:</h3>
                                <h4>- The architecture of the entire system was delivered, which complied with the ASRs desired by the company.</h4>
                                <h4>- A semi-functional system was delivered.</h4>

                            </div>
                            <div className='projects-content-section'>
                                <h2>
                                    SuperAndes (Project for university course)
                                    <div className='projects-content-section-image'  >
                                        <img src='/images/github.png' alt='github-link' onClick={redirectToSuperAndes}></img>
                                    </div>
                                </h2>
                                <h3>Creation of the entire supermarket management system.</h3>
                                <h3>Position:</h3>
                                <h4>- All architecture and implementation in Java was performed.</h4>
                                <h4>- The relational model was made, with restrictions and foreign keys, security levels were chosen to guarantee integrity, and finally indexes were applied to speed up the search time.</h4>
                                <h3>Results:</h3>
                                <h4>- A functional system was delivered guaranteeing atomicity at the time of persistence.</h4>
                            </div>
                            <div className='projects-content-section'>
                                <h2>
                                    Taxis of Chicago (Project for university course)
                                    <div className='projects-content-section-image'  >
                                        <img src='/images/github.png' alt='github-link' onClick={redirectToChicagoCabs}></img>
                                    </div>
                                </h2>
                                <h3>Mapping the history of trips made by Chicago in 2016</h3>
                                <h3>Position:</h3>
                                <h4>- A graph was created containing all the corners of the streets of Chicago, whose arches represented the streets between them.</h4>
                                <h4>- Analyzing the information provided on the routes made by the Chicago taxis in 2016 with different routes of the graphs, the different queries were found as busiest routes, all roads from one point to another, seeking to optimize the queries to the maximum .</h4>
                                <h3>Results:</h3>
                                <h4>- A functional program managed by console was delivered.</h4>
                            </div>
                            <div className='projects-content-section'>
                                <h2>
                                    Concurrent Servers and Confidentiality Tactics (Project for university course)
                                </h2>
                                <h3>Concurrent servers were created for different scenarios.</h3>
                                <h3>Position:</h3>
                                <h4>- For different scenarios delivered, different servers had to be created that, through different multithreading tactics (traffic lights, bags, buffers, etc.), should ensure both data integrity and efficiency.</h4>
                                <h4>- Different confidentiality techniques had to be applied, using the different types of encryption and hashing for the communication protocol between the created servers and the clients.</h4>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }
}

export default Projects;