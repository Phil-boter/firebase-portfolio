import { useState } from "react";

export default function useIsDesktopHook() {
    const [desktop, setIsDesktop] = useState(true);

    const renderImage = (dimensions) => {
        if (dimensions.width > 650) {
            console.log("desktop");
            setIsDesktop(true);
        } else {
            console.log("mobile");
            setIsDesktop(false);
        }
    };

    return [desktop, renderImage];
}
