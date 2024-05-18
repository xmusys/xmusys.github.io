import * as React from "react"
import { useContext } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import { LangContext } from "../../contexts/lang-context"

import MemberLinks from "./member-links"


/**
 * 成员卡片
 * 
 * @param {Object} props
 * @param {{name: string, slug: string, photo: string, degree: string, links: {type: string, url: string}[]}} props.memberData - 成员数据
 * @param {Object} props.memberImage - 成员图片
 * @returns {React.ReactNode} - 成员卡片
 */
export default function MemberCard({ memberData, memberImage }) {
    const lang = useContext(LangContext)
    const target = "/" +  memberData.slug + (lang === "en" ? "" : "-zh")
    
    return (
        <div className="flex flex-col items-center gap-y-2">
            <Link to={target} className="flex flex-col items-center gap-y-2 group cursor-pointer">
                <GatsbyImage image={getImage(memberImage)} objectPosition={"0% 0%"}  alt={memberData.name} className="rounded-full w-36 h-36 shadow-lg"></GatsbyImage>
                <div className="text-lg text-black group-hover:text-blue-500 transition-colors duration-300">
                    { memberData.name }
                </div>
            </Link>
            <MemberLinks links={memberData.links}></MemberLinks>
        </div>
    )
}