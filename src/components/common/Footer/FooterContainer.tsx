import React, { useEffect, useState } from "react";
import Footer from "./Footer";

const FooterContainer = () => {
    const [region, setRegion] = useState<string>("");

    useEffect(() => {
        const lang = navigator.language;
        if (lang.startsWith("ja")) {
            setRegion("Japan");
        } else if (lang.startsWith("en")) {
            setRegion("USA");
        } else {
            setRegion("Global");
        }
    }, []);

    return <Footer region={region} />;
};

export default FooterContainer;
