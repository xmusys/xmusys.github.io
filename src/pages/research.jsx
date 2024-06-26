import * as React from "react"

import { LangContext } from "../contexts/lang-context"

import Seo from "../components/common/seo"
import ResearchIndex from "../components/research/research-index"

export default function ResearchEnPage() {
    return (
        <LangContext.Provider value="en">
            <ResearchIndex></ResearchIndex>
        </LangContext.Provider>
    )
}

export const Head = () => <Seo title="Research" />