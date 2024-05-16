import * as React from "react"

import { LangContext } from "../contexts/lang-context"

import Seo from "../components/common/seo"
import ResearchIndex from "../components/research/research-index"

export default function ResearchZhPage() {
    return (
        <LangContext.Provider value="zh">
            <ResearchIndex></ResearchIndex>
        </LangContext.Provider>
    )
}

export const Head = () => <Seo title="研究领域" />