import React from 'react';
import Clock from 'react-live-clock';

export default function clock() {
    return (
        <div className="clock-wrapper">
            <Clock format={'HH:mm:ss'} ticking={true} />
        </div>
    )
}
