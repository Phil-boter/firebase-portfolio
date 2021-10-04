import React, { Component } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, IndicatorIcon } from "@material-ui/core";
import MinimizeIcon from "@material-ui/icons//Minimize";

import "./style.css";

function Item({ item }) {
    const handleClick = () => {
        console.log("click");
    };
    return (
        <Paper className="paper">
            <div>
                <figure>
                    <img src={item.image} alt="" />

                    <div className="paper-inner-container">
                        <div className="paper-section">
                            <h2
                                className="paper-title"
                                style={{ color: "white" }}
                            >
                                {item.title}
                            </h2>
                            <section>
                                <p>Lorem ipsu,m</p>
                            </section>

                            <button
                                className="paper-button"
                                style={{
                                    color: "white",
                                    fontFamily: "Montserrat",
                                    zIndex: 100,
                                }}
                                onClick={() => handleClick()}
                            >
                                <img
                                    className="paper-arrow"
                                    src="/assets/arrow.png"
                                    alt="arrow pointing to the right"
                                />
                            </button>
                        </div>
                    </div>
                </figure>
            </div>
        </Paper>
    );
}

export default function Mainheader({ projects }) {
    return (
        <div className="carousel-container">
            <Carousel
                animation={"slide"}
                interval={6000}
                IndicatorIcon={<MinimizeIcon />}
                indicatorIconButtonProps={{
                    style: {
                        padding: "1px", // 1
                        color: "white", // 3
                    },
                }}
                activeIndicatorIconButtonProps={{
                    style: {
                        padding: "1px", // 1
                        color: "black", // 3
                    },
                }}
                // indicatorContainerProps={{
                //     style: {
                //         textAlign: "left", // 4
                //     },
                // }}
            >
                {projects.projectsData.map((item, i) => (
                    <Item key={i} item={item} />
                ))}
            </Carousel>
        </div>
    );
}
