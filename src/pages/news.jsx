import * as React from "react"

import { LangContext } from "../contexts/lang-context"

import Seo from "../components/common/seo"
import NewsIndex from "../components/news/news-index"


export default function NewsEnPage() {
    return (
        <LangContext.Provider value="en">
            <NewsIndex />
        </LangContext.Provider>
    )
}

export const Head = () => <Seo title="News" />
