import { useParams } from 'react-router-dom';
import React from 'react';
import axios from 'axios';

export default function VerifyEmail() {
    const  { iduser }  = useParams();

    const submitNewClient = (e) => {
        e.preventDefault();
        axios.get(`http://localhost:5050/verifyU/${iduser}`) // Send userid directly
            .then((res) => {
                console.log(res.data[0]);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="container">
            <form method="post" onSubmit={submitNewClient}>
                <h1>Verify Email</h1>
                <p>Click the button below to send a verification email.</p>
                <button type="submit" className="btn btn-outline-success">Send Email</button>
            </form>
        </div>
    );
}
