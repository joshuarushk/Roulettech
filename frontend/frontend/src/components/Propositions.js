import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Propositions = () => {
    const [propositions, setPropositions] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/propositions/')
            .then(response => setPropositions(response.data.propositions))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h2>Propositions</h2>
            <ul>
                {propositions.map((proposition, index) => (
                    <li key={index}>{proposition}</li>
                ))}
            </ul>
        </div>
    );
};

export default Propositions;
