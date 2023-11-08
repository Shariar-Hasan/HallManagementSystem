import React, { } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getData } from '../../Functions/autoFunctions';

const Counter = () => {
    const [oneTimeRun, setOneTimeRun] = useState(true)
    const [counterData, setCounterData] = useState({})
    useEffect(() => {
        getData(`/getCounterData`)
        .then(res => res.json())
        .then(data => {
            setCounterData(data);
        })
        .catch(err => {
            console.log(err)
        })
    } , [])

    window.addEventListener('scroll', () => {
        const speed = 400;
        const counterParent = document.getElementById("counter");
        let topSide = Infinity;
        if (counterParent) {
            topSide = counterParent.getBoundingClientRect().top;
        }
        const screenSize = window.innerHeight;

        if ((topSide < (screenSize / 2)) && oneTimeRun) {
            setOneTimeRun(false)
            document.querySelectorAll(".counterNumber").forEach(counter => {
                const updateCount = () => {
                    const end = +counter.getAttribute('data-counter');
                    const start = +counter.innerText;
                    const inc = Math.ceil(end / speed);

                    if (start < end) {
                        counter.innerText = start + inc;

                        setTimeout(updateCount, 100)
                    }
                    else {
                        counter.innerText = end;
                    }
                }
                updateCount()
            });
        }

    })

    return (
        <div className="col-12 py-5" id="counter">
            <div className="card shadow">
                <div className="card-header bg-muted content-center">
                    <h3 className="text-center text-info">About Hall</h3>
                </div>
                <div className="card-body row text-center">
                    <div className="col">
                        <i className="fas counter-icon fa-hotel fa-2x"></i>
                        <div className="text-value-xl counterNumber h5" data-counter={counterData?.numberOfRoom}>0</div>
                        <div className="text-uppercase text-muted small">Rooms</div>
                    </div>
                    <div className="col">
                        <i className="fas counter-icon fa-user-graduate fa-2x"></i>
                        <div className="text-value-xl counterNumber h5" data-counter={counterData?.numberOfStudents}>0</div>
                        <div className="text-uppercase text-muted small">Students</div>
                    </div>
                    <div className="col">
                        <i className="fas counter-icon fa-people-carry fa-2x"></i>
                        <div className="text-value-xl counterNumber h5" data-counter={counterData?.numberOfEmployee}>0</div>
                        <div className="text-uppercase text-muted small">Employees</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;