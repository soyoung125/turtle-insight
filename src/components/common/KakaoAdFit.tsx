import { useEffect, useRef } from "react";

interface Adfit {
    display: (unit: string) => void;
    destroy: (unit: string) => void;
    refresh: (unit: string) => void;
}

declare global {
    interface Window {
        adfit?: Adfit;
    }
}

function KakaoAdFit() {
    const adUnit = import.meta.env.VITE_AD_UNIT
    const scriptElementWrapper = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        const script = document.createElement("script");
        script.setAttribute("src", "https://t1.daumcdn.net/kas/static/ba.min.js");
        scriptElementWrapper.current?.appendChild(script);

        return () => {
            const globalAdfit = "adfit" in window ? window.adfit : null;
            if (globalAdfit) globalAdfit.destroy(adUnit);
        };
    }, [])

    return <div ref={scriptElementWrapper}>
        <ins className="kakao_ad_area" style={{ display: "none" }}
            data-ad-unit={adUnit}
            data-ad-width={320}
            data-ad-height={100}></ins>
    </div>
}

export default KakaoAdFit;