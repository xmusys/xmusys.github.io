import * as React from "react"
import { useState } from "react"

import Seo from '../components/seo'
import Layout from "../components/layout"
import CatogaryMenu from "../components/catogary-menu"
import PaperCatogarys from "../components/paper-catogarys"


const allGroups = ["All Papers", "Conference Papers", "Journal Papers"]

export default function PublicationsPage() {
    const [currentCatogry, setCurrentCatogary] = useState(allGroups[0])

    return (
        <Layout>
            <div className="py-9">
                <CatogaryMenu allCatogaries={allGroups} currentCatogry={currentCatogry} setCurrentCatogary={setCurrentCatogary}></CatogaryMenu>
                <PaperCatogarys allCatogaries={allGroups} currentCatogry={currentCatogry}></PaperCatogarys>
            </div>
        </Layout>
    )
}

export const Head = () => <Seo title="Publications" />