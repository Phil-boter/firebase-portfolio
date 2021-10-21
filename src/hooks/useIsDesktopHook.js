import { useState } from "react";

export default function useIsDesktopHook() {
    const [desktop, setIsDesktop] = useState(true);

    const renderImage = (dimensions) => {
        if (dimensions.width > 840) {
            setIsDesktop(true);
        } else {
            setIsDesktop(false);
        }
    };

    return [desktop, renderImage];
}
