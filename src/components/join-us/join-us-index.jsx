import * as React from "react"
import { useContext } from "react"

import { LangContext } from "../../contexts/lang-context"

import Layout from "../common/layout"
import EmailIcon from "../icons/email-icon"
import PhoneIcon from "../icons/phone-icon"
import PositionIcon from "../icons/position-icon"
import JoinUsEnMdx from "../../assets/data/join_us/join_us_en.mdx"
import JoinUsZhMdx from "../../assets/data/join_us/join_us_zh.mdx"

/**
 * 加入我们页面入口
 * 
 * @returns {React.ReactNode}
 */
export default function JoinUsIndex() {
    const lang = useContext(LangContext)
    const components = { EmailIcon, PhoneIcon, PositionIcon }
    
    return (
        <Layout>
            <div className="py-8 text-lg whitespace-pre leading-4 text-wrap
            [&_h1]:text-gray-900 [&_h1]:text-3xl [&_h1]:leading-relaxed [&_h1]:tracking-wide
            [&_p]:text-gray-800 [&_p]:leading-7
            [&_strong]:text-gray-900 [&_strong]:font-semibold
            [&_hr]:my-4 
            [&_svg]:mx-2 md:[&_svg]:mx-4
            [&_li]:list-disc [&_li]:ml-4 [&_li]:leading-6 md:[&_li]:ml-8
            [&_a]:text-xmu-blue-70 hover:[&_a]:underline">
                { lang === "en" ? <JoinUsEnMdx components={components} /> : <JoinUsZhMdx components={components} />}
            </div>
        </Layout>
    )
}