import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { evaluateSync } from '@mdx-js/mdx'
import * as runtime from 'react/jsx-runtime'

import PaperIcon from "../icons/paper-icon"
import GithubIcon from "../icons/github-icon"
import SlidesIcon from "../icons/slides-icon"

/**
 * 
 * @param {Object} props
 * @param {string} props.name - 链接类型
 * @param {string} props.target - 链接地址
 * @returns 
 */
function ResourceLink({ name, target }) {
    const size = 14
    const color = "#000000"

    return (
        <Link to={target} className="flex gap-[2px] items-center px-1 py-[2px] border-2 rounded bg-xmu-blue-10">
            {
                name === "Paper" ? <PaperIcon size={size} color={color}></PaperIcon> : 
                name === "Code" ? <GithubIcon size={size} color={color}></GithubIcon> : 
                name === "Slides" ? <SlidesIcon size={size} color={color}></SlidesIcon> : <></>
            }
            <span className="text-xs font-semibold text-neutral-700">
                {name}
            </span>
        </Link>
    )
}

/**
 * 资源链接列表
 * 
 * @param {Object} props 
 * @param {string} props.paper - 论文链接
 * @param {string} props.slides - PPT 链接
 * @param {string} props.code - 代码链接
 * @returns {React.ReactNode} - 资源链接
 */
function ResourceLinks({ paper, slides, code })  {
    return (
        <div className="flex space-x-2">
            {paper ? <ResourceLink name="Paper" target={paper}></ResourceLink> : <></>}
            {slides ? <ResourceLink name="Slides" target={slides}></ResourceLink> : <></>}
            {code ? <ResourceLink name="Code" target={code}></ResourceLink> : <></>}
        </div>
    )
}


/**
 * 论文列表中的一项
 * 
 * @param {Object} props
 * @param {Object} props.paperData - 论文数据 
 * @returns {React.ReactNode} - 论文列表中的一项
 */
function Paper({ paperData }) {
    const {default: Authors} =  evaluateSync(paperData.authors, runtime)
    const {default: Publication} =  evaluateSync(paperData.publication, runtime)

    return (
        <div className="space-y-1">
            <div className="whitespace-pre text-wrap leading-6 [&_strong]:font-semibold hover:[&_a]:underline">
                <a className="" href={paperData.links.paper}>{paperData.title}</a>
                <Authors></Authors>
                <Publication></Publication>
            </div>
            <ResourceLinks {...paperData.links}></ResourceLinks>
        </div>
    )
}


/**
 * 某一类的论文列表
 * 
 * @param {Object} props
 * @param {string} props.currentCatogry - 当前论文分类
 * @param {Object[]} props.papersDatas - 当前分类的所有论文数据
 * @returns {React.ReactNode} - 论文列表
 */
function PaperCatogary({ currentCatogry, papersDatas }) {
    return (
        <div className="border-b-2 py-8">
            <div className="mb-3 text-3xl tracking-wide">
                {currentCatogry}
            </div>
            <ul className="pl-6">
                {papersDatas.map((paperData, index) => (
                    <li key={index} className="mb-4 list-disc">
                        <Paper paperData={paperData}></Paper>
                    </li>
                ))}
            </ul>
        </div>
    )
}

/**
 * 某一类的论文列表
 * 
 * @param {Object} props
 * @param {string[]} props.allCatogaries - 所有论文分类
 * @param {String} props.currentCatogry - 当前论文分类 
 * @returns {React.ReactNode} 论文列表
 */
export default function PaperCatogarys({ allCatogaries, currentCatogry }) {
    const data = useStaticQuery(graphql`
        query  {
            allJournalPapersJson {
                edges {
                    node {
                        id
                        title
                        authors
                        publication
                        links {
                            paper
                            slides
                            code
                        }
                    }
                }
            }
            allConferencePapersJson {
                edges {
                    node {
                        id
                        title
                        authors
                        publication
                        links {
                            paper
                            slides
                            code
                        }
                    }
                }
            }
        }
    `)

    const allPaperDatas = {
        [allCatogaries[1]]: data.allConferencePapersJson.edges.map(({ node }) => node),
        [allCatogaries[2]]: data.allJournalPapersJson.edges.map(({ node }) => node),
    }

    if (currentCatogry === allCatogaries[0]) {
        return (
            <div>
                {allCatogaries.filter((_, index) => index !== 0).map((catogary) => (
                    <PaperCatogary key={catogary} currentCatogry={catogary} papersDatas={allPaperDatas[catogary]}></PaperCatogary>
                ))}
            </div>
        )
    } else {
        return <PaperCatogary currentCatogry={currentCatogry} papersDatas={allPaperDatas[currentCatogry]}></PaperCatogary>
    }
}