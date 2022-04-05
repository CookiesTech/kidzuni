import React from "react";

import { useState, useEffect, } from 'react';

export default function Marks() {

    const [time, setTime] = useState({
        seconds: 0,
        minutes: 0,
        hours: 0,
    });

    useEffect(() => {
        let isCancelled = false;

        const advanceTime = () => {
            setTimeout(() => {
                let nSeconds = time.seconds;
                let nMinutes = time.minutes;
                let nHours = time.hours;

                nSeconds++;

                if (nSeconds > 59) {
                    nMinutes++;
                    nSeconds = 0;
                }
                if (nMinutes > 59) {
                    nHours++;
                    nMinutes = 0;
                }
                if (nHours > 24) {
                    nHours = 0;
                }

                !isCancelled && setTime({ seconds: nSeconds, minutes: nMinutes, hours: nHours });
            }, 1000);
        };
        advanceTime();

        return () => {
            //final time:

            isCancelled = true;
        };
    }, [time]);



    return (
        <div>

            <div className="row quiz-title">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 game-details-container">
                    <div className="count-time">Time Spent :
                        <p>
                            {`
                            ${time.hours < 10 ? '0' + time.hours : time.hours} :
                            ${time.minutes < 10 ? '0' + time.minutes : time.minutes} :
                            ${time.seconds < 10 ? '0' + time.seconds : time.seconds}
                            `}
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}
