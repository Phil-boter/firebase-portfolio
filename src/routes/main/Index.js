import { useContext, useEffect, useState } from "react";

import EmailComponent from "../../components/email/Index";
import { DataContext } from "../../context/DataProvider";

import "./style.css";

export default function Main() {
    const projects = useContext(DataContext);

    return (
        <>
            <header>
                {/* <!-- First container --> */}
                <div className="container container_solid">
                    <div className="title_wrapper header-text">
                        <h1 className="scrollHeader">Philipp Dawid</h1>
                    </div>
                </div>

                {/* <!-- Second container --> */}
                <div className="container container_image" aria-hidden="true">
                    <div className="title_wrapper header-text">
                        <h1 className="scrollPortfolio">
                            Junior&nbsp;&nbsp;Full stack&nbsp;&nbsp;Web
                            Developer
                        </h1>
                    </div>
                </div>
            </header>
            <section
                className="text main-section"
                data-index="2"
                data-page="section"
            ></section>
            <EmailComponent />
        </>
    );
}
