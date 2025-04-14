import React from 'react';
import '../styles/stars.scss';

export default function Stars({note}) {
    const percentage = ((note / 5) * 100);

    return (
        <div className="stars-out">
            <div className="stars-in" style={{ width: `${percentage}%` }}></div>
        </div>
    );
}