import * as React from "react"

import { LangContext } from "../contexts/lang-context"

import Seo from "../components/common/seo"
import TeamIndex from "../components/team/team-index"

export default function TeamZhPage() {
    return (
        <LangContext.Provider value="zh">
            <TeamIndex></TeamIndex>
        </LangContext.Provider>
    )
}

export const Head = () => <Seo title="团队成员" />