import * as React from "react"
import Seo from '../components/seo'
import Layout from "../components/layout"
import NewsList from "../components/home/news-list"


export default function NewsPage() {
    return (
        <Layout>
            <div className="[&_a]:text-xmu-blue-70 hover:[&_a]:underline">
                <NewsList isFull={true}></NewsList>
            </div>
        </Layout>
    )
}

export const Head = () => <Seo title="News" />
