import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useContext } from "react"

import { LangContext } from "../../contexts/lang-context"
import useTeamImageData from "../../hooks/useTeamImageData"
import mdxToJsx from "../../utils/mdx-to-jsx"
import Layout from "../common/layout"
import HomeIcon from "../icons/home-icon"
import GithubIcon from "../icons/github-icon"
import EmailIcon from "../icons/email-icon"
import GoogleScholarIcon from "../icons/google-scholar-icon"
import GraducationIcon from "../icons/graducation-icon"
import PaperLinkIcon from "../icons/paper-link-icon"
import ResourceLinks from "../common-page/resource-links"
import usePublicationsData from "../../hooks/usePublicationsData"


/**
 * 生成链接组件
 * 
 * @param {Object} props
 * @param {string} props.type - 链接类型
 * @param {string} props.url - 链接地址
 * @param {number} props.iconSize - 图标大小
 * @param {string} props.iconColor - 图标颜色
 * @returns {React.ReactNode} - 链接组件
 */
function MemberLink({ type, url, iconSize=16, iconColor="#333"}) {
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
 * 链接列表
 * 
 * @param {Object} props
 * @param {Object[]} props.links - 链接列表 
 * @returns {React.ReactNode} - 链接列表 
 */
function MemberLinks({ links }) {
    return (
        <div className={`flex flex-wrap items-center space-x-3 sm:space-x-4 max-w-36`}>
            {links.map(({type, url}, index) => (
                <MemberLink key={index} type={type} url={url}></MemberLink>)
            )}
        </div>
    )
}

/**
 * 论文列表中的一项
 * 
 * @param {Object} props
 * @param {{title: string, authors: string, publication: string, links: {type: string, url: string}[]}} props.paperData - 论文数据
 * @param {string} props.memberName - 个人主页的拥有者
 * @returns {React.ReactNode} - 论文列表中的一项
 */
function Paper({ paperData, memberName }) {
    const Authors = mdxToJsx(paperData.authors.replace(memberName, `**${memberName}**`))
    const Publication = mdxToJsx(paperData.publication)

    return (
        <div className="whitespace-pre text-wrap leading-7 [&_strong]:font-semibold hover:[&_a]:underline">
            <a className="" href={paperData.links.filter((link) => link.type === "paper")[0]}>{paperData.title}</a>
            <Authors></Authors>
            <Publication></Publication>
            <ResourceLinks links={paperData.links}></ResourceLinks>
        </div>
    )
}

/**
 * 
 * @param {Object} props
 * @param {{
 * name: string,
 * photo: string, 
 * position: string, 
 * links: {type: string, url:string}[], 
 * about_me: string, 
 * education: {degree: string, major: string, period: string}[]
 * publications: {group : string[], personal: {title: string, authors: string, publication: string, links: {type: string, url: string}[]}[]}
 * major_awards: string[]
 * }} props.data
 * @returns {React.ReactNode}
 */
function TopSection({ data }) {
    const lang = useContext(LangContext)
    const images = useTeamImageData()
    const imageSource = images[data.photo] ? images[data.photo] : images["default"]

    return (
        <div className="flex gap-8 border-b-2 pb-8 sm:border-0 sm:gap-16 hover:[&_a]:underline hover:[&_a]:text-xmu-blue-100 [&_a]:text-xmu-blue-80">
            <div className="size-36 sm:size-48 flex flex-col items-center gap-6">
                <GatsbyImage image={getImage(imageSource)} alt={data.name} objectPosition={"0% 0%"} className="w-full rounded-full aspect-square shadow-lg"></GatsbyImage>
            </div>
            <div className="flex-initial space-y-3 sm:space-y-5 text-gray-800">
                <div className="font-[750] text-xl sm:text-3xl leading-10 text-gray-900">
                    {data.name}
                </div>
                <div className="text-sm sm:text-base">
                    {data.position}
                </div>
                <div className="text-sm sm:text-base leading-6 sm:leading-8 text-pretty">
                    {lang === "en" ? <Link to="/">ERAS Research Group &nbsp; Xiamen University</Link> : <Link to="/home-zh">厦门大学 ERAS 研究小组</Link>}
                </div>
                <div className="">
                    <MemberLinks links={data.links}></MemberLinks>
                </div>
            </div>
        </div>
    )
}

/**
 * 章节组件
 * @param {Object} props
 * @param {string} props.title - 章节标题
 * @param {string} props.memberName - 个人主页的拥有者
 * @param {React.ReactNode} props.children - 章节内容
 * @returns {React.ReactNode}
 */
function Chapter({title, memberName, children }) {
    const lang = useContext(LangContext)
    const fullPublicationsLabel = lang === "en" ? "Full Publications" : "全部论文"

    return (
        <div className={`space-y-2 text-gray-900 ${!(title === "Publications" || title === "发表论文") ? "hover:[&_a]:underline hover:[&_a]:text-xmu-blue-100 [&_a]:text-xmu-blue-80" : ""}`}>
            <div className="font-semibold text-2xl leading-10">
                {title}
            </div>
            {((memberName === "Zhirong Shen" || memberName === "沈志荣") && (title === "Publications" || title === "发表论文")) 
                ? <Link to={lang === "en" ? "/publications" : "/publications-zh" } className="hover:underline hover:text-xmu-blue-100 text-xmu-blue-80">{fullPublicationsLabel}</Link> 
                : <></>}
            <div className="ml-2">
                {children}
            </div>
        </div>
    
    )
}

/**
 * 
 * @param {Object} props
 * @param {{
 * name: string,
 * photo: string, 
 * position: string, 
 * links: {type: string, url:string}[], 
 * about_me: string, 
 * education: {degree: string, major: string, period: string}[]
 * publications: {group: string[], personal: {title: string, authors: string, publication: string, links: {type: string, url: string}[]}[]}
 * major_awards: string[]
 * }} props.data
 * @returns {React.ReactNode}
 */
function BottomSection({ data }) {
    const lang = useContext(LangContext)
    const AboutMe = mdxToJsx(data.about_me)
    const memberName = data.name

    const aboutMeLabel = lang === "en" ? "About Me" : "关于我"
    const educationLabel = lang === "en" ? "Education" : "教育经历"
    const publicationsLabel = lang === "en" ? "Publications" : "发表论文"
    const majorAwardsLabel = lang === "en" ? "Major Awards" : "主要奖项"

    const allPublicationDatas = usePublicationsData()
    const publications = ((memberName !== "Zhirong Shen" && memberName !== "沈志荣")
    ? [].concat(data.publications.personal, allPublicationDatas.reduce((acc, category) => acc.concat(category.filter(paperData => data.publications.group.includes(paperData.paper_id))), [])) 
    : [].concat(allPublicationDatas[1].slice(0, 3), allPublicationDatas[2].slice(0, 3)))

    return (
        <div className="my-10 space-y-8 leading-8">
            <Chapter title={aboutMeLabel} memberName={memberName}>
                <div className="whitespace-pre text-wrap">
                    <AboutMe></AboutMe>
                </div>
            </Chapter>
            <Chapter title={educationLabel} memberName={memberName}>
                <div className="w-full overflow-x-auto">
                    <table className="min-w-full divide-gray-300 text-gray-900">
                        <tbody>
                            {data.education.map(({ degree, major, period }, index) => (
                                <tr key={index}>
                                    <td><GraducationIcon/></td>
                                    <td className="whitespace-nowrap pl-2 pr-3">{degree}</td>
                                    <td className="whitespace-nowrap pl-2 pr-3">{major}</td>
                                    <td className="whitespace-nowrap pl-2 pr-3">{period}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Chapter>
            <Chapter title={publicationsLabel} memberName={memberName}>
                <div>
                    <ul className="space-y-4">
                        {publications.map((publication, index) => (
                            <li key={index}>
                                <div className="flex gap-2">
                                    <div>
                                        <PaperLinkIcon/>
                                    </div>
                                    <div className="pt-[0.125rem]">
                                        <Paper paperData={publication} memberName={memberName}></Paper>
                                    </div>
                                </div>
                            </li>)
                        )}
                    </ul>
                </div>
            </Chapter>
            <Chapter title={majorAwardsLabel} memberName={memberName}>
                <ul className="list-disc ml-4">
                    {data["major_awards"].map((award, index) => {
                        const Award = mdxToJsx(award)
                        return <li key={index}><Award></Award></li>
                    })}
                </ul>
            </Chapter>
        </div>
    )

}

/**
 * 成员页面模版
 * 
 * @param {Object} props
 * @param {{
 * name: string, 
 * photo: string, 
 * position: string, 
 * links: {type: string, url:string}[], 
 * about_me: string, 
 * education: {degree: string, major: string, period: string}[]
 * publications: {group: string[], personal: {title: string, authors: string, publication: string, links: {type: string, url: string}[]}[]}
 * major_awards: string[]
 * }} props.data - 团队成员数据
 * @returns {React.ReactNode}
 */
export default function TeamMemberPageIndex({ data }) {
    return (
        <Layout>
            <div className="my-8 flex flex-col">
                <TopSection data={data}></TopSection>
                <BottomSection data={data}></BottomSection>
            </div>
        </Layout>
    )
}