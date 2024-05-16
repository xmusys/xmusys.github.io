import * as React from "react"

import { LangContext } from "../contexts/lang-context"

import Seo from "../components/common/seo"
import JoinUsIndex from "../components/join-us/join-us-index"


export default function JoinUsZhPage() {
    return (
        <LangContext.Provider value="zh">
            <JoinUsIndex />
        </LangContext.Provider>
    )
}

export const Head = () => <Seo title="加入我们" />
