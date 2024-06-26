import * as React from "react"

import { LangContext } from "../contexts/lang-context"

import Seo from "../components/common/seo"
import HomeIndex from "../components/home/home-index"


export default function HomeEnPage() {
    return (
        <LangContext.Provider value="en">
            <HomeIndex></HomeIndex>
        </LangContext.Provider>
    )
}

export const Head = () => <Seo title="Home" />
