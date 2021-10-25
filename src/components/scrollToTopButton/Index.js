import { useEffect } from "react";

import "./style.css";

export default function ScrollToTopButton({ showScroll, setShowScroll }) {
    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true);
        } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false);
        }
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        window.addEventListener("scroll", checkScrollTop);
        return function cleanup() {
            window.removeEventListener("scroll", checkScrollTop);
        };
    });

    return (
        <>
            {showScroll && (
                <div className="scroll-top-button-container">
                    <div className="scroll-top-button" onClick={scrollTop}>
                        <img
                            className="arrow scroll-to-top"
                            src="/assets/arrow1.png"
                            alt="arrow up"
                        />
                    </div>
                </div>
            )}
        </>
    );
}
