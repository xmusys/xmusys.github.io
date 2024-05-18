import * as React from "react"
import { useState, useContext } from "react"

import { LangContext } from "../../contexts/lang-context"

import Layout from "../common/layout"
import CatogaryMenu from "../common-page/catogary-menu"
import PaperCatogarys from "./paper-catogarys"

const allLangCatogaries = {
    "en" : ["All Papers", "Conference Papers", "Journal Papers"],
    "zh" : ["全部论文", "会议论文", "期刊论文"]
}

/**
 * 论文页面 - 入口组件
 * 
 * @returns {React.ReactNode} - 论文页面 - 入口组件
 */
export default function PublicationsIndex() {
    const lang = useContext(LangContext)
    const allCatogaries = allLangCatogaries[lang]
    const [currentIndex, setCurrentIndex] = useState(0)

    return (
        <Layout>
            <div className="py-9">
                <CatogaryMenu allCatogaries={allCatogaries} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}></CatogaryMenu>
                <PaperCatogarys allCatogaries={allCatogaries} currentIndex={currentIndex}></PaperCatogarys>
            </div>
        </Layout>
    )
}