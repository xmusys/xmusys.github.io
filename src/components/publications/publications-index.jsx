import * as React from "react"
import { useState, useContext } from "react"

import { LangContext } from "../../contexts/lang-context"

import Layout from "../common/layout"
import CatogaryMenu from "../common-page/catogary-menu"
import PaperCatogarys from "./paper-catogarys"

const allLangGatogaries = {
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
    const allGatogaries = allLangGatogaries[lang]
    const [currentCatogry, setCurrentCatogary] = useState(allGatogaries[0])

    return (
        <Layout>
            <div className="py-9">
                <CatogaryMenu allCatogaries={allGatogaries} currentCatogry={currentCatogry} setCurrentCatogary={setCurrentCatogary}></CatogaryMenu>
                <PaperCatogarys allCatogaries={allGatogaries} currentCatogry={currentCatogry}></PaperCatogarys>
            </div>
        </Layout>
    )
}