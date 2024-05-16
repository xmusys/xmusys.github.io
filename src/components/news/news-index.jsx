import * as React from "react"

import Layout from "../common/layout"
import NewsList from "../common-page/news-list"

/**
 * 新闻页面 - 入口组件
 * 
 * @returns {React.ReactNode} 新闻页面 - 入口组件
 */
export default function NewsIndex() {
    return (
        <Layout>
            <div className="[&_a]:text-xmu-blue-70 hover:[&_a]:underline">
                <NewsList count={0}></NewsList>
            </div>
        </Layout>
    )
}