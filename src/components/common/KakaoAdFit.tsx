import { useEffect, useRef } from "react";

function KakaoAdFit() {
    const adUnit = import.meta.env.VITE_AD_UNIT
    const scriptElementWrapper = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        const script = document.createElement("script");
        script.setAttribute("src", "https://t1.daumcdn.net/kas/static/ba.min.js");
        scriptElementWrapper.current?.appendChild(script);
    }, [])

    return <div ref={scriptElementWrapper}>
        <ins className="kakao_ad_area" style={{ display: "none" }}
            data-ad-unit={adUnit}
            data-ad-width={320}
            data-ad-height={50}></ins>
    </div>
}

export default KakaoAdFit;