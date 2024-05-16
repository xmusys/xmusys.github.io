import * as React from "react"
import { useContext } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import { LangContext } from "../../contexts/lang-context"

import HomeIcon from "../icons/home-icon"
import GithubIcon from "../icons/github-icon"
import EmailIcon from "../icons/email-icon"
import GoogleScholarIcon from "../icons/google-scholar-icon"

/**
 * 成员链接
 * 
 * @param {Object} props
 * @param {string} props.name - 成员链接名称
 * @param {string} props.link - 成员链接地址
 * @returns {React.ReactNode} - 成员链接
 */
function MemberLink({ name, link }) {
    const iconSize = 14
    const iconColor = "#333333"
    return (
        <a href={link} target="_blank" rel="noreferrer">
            {
                name === "homepage" ? <HomeIcon size={iconSize} color={iconColor}></HomeIcon> :
                name === "email" ? <EmailIcon size={iconSize} color={iconColor}></EmailIcon> :
                name === "github" ? <GithubIcon size={iconSize} color={iconColor}></GithubIcon> :
                name === "google_scholar" ? <GoogleScholarIcon size={iconSize} color={iconColor}></GoogleScholarIcon> : <></>
            }
        </a>
    )
}

/**
 * 成员链接列表
 * 
 * @param {Object} props
 * @param {Object[]} props.links - 成员链接 
 * @returns {React.ReactNode} - 成员链接列表
 */
function MemberLinks({ links }) {
    return (
        <div className="flex items-center space-x-4">
            {links.map(({name, link}) => (
                <MemberLink key={name} name={name} link={link}></MemberLink>)
            )}
        </div>
    )
}

/**
 * 成员卡片
 * 
 * @param {Object} props
 * @param {Object} props.memberData - 成员数据
 * @param {Object} props.memberImage - 成员图片
 * @returns {React.ReactNode} - 成员卡片
 */
function MemberCard({ memberData, memberImage }) {
    const lang = useContext(LangContext)
    const target = `/${lang === "en" ? "team" : "team-zh"}/${memberData.slug}`
    console.log(memberData.slug);
    
    return (
        <div className="flex flex-col items-center gap-y-2">
            <Link to={target} className="flex flex-col items-center gap-y-2 group cursor-pointer">
                <GatsbyImage image={getImage(memberImage)} alt={memberData.name} className="rounded-full w-36 h-36"></GatsbyImage>
                <div className="text-lg text-black group-hover:text-blue-500 transition-colors duration-300">
                    { memberData.name }
                </div>
            </Link>
            <MemberLinks links={memberData.links}></MemberLinks>
        </div>
    )
}

/**
 * 某一类的成员列表
 * 
 * @param {Object} props
 * @param {string[]} props.allCatogaries - 所有成员类别
 * @param {string} props.catogary - 成员类别
 * @param {Object[]} props.memberDatas - 该类别的所有成员数据
 * @param {Object} props.memberImages - 所有成员图片
 * @returns {React.ReactNode} - 成员列表
 */
function MemberCatogary({ allCatogaries, catogary, memberDatas, memberImages }) {
    console.log(catogary);
    console.log(memberDatas);

    const lang = useContext(LangContext)

    const name = lang === "en" ? "Name" : "姓名"
    const degree = lang === "en" ? "Degree" : "学位"
    const date = lang === "en" ? "Date" : "毕业时间"
    const firstJob = lang === "en" ? "First Job" : "第一份工作"

    if (catogary === allCatogaries[allCatogaries.length-1]) {
        // 校友
        return (
        <div className="pt-8 flex flex-col items-center gap-8">
            <div className="text-3xl tracking-wider">
                {catogary}
            </div>
            <div className="w-full ml:w-4/5 border-2 rounded-xl py-2 px-4 ml:px-8 overflow-x-auto">
                <table class="min-w-full divide-y divide-gray-300">
                    <thead>
                        <tr>
                            <th scope="col" class="whitespace-nowrap py-3.5 pr-3 sm:px-4 text-left text-sm font-semibold text-gray-900">{name}</th>
                            <th scope="col" class="whitespace-nowrap py-3.5 px-3 sm:px-4 text-left text-sm font-semibold text-gray-900">{degree}</th>
                            <th scope="col" class="whitespace-nowrap py-3.5 px-3 sm:px-4 text-left text-sm font-semibold text-gray-900">{date}</th>
                            <th scope="col" class="whitespace-nowrap py-3.5 px-3 sm:px-4 text-left text-sm font-semibold text-gray-900">{firstJob}</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200">
                        {memberDatas.map(({name, degree, date, first_job}) => (
                            <tr>
                                <td class="whitespace-nowrap py-3.5 pr-3 sm:px-4 text-sm font-medium text-gray-900">{name}</td>
                                <td class="whitespace-nowrap py-3.5 px-3 sm:px-4 text-sm text-gray-500">{degree}</td>
                                <td class="whitespace-nowrap py-3.5 px-3 sm:px-4 text-sm text-gray-500">{date}</td>
                                <td class="whitespace-nowrap py-3.5 px-3 sm:px-4 text-sm text-gray-500">{first_job}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        )
    } else {
        // 非校友
        return (
            <div className="pt-8 flex flex-col items-center gap-8">
                <div className="text-3xl tracking-wider">
                    {catogary}
                </div>
                <div className="flex flex-wrap justify-center gap-x-16 gap-y-8">
                    {memberDatas.map(memberData => <MemberCard key={memberData.id} memberData={memberData} memberImage={memberImages[memberData.photo]}></MemberCard>)}
                </div>
            </div>
        )
    }
}


/**
 * 某一类的成员列表，包括 All
 * 
 * @param {Object} props
 * @param {string[]} props.allCatogaries - 所有成员类别
 * @param {string} props.currentCatogry - 当前成员类别
 * @returns {React.ReactNode} - 成员列表
 */
export default function MemberCatogarys({ allCatogaries, currentCatogry }) {
    const lang = useContext(LangContext)
    const data = useStaticQuery(graphql`
        fragment TeamMemberFragment on TeamMember {
            id
            name
            slug
            photo
            links {
                name
                link
            }
        }
        
        query {
            allTeamFaluctyEnJson {
                edges {
                    node {
                        ...TeamMemberFragment
                    }
                }
            }
            allTeamFaluctyZhJson {
                edges {
                    node {
                        ...TeamMemberFragment
                    }
                }
            }
            allTeamPostdocEnJson {
                edges {
                    node {
                        ...TeamMemberFragment
                    }
                }
            }
            allTeamPostdocZhJson {
                edges {
                    node {
                        ...TeamMemberFragment
                    }
                }
            }
            allTeamPhdStudentsEnJson {
                edges {
                    node {
                        ...TeamMemberFragment
                    }
                }
            }
            allTeamPhdStudentsZhJson {
                edges {
                    node {
                        ...TeamMemberFragment
                    }
                }
            }
            allTeamMsStudentsEnJson {
                edges {
                    node {
                        ...TeamMemberFragment
                    }
                }
            }
            allTeamMsStudentsZhJson {
                edges {
                    node {
                        ...TeamMemberFragment
                    }
                }
            }
            allTeamAlumniEnJson {
                edges {
                    node {
                        id
                        name
                        date
                        degree
                        first_job
                    }
                }
            }
            allTeamAlumniZhJson {
                edges {
                    node {
                        id
                        name
                        date
                        degree
                        first_job
                    }
                }
            }
            allFile(filter: {sourceInstanceName: {eq: "team-images"}}) {
                nodes {
                    name
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
        }
    `)

    const langCap = lang === "en" ? "En" : "Zh"
    const allCatogariesData = {
        [allCatogaries[1]]: data[`allTeamFalucty${langCap}Json`].edges.map(({ node }) => node),
        [allCatogaries[2]]: data[`allTeamPostdoc${langCap}Json`].edges.map(({ node }) => node),
        [allCatogaries[3]]: data[`allTeamPhdStudents${langCap}Json`].edges.map(({ node }) => node),
        [allCatogaries[4]]: data[`allTeamMsStudents${langCap}Json`].edges.map(({ node }) => node),
        [allCatogaries[5]]: data[`allTeamAlumni${langCap}Json`].edges.map(({ node }) => node),
    }

    const memberImages = Object.fromEntries(data.allFile.nodes.map(({name, childImageSharp}) => [name, childImageSharp]))

    if (currentCatogry === allCatogaries[0]) {
        return (
            <div className="flex flex-col gap-10">
                {allCatogaries.filter((_, index) => index !== 0).map((catogary) => (
                    <MemberCatogary key={catogary} allCatogaries={allCatogaries} catogary={catogary} memberDatas={allCatogariesData[catogary]} memberImages={memberImages}></MemberCatogary>
                ))}
            </div>
        )
    } else {
        return (
            <MemberCatogary catogary={currentCatogry} allCatogaries={allCatogaries} memberDatas={allCatogariesData[currentCatogry]} memberImages={memberImages}></MemberCatogary>
        )
    }
}
