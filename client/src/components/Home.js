import React, { Component } from 'react';
import Particles from 'react-particles-js';
import SnapLogIn from './snapLogIn';
import {Link} from 'react-router-dom';
import './Home.css';

const ParticleBackground = () => (
    <Particles
        params={{
            particles: {
                color: {
                    value: "#bd59d4"
                },
                number: {
                    value: 100
                },
                size: {
                    random: true,
                    value: 6
                },
                move: {
                    speed: 2,
                    random: true
                },
                opacity: {
                    "value": 0.5211089197812949,
                    "random": false,
                    "anim": {
                      "enable": true,
                      "speed": 1,
                      "opacity_min": 0.1,
                      "sync": false
                    }
                  }
            }
        }}
        style={{
            width: '100%',
            position: 'absolute',
            zIndex: '0',
            left: '0'
        }}
    />
);

class Home extends Component {
    render() {
        return (
            <div>
                <ParticleBackground/>
                <header className="App-header">
                    <h1 className="App-title">Welcome to SnapGreen!</h1>
                    <div className="form" style={{ zIndex: '1' }}>
                        <SnapLogIn></SnapLogIn>
                        <Link className="register-button" to="/login">Business Sign in</Link>
                    </div>
                </header>
            </div>
        );
    }
}

export default Home;