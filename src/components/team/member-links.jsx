import * as React from "react"

import HomeIcon from "../icons/home-icon"
import GithubIcon from "../icons/github-icon"
import EmailIcon from "../icons/email-icon"
import GoogleScholarIcon from "../icons/google-scholar-icon"

/**
 * 成员链接
 * 
 * @param {Object} props
 * @param {string} props.type - 链接类型
 * @param {string} props.url - 链接地址
 * @returns {React.ReactNode}
 */
function MemberLink({ type, url }) {
    const iconSize = 14
    const iconColor = "#333333"
    return (
        <a href={url} target="_blank" rel="noreferrer">
            {
                type === "homepage" ? <HomeIcon size={iconSize} color={iconColor}></HomeIcon> :
                type === "email" ? <EmailIcon size={iconSize} color={iconColor}></EmailIcon> :
                type === "github" ? <GithubIcon size={iconSize} color={iconColor}></GithubIcon> :
                type === "google_scholar" ? <GoogleScholarIcon size={iconSize} color={iconColor}></GoogleScholarIcon> : <></>
            }
        </a>
    )
}

/**
 * 成员链接列表
 * 
 * @param {Object} props
 * @param {{type: string, url: string}[]} props.links - 成员链接
 * @returns {React.ReactNode}
 */
export default function MemberLinks({ links }) {
    return (
        <div className="flex items-center space-x-4">
            {links.map(({type, url}, index) => (
                <MemberLink key={index} type={type} url={url}></MemberLink>)
            )}
        </div>
    )
}
