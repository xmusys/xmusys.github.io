import * as React from "react"

import Layout from "../common/layout"
import NewsList from "../common-page/news-list"
import HomeIntro from "./home-intro"


/**
 * 首页页面入口
 * 
 * @returns {React.ReactNode}
 */
export default function HomeIndex() {
    return (
        <Layout>
            <div className="flex flex-col ml:flex-row gap-8 [&_a]:text-xmu-blue-70 hover:[&_a]:underline">
                <HomeIntro></HomeIntro>
                <NewsList count={6}></NewsList>
            </div>
        </Layout>
    )
}
