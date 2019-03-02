import React, { Component } from 'react';
import Particles from 'react-particles-js';
import SnapLogIn from './snapLogIn';

const ParticleBackground = () => (
    <Particles
        params={{
            particles: {
                color: {
                    value: "#FF9900"
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
                <ParticleBackground />
                <header className="App-header">
                    <h1 className="App-title">Welcome to SnapGreen!</h1>
                    <div className="form" style={{ zIndex: '1' }}>
                        <SnapLogIn></SnapLogIn>
                    </div>
                </header>
            </div>
        );
    }
}

export default Home;