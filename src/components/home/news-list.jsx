import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import { evaluateSync } from '@mdx-js/mdx'
import * as runtime from 'react/jsx-runtime'

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

export default function NewsList({ length, isFull=false }) {
    let news = useStaticQuery(graphql`
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
        }
    `).allNewsEnJson.edges.map(({ node }) => node)

    if (length !== undefined) {
        news = news.slice(0, length)
    }

    if (isFull) {
        return (
            <div className="py-10">
                <div className="text-3xl mb-10 tracking-wide">
                    News
                </div>
                <ul>
                    {news.map(({ date, content, id }) => (
                        <News key={id} date={date} content={content}></News>
                    ))}
                </ul>
            </div>
        )
    }

    return (
        <div className="ml:w-1/3 my-6 px-8 bg-slate-50 rounded ring-1">
            <div className="my-6 text-lg font-semibold tracking-wide">
                News
            </div>
            <ul>
                {news.map(({ date, content, id }) => (
                    <News key={id} date={date} content={content}></News>
                ))}
            </ul>
            <div className="text-sm tracking-wide my-6">
                <Link to="/news">
                    See all news
                </Link>
            </div>
        </div>
    )
}