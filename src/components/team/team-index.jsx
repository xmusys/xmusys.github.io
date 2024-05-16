import * as React from "react"
import { useState, useContext } from "react"

import { LangContext } from "../../contexts/lang-context"

import Layout from "../common/layout"
import CatogaryMenu from "../common-page/catogary-menu"
import MemberCatogarys from "./member-catogarys"

const allLangCatogaries = {
    "en": ["All Members", "Faculty", "Postdoc", "PhD Students", "MS Students", "Alumni"],
    "zh": ["全部成员", "导师", "博士后", "博士生", "硕士生", "校友"]
}

/**
 * 团队页面 - 入口组件
 * 
 * @returns - 团队页面 - 入口组件
 */
export default function TeamIndex() {
    const lang = useContext(LangContext)
    const allCatogaries = allLangCatogaries[lang]
    const [currentCatogry, setCurrentCatogary] = useState(allCatogaries[0])

    return (
        <Layout>
            <div className="sm:px-8 py-9 space-y-2">
                <CatogaryMenu allCatogaries={allCatogaries} currentCatogry={currentCatogry} setCurrentCatogary={setCurrentCatogary}></CatogaryMenu>
                <MemberCatogarys allCatogaries={allCatogaries} currentCatogry={currentCatogry}></MemberCatogarys>
            </div>
        </Layout>
    )
}