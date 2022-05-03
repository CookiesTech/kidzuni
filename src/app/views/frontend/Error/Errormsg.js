import React from "react";
import { Link } from "react-router-dom";
import { Button } from '@mui/material'

export default function ErrorMessageShow() {
    return (
        <div>
            <div className="col-lg-12 col-md-12 col-sm-12 error-msg-show">
                <div className="error alert">
                    <div className="alert-body">
                        <h4>Please Login to Access</h4>
                        <Link className="" to="/user/login">
                            <Button
                                type="submit"
                                color="primary"
                                variant="contained"
                                sx={{ textTransform: 'capitalize' }}
                            >
                                Login
                            </Button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}