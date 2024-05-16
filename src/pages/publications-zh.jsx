import * as React from "react"

import { LangContext } from "../contexts/lang-context"

import Seo from "../components/common/seo"
import PublicationsIndex from "../components/publications/publications-index"


export default function PublicationsZhPage() {
    return (
        <LangContext.Provider value="zh">
            <PublicationsIndex></PublicationsIndex>
        </LangContext.Provider>
    )
}

export const Head = () => <Seo title="论文发表" />