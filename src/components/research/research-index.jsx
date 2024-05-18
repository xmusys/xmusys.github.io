import * as React from "react"
import { useContext } from "react"

import { LangContext } from "../../contexts/lang-context"

import Layout from "../common/layout"
import ResearchEnMdx from "../../assets/data/research/research_en.mdx"
import ResearchZhMdx from "../../assets/data/research/research_zh.mdx"

/**
 * 研究领域页面入口
 * 
 * @returns {React.ReactNode}
 */
export default function ResearchIndex() {
    const lang = useContext(LangContext)

    return (
        <Layout>
            <div className="
                py-8 text-sm whitespace-pre leading-3 text-wrap
                [&_h1]:text-gray-900 [&_h1]:text-3xl [&_h1]:leading-loose [&_h1]:tracking-wide
                [&_h2]:text-gray-900 [&_h2]:text-xl [&_h2]:font-semibold
                [&_p]:text-gray-800 [&_p]:leading-6
                [&_strong]:text-gray-900 [&_strong]:font-semibold
                [&_hr]:my-4
                [&_ul]:list-disc [&_ul]:-mb-4
                [&_li]:ml-8
                [&_a]:text-xmu-blue-70 hover:[&_a]:underline
            ">
                {lang === "en" ? <ResearchEnMdx/> : <ResearchZhMdx/>}
            </div>
        </Layout>
    )
}
