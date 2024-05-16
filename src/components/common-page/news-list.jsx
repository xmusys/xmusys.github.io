import * as React from "react"
import * as runtime from 'react/jsx-runtime'
import { useContext } from "react"
import { Link } from "gatsby"
import { evaluateSync } from '@mdx-js/mdx'
import { useStaticQuery, graphql } from "gatsby"

import { LangContext } from "../../contexts/lang-context"


/**
 * 生成新闻条目组件
 * 
 * @param {Object} props
 * @param {string} props.date - 日期
 * @param {string} props.content - 新闻内容，使用 Markdown 格式
 * @returns {React.ReactNode} 新闻条目组件
 */
function News({ date, content }) {
    const {default: Content} =  evaluateSync(content, runtime)

    return (
        <li className="mb-4 flex flex-col text-sm">
            <div className="text-gray-900 font-semibold">
                { date }
            </div>
            <div className="text-gray-700">
                <Content></Content>
            </div>
        </li>
    )
}

/**
 * 生成新闻列表组件
 * 
 * @param {Object} props
 * @param {Number} props.count - 要显示的新闻数量，当为 0 时显示全部
 * @returns {React.ReactNode} 新闻列表组件
 */

export default function NewsList({ count }) {
    const lang = useContext(LangContext)

    let newsDatas = useStaticQuery(graphql`
        query {
            allNewsEnJson {
                edges {
                    node {
                        id
                        date
                        content
                    }
                }
            }
            allNewsZhJson {
                edges {
                    node {
                        id
                        date
                        content
                    }
                }
            }
        }
    `)
    newsDatas = lang === "en" ? newsDatas.allNewsEnJson.edges.map(({ node }) => node) : newsDatas.allNewsZhJson.edges.map(({ node }) => node)

    if (count !== 0) {
        newsDatas = newsDatas.slice(0, count)
    } else {
        return (
            <div className="py-10">
                <div className="text-3xl mb-10 tracking-wide">
                    { lang === "en" ?  "News" : "新闻"}
                </div>
                <ul>
                    {newsDatas.map(({ date, content, id }) => (
                        <News key={id} date={date} content={content}></News>
                    ))}
                </ul>
            </div>
        )
    }

    return (
        <div className="ml:w-1/3 my-6 px-8 bg-slate-50 rounded ring-1">
            <div className="my-6 text-lg font-semibold tracking-wide">
                { lang === "en" ?  "News" : "新闻" }
            </div>
            <ul>
                {newsDatas.map(({ date, content, id }) => (
                    <News key={id} date={date} content={content}></News>
                ))}
            </ul>
            <div className="text-sm tracking-wide my-6">
                <Link to="/news">
                    { lang === "en" ?  "See all news" : "更多新闻"}
                </Link>
            </div>
        </div>
    )
}