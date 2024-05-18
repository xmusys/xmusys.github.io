import * as React from "react"

import PaperIcon from "../icons/paper-icon"
import GithubIcon from "../icons/github-icon"
import SlidesIcon from "../icons/slides-icon"

/**
 * 资源的可链接图标
 * 
 * @param {Object} props
 * @param {string} props.type - 链接类型
 * @param {string} props.url - 链接地址
 * @returns {React.ReactNode}
 */
function ResourceLink({ type, url }) {
    const size = 14
    const color = "#000000"

    return (
        <a href={url} className="flex gap-[2px] items-center px-1 py-[2px] border-2 rounded bg-xmu-blue-10">
            {
                type === "paper" ? <PaperIcon size={size} color={color}></PaperIcon> : 
                type === "code" ? <GithubIcon size={size} color={color}></GithubIcon> : 
                type === "slides" ? <SlidesIcon size={size} color={color}></SlidesIcon> : <></>
            }
            <span className="text-xs font-semibold text-neutral-700">
                {type}
            </span>
        </a>
    )
}

/**
 * 论文的资源链接
 * 
 * @param {Object} props
 * @param {{ type: string, url: string}[]} props.links
 * @returns {React.ReactNode}
 */
export default function ResourceLinks({ links })  {
    return (
        <div className="flex space-x-2">
            {links.map((link, index) => (
                <ResourceLink key={index} type={link.type} url={link.url}></ResourceLink>
            ))}
        </div>
    )
}