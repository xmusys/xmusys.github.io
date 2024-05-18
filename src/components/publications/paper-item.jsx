import * as React from "react"

import mdxToJsx from "../../utils/mdx-to-jsx"
import ResourceLinks from "../common-page/resource-links"

/**
 * 一项论文
 * 
 * @param {Object} props
 * @param {{title: string, authors: string, publication: string, links: {type: string, url: string}[]}} props.paperData - 论文数据 
 * @returns {React.ReactNode}
 */
export default function PaperItem({ paperData }) {
    const { title, authors, publication, links } = paperData
    const Authors = mdxToJsx(authors)
    const Publication = mdxToJsx(publication)

    return (
        <div className="space-y-1">
            <div className="whitespace-pre text-wrap leading-6 [&_strong]:font-semibold hover:[&_a]:underline">
                <a className="" href={links.filter((link) => link.type === "paper")[0]}>{title}</a>
                <Authors></Authors>
                <Publication></Publication>
            </div>
            <ResourceLinks links={links}></ResourceLinks>
        </div>
    )
}
