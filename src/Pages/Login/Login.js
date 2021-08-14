import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";

import Navbar from "./../../Componant/Navbar/Navbar"
import Footer from "./../../Componant/Footer/Footer"
import { Button } from '@material-ui/core';
import NotAvailable from '../NotAvailable/NotAvailable';

const Login = () => {
    const { user } = useParams()
    const [userIsStudent, setUserIsStudent] = useState(false)
    const [userIsEmployee, setUserIsEmployee] = useState(false)
    const [hiddenPass, setHiddenPass] = useState(true)
    useEffect(() => {
        setUserIsStudent((user === "student") ? true : false)
        setUserIsEmployee((user === "employee") ? true : false)
    }, [user])

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.id = data.id + "@sarh.cu.bd";
        alert(`
        email : ${data.id} 
        password : its Secret Bro.
        `)
        console.log(data);
    };
    const userLoginError = {
        reqError: `${(userIsStudent && "Student Id") || (userIsEmployee && "Phone No.")} required`,
        maxLenError: `${(userIsStudent && "Student Id") || (userIsEmployee && "Phone No.")} digit exceeded`,
        minLenError: `${(userIsStudent && "Student Id") || (userIsEmployee && "Phone No.")} must have ${(userIsStudent && "8") || (userIsEmployee && "11")} Digit`,
        onlyNumber: `Wrong ${(userIsStudent && "Id") || (userIsEmployee && "Phone No.")} Entered`,
        passReqError: `Password Required`,
        passMinLenError: `Password atleast have 6 digit`,
    }
    return (
        <div>
            <Navbar></Navbar>

            <div className="container">
                <div className="row">
                    <div className="loginPage w-100 ">
                        {
                            (userIsStudent || userIsEmployee) ?
                                <>
                                    <div className="loginBox col-md-5 ">
                                        <h4 className="card-title text-info text-center">{`${(userIsStudent && "Student") || (userIsEmployee && "Employee")} Login`}</h4>
                                        <hr  />
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <div className="form-group  my-4">
                                                <input type="text" className="form-control form-control-lgd p-3" placeholder={`${(userIsStudent && "Student Id") || (userIsEmployee && "Employee Phone No")}`} {...register("id", {
                                                    required: userLoginError.reqError,
                                                    maxLength: {
                                                        value: (userIsStudent && 8) || (userIsEmployee && 11),
                                                        message: userLoginError.maxLenError
                                                    },
                                                    minLength: {
                                                        value: (userIsStudent && 8) || (userIsEmployee && 11),
                                                        message: userLoginError.minLenError
                                                    },
                                                    pattern: {
                                                        value: /^(0|[0-9]*)$/, message: userLoginError.onlyNumber
                                                    }
                                                })}
                                                    autoComplete="off" />
                                                {errors.id && <span className="text-danger">*{errors.id?.message}</span>}
                                            </div>

                                            <div className="form-group passfield my-4">
                                                <input type={hiddenPass ? "password" : "text"} className="form-control " placeholder="User Password" {...register("pass", {
                                                    required: userLoginError.passReqError,
                                                    minLength: {
                                                        value: 6,
                                                        message: userLoginError.passMinLenError
                                                    }
                                                })}
                                                    autoComplete="off"
                                                    data-aria="password"
                                                    />
                                                    <span className="showHidePass" onClick={() => setHiddenPass(!hiddenPass)}>{hiddenPass ? "Show" : "Hide"}</span>
                                                {errors.pass && <span className="text-danger">*{errors.pass?.message}</span>}
                                            </div>

                                            <Button className="btn-block" type="submit" color="primary" variant="contained" >Login</Button>
                                        </form>
                                    </div>
                                </>
                                :
                                <NotAvailable message={"Wrong Path. Please Select the right path"} errorCode={404}></NotAvailable>
                        }

                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;