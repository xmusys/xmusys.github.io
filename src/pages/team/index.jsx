import * as React from "react"
import { useState } from "react"

import Seo from '../../components/seo'
import Layout from "../../components/layout"
import CatogaryMenu from "../../components/catogary-menu"
import MemberCatogarys from "../../components/member-catogarys"

const allCatogaries = ["All Members", "Faculty", "Postdoc", "PhD Students", "MS Students", "Alumni"]

export default function TeamPage() {
    const [currentCatogry, setCurrentCatogary] = useState("All Members")

    return (
        <Layout>
            <div className="py-9 space-y-20">
                <CatogaryMenu allCatogaries={allCatogaries} currentCatogry={currentCatogry} setCurrentCatogary={setCurrentCatogary}></CatogaryMenu>
                <MemberCatogarys allCatogaries={allCatogaries} currentCatogry={currentCatogry}></MemberCatogarys>
            </div>
        </Layout>
    )
}

export const Head = () => <Seo title="Team" />