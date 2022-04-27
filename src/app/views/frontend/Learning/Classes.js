import React, { useState, useEffect } from "react";
import SubjectService from "../Services/SubjectService";
import { config } from "app/config";
export default function StandardClass() {
    let subjectservice = new SubjectService(config.baseURL);

    const [standard = [], setStandard] = useState();

    useEffect(() => {
        standardDtata();
    }, []);

    const standardDtata = async () => {    //standard classes

        try {
            let userData = JSON.parse(localStorage?.getItem?.('user-info'));
            let postData = { country_code: userData?.country_code };
            const data = await subjectservice.standardDtata(postData);
            setStandard(data.data.data);
        }
        catch (e) {
            console.log(e);
        }
    }

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