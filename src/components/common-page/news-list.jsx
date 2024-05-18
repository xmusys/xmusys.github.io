import * as React from "react"
import { useContext } from "react"
import { Link } from "gatsby"

import useNewsData from "../../hooks/useNewsData"
import mdxToJsx from "../../utils/mdx-to-jsx"
import { LangContext } from "../../contexts/lang-context"


/**
 * 新闻列表项
 * 
 * @param {Object} props
 * @param {string} props.date - 日期
 * @param {string} props.content - 新闻内容，使用 Markdown 格式
 * @returns {React.ReactNode}
 */
function News({ date, content }) {
    const Content =  mdxToJsx(content)

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
 * 新闻列表
 * 
 * @param {Object} props
 * @param {Number} props.count - 要显示的新闻数量，当为 0 时显示全部
 * @returns {React.ReactNode}
 */
export default function NewsList({ count }) {
    const lang = useContext(LangContext)
    let newsDatas = useNewsData(lang)

    const newsLabel = lang === "en" ? "News" : "新闻"
    const seeAllLabel = lang === "en" ? "See all news" : "更多新闻"
    const seeAllUrl = lang === "en" ? "/news" : "/news-zh"

    if (count !== 0) {
        newsDatas = newsDatas.slice(0, count)
    } else {
        return (
            <div className="py-10">
                <div className="text-3xl mb-10 tracking-wide">
                    { newsLabel }
                </div>
                <ul>
                    {newsDatas.map(({ date, content }, index) => (
                        <News key={index} date={date} content={content}></News>
                    ))}
                </ul>
            </div>
        )
    }

    return (
        <div className="ml:w-1/3 my-6 px-8 bg-slate-50 rounded ring-1">
            <div className="my-6 text-lg font-semibold tracking-wide">
                { newsLabel }
            </div>
            <ul>
                {newsDatas.map(({ date, content }, index) => (
                    <News key={index} date={date} content={content}></News>
                ))}
            </ul>
            <div className="text-sm tracking-wide my-6">
                <Link to={seeAllUrl}>
                    { seeAllLabel }
                </Link>
            </div>
        </div>
    )
}