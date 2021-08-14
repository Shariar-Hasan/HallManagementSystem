import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";

import Navbar from "./../../Componant/Navbar/Navbar"
import Footer from "./../../Componant/Footer/Footer"
import { Button } from '@material-ui/core';
import NotAvailable from '../NotAvailable/NotAvailable';

const CPanelLogin = () => {
    const [hiddenPass, setHiddenPass] = useState(true)

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        if (!data.email.includes("@")) {
            data.email = data.email + "@sarh.cu.bd";
        }
        alert(`
        email : ${data.email} 
        password : its Secret Bro.
        `)
        console.log(data);
    };
    const userLoginError = {
        reqError: `Email/Username required`,
        passReqError: `Password Required`,
        passMinLenError: `Password atleast have 6 digit`,
    }
    return (
        <div>
            <Navbar></Navbar>

            <div className="container">
                <div className="row">
                    <div className="loginPage w-100 ">
                        <div className="loginBox col-md-5 ">
                            <h4 className="card-title text-info text-center">Admin Login</h4>
                            <hr />
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group  my-4">
                                    <input type="text" className="form-control  p-3" placeholder="Admin Username/Email" {...register("email", {
                                        required: userLoginError.reqError,
                                    })}
                                        autoComplete="off" />
                                    {errors.email && <span className="text-danger">*{errors.email?.message}</span>}
                                </div>

                                <div className="form-group my-4">
                                    <div className="passfield">
                                        <input type={hiddenPass ? "password" : "text"} className="form-control " placeholder="Admin Password" {...register("pass", {
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
                                    </div>

                                    {errors.pass && <span className="text-danger">*{errors.pass?.message}</span>}
                                </div>

                                <Button className="btn-block" type="submit" color="primary" variant="contained" >Login</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default CPanelLogin;