import React, { useEffect } from 'react';

const ParticlesComponent = () => {
    useEffect(() => {
        // Load tsParticles
        const tsparticlesScript = document.createElement('script');
        tsparticlesScript.src = "https://cdn.jsdelivr.net/npm/@tsparticles/preset-firefly@3.0.2/tsparticles.preset.firefly.bundle.min.js";
        tsparticlesScript.async = true;
        tsparticlesScript.onload = () => {
            tsParticles.load({
                id: "tsparticles",
                options: {
                    preset: "firefly",
                    particles: {
                        number: {
                            value: 30, // Increase the number of particles
                        },
                        color: {
                            value: "#800080" // Purple color for the particles
                        },
                        move: {
                            speed: 1, // Increase the speed of the particles
                        }
                    }
                }
            });
        };
        document.body.appendChild(tsparticlesScript);

        // Cleanup scripts on unmount
        return () => {
            document.body.removeChild(tsparticlesScript);
        };
    }, []);

    return (
        <div id="tsparticles" style={{ width: '100%', height: '100vh', position: 'absolute', top: 0, left: 0 }}></div>
    );
};

const ParticlesBackground = () => {
    return (
        <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
            <ParticlesComponent />
            <div style={{
                position: 'relative',
                zIndex: 1, // Ensure this is above the particles
                textAlign: 'center',
                top: '30%',
                color: 'white',
            }}>
                <img style={{height:"40vh",width:"40vw", borderRadius:"40px"}} src="https://static.vecteezy.com/system/resources/previews/036/346/122/non_2x/cozy-study-space-with-bookshelves-lofi-wallpaper-laptop-table-at-window-evening-cityscape-2d-cartoon-flat-illustration-e-learning-dreamy-vibes-chill-art-lo-fi-aesthetic-colorful-background-vector.jpg" alt="img" />
            </div>
        </div>
    );
};

export default ParticlesBackground;
