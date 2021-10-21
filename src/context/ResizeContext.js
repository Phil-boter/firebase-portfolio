import { useEffect, useState, createContext } from "react";

export const ResizeContext = createContext();

function debounce(fn, ms) {
    let timer;
    return (cleanUp) => {
        clearTimeout(timer);
        timer = setTimeout((_) => {
            timer = null;
            fn.apply(this, arguments);
        }, ms);
    };
}

export function ResizeProvider({ children }) {
    const [dimensions, setDimensions] = useState({
        height: window.innerHeight,
        width: window.innerWidth,
    });

    console.log("dim in provider", dimensions);

    useEffect(() => {
        const debouncedHandleResize = debounce(function handleResize() {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth,
            });
        }, 500);

        window.addEventListener("resize", debouncedHandleResize);

        return function cleanUp() {
            window.removeEventListener("resize", debouncedHandleResize);
        };
    }, [dimensions, setDimensions]);

    const value = { dimensions };

    return (
        <ResizeContext.Provider value={value}>
            {children}
        </ResizeContext.Provider>
    );
}
