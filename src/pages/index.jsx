import * as React from "react"

import Seo from '../components/seo'
import Layout from "../components/layout"

import HomeIntroduction from "../components/home/home-intro"
import NewsList from "../components/home/news-list"

export default function HomePage() {
    return (
        <Layout>
            <div className="flex flex-col ml:flex-row gap-8 [&_a]:text-xmu-blue-70 hover:[&_a]:underline">
                <HomeIntroduction></HomeIntroduction>
                <NewsList length={5}></NewsList>
            </div>
        </Layout>
    )
}

export const Head = () => <Seo title="Home" />
