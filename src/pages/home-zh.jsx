import * as React from "react"

import { LangContext } from "../contexts/lang-context"
import Seo from "../components/common/seo"
import HomeIndex from "../components/home/home-index"


export default function HomeZhPage() {
    return (
        <LangContext.Provider value="zh">
            <HomeIndex></HomeIndex>
        </LangContext.Provider>
    )
}

export const Head = () => <Seo title="首页" />
