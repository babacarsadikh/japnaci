// pages/espaceperso/index.js

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const EspacePersoPage = ({ serverRenderedData }) => {
    const [userData, setUserData] = useState(serverRenderedData);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const storedUserData = localStorage.getItem('userData');

        if (storedUserData) {
            setUserData(JSON.parse(storedUserData));
            setLoading(false);
        } else {
            setLoading(false);
        }
    }, []);

    const handleLoginRedirect = () => {
        router.push('/login'); // Replace '/login' with the actual path to your login page
    };

    return (
        <div>
            <h1>Mon Espace Personnel</h1>
            {loading ? (
                <p>Loading...</p>
            ) : userData ? (
                <div>
                    <p>Bienvenue, {userData.username}!</p>
                    {/* Add other information about the user's personal space */}
                </div>
            ) : (
                <div>
                    <p>Veuillez vous connecter pour accéder à votre espace personnel.</p>
                    <button onClick={handleLoginRedirect}>Se connecter</button>
                </div>
            )}
        </div>
    );
};

export default EspacePersoPage;

// Add this function to get server-rendered data
export async function getServerSideProps() {
    // Fetch server-rendered data here
    // This could be an API call or any other data-fetching logic
    const serverRenderedData = { username: 'JohnDoe' };

    return {
        props: {
            serverRenderedData,
        },
    };
}
