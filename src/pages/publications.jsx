import * as React from "react"

import { LangContext } from "../contexts/lang-context"

import Seo from "../components/common/seo"
import PublicationsIndex from "../components/publications/publications-index"


export default function PublicationsEnPage() {
    return (
        <LangContext.Provider value="en">
            <PublicationsIndex></PublicationsIndex>
        </LangContext.Provider>
    )
}

export const Head = () => <Seo title="Publications" />