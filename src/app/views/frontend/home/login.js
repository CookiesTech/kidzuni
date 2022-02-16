import React from "react";
import "../assets/css/style.css"
import {Link} from "react-router-dom"

export default function Login() {
    return (
        <div>
            <button className="btn btn-success home-signin" data-toggle="modal" data-target="#exampleModalCenter">Sign In</button>
            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div className='modal-content'>
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">Sign in to Kidzuni</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                       
                            <div class="login-area">
                                <div class="tab-content">
                                        <div role="tabpanel" class="tab-pane active form-are" id="login">
                                            <form action="">
                                                <div class="form-bor">
                                                    <div class="login-details">
                                                        <label for="">Username</label>
                                                        <li className="nav nav-tabs" role="tablist">
                                                            <a href="#username" aria-controls="username" role="tab" data-toggle="tab">Forgot Username?</a>
                                                        </li>
                                                        <input type="text" name="username" />
                                                    </div>

                                                    <div class="login-details">
                                                        <label for="">Password</label>
                                                        <li className="nav nav-tabs" role="tablist">
                                                            <a href="#password" aria-controls="password" role="tab" data-toggle="tab">Forgot Password?</a>
                                                        </li>
                                                        <input type="password" name="password" />
                                                    </div>
                                                    <div className='register-part'>
                                                        <strong> Not a Member yet?</strong>   
                                                        <Link to="/membership"><a className='nav-link'>sign in{'>'}</a></Link>
                                                    </div>
                                                   
                                                </div>
                                            </form>
                                        </div>

                                        <div role="tabpanel" class="tab-pane" id="username">
                                            <form action="">
                                                <div class="form-bor">
                                                    <h5>Request Username</h5>
                                                    <div class="form-input-group">
                                                        <label for="">Email</label>
                                                        <input type="text" name="email" placeholder="Email" />
                                                    </div>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                    <button type="button" class="btn btn-primary">Save changes</button>
                                                </div>
                                            </form>  
                                        </div>

                                        <div role="tabpanel" class="tab-pane" id="password">
                                            <form action="">
                                                <div class="form-bor">
                                                <h5>Reset Your Password</h5>
                                                    <div class="form-input-group">
                                                        <label for="">UserName</label>
                                                        <input type="text" name="name" placeholder="Username" />
                                                    </div>
                                                    
                                                    <div class="form-input-group">
                                                        <label for="">Email</label>
                                                        <input type="text" name="email" placeholder="Email" />
                                                    </div>
                                                    <div class="">
                                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                        <button type="button" class="btn btn-primary">Save changes</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                            </div>


                    </div>
                </div>
            </div>
        </div>
    )
}