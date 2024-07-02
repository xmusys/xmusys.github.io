import * as React from "react"
import { useContext } from "react"

import { LangContext } from "../../contexts/lang-context"

import HomeEnMdx from "../../assets/data/home/home_en.mdx"
import HomeZhMdx from "../../assets/data/home/home_zh.mdx"
import HomeCarousel from "./home-carousel"

/**
 * 首页介绍部分
 * 
 * @returns {React.ReactNode}
 */
export default function HomeIntro() {
    const lang = useContext(LangContext)
    
    return (
        <div className={`ml:w-2/3 pt-8 flex flex-col gap-3 leading-${lang === "en" ? "7" : "8"}
                        [&_h1]:text-gray-900 [&_h1]:text-[2rem] [&_h1]:font-[600] [&_h1]:leading-8
                        [&_p]:text-gray-800
                        [&_strong]:text-gray-900 [&_strong]:font-semibold
                        `}>
            {lang === "en" ? <HomeEnMdx components={{HomeCarousel}}></HomeEnMdx> : <HomeZhMdx components={{HomeCarousel}}></HomeZhMdx>}
        </div>
    )
}