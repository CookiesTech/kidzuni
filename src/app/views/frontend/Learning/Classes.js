import React, { useState, useEffect } from "react";
export default function StandardClass(props) {

    const [standard = [], setStandard] = useState();

    useEffect(() => {
        setStandard(props?.data)
    }, [props.data, standard]);



    return (
        <div className="container">
            <div className="row  sub-bg-color">
                <div className="class-year">
                    {
                        standard?.map((standradname, i) => (
                            <span><a href="">{standradname.standard_name} | </a></span>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}