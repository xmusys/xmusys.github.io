import * as React from "react"
import { useState, useContext } from "react"

import { LangContext } from "../../contexts/lang-context"

import Layout from "../common/layout"
import CatogaryMenu from "../common-page/catogary-menu"
import MemberCatogarys from "./member-catogarys"

const allLangCatogaries = {
    "en": ["All Members", "Faculty", "Postdoc", "PhD Student", "MS Student", "Alumni"],
    "zh": ["全部成员", "导师", "博士后", "博士生", "硕士生", "校友"]
}

/**
 * 团队页面入口
 * 
 * @returns - 团队页面入口
 */
export default function TeamIndex() {
    const lang = useContext(LangContext)
    const allCatogaries = allLangCatogaries[lang]
    const [currentIndex, setCurrentIndex] = useState(0)

    return (
        <Layout>
            <div className="sm:px-8 py-9 space-y-2">
                <CatogaryMenu allCatogaries={allCatogaries} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}></CatogaryMenu>
                <MemberCatogarys allCatogaries={allCatogaries} currentIndex={currentIndex}></MemberCatogarys>
            </div>
        </Layout>
    )
}