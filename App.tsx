import React from 'react';

const App = () => {
    const params = new URLSearchParams(window.location.search);
    const recipientName = params.get('name') || 'Friend';
    const recipientAge = params.get('age') || 'unknown';
    const sender = params.get('sender') || 'Your friend';

    return (
        <div>
            <h1>Happy Birthday, {recipientName}!</h1>
            <p>You are now {recipientAge} years old!</p>
            <p>Best wishes from {sender}!</p>
            <img src="link_to_public_photo.jpg" alt="Birthday Celebration" />
        </div>
    );
};

export default App;