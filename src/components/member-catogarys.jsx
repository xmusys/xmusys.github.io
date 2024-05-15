import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import HomeIcon from "../icons/home-icon"
import GithubIcon from "../icons/github-icon"
import EmailIcon from "../icons/email-icon"
import GoogleScholarIcon from "../icons/google-scholar-icon"


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


function MemberLinks({ links }) {
    return (
        <div className="flex items-center space-x-4">
            {links.map(([name, link]) => (
                <MemberLink key={name} name={name} link={link}></MemberLink>)
            )}
        </div>
    )
}

function MemberCard({ memberData, memberImage }) {
    const target = memberData.name.match(/[A-Z][a-z]*/g).join('-').toLowerCase()

    return (
        <div className="flex flex-col items-center gap-y-2">
            <Link to={target} className="flex flex-col items-center gap-y-2 group cursor-pointer">
                <GatsbyImage image={memberImage} alt={memberData.name} className="rounded-full w-32 h-32"></GatsbyImage>
                <div className="text-xl text-black group-hover:text-blue-500 transition-colors duration-300">
                    { memberData.name }
                </div>
            </Link>
            <MemberLinks links={memberData.links}></MemberLinks>
        </div>
    )
}

function MemberCatogary({ catogary, membersData, memberImages }) {
    if (catogary === "All Members") {
        return <></>
    } else if (catogary === "Alumni") {
        return (
        <div className="flex flex-col items-center gap-8">

            <div className="text-3xl tracking-wider">
                {catogary}
            </div>

            <div className="w-full ml:w-4/5 border-2 rounded-xl py-2 ml:px-8 overflow-x-auto">
                <table class="min-w-full divide-y divide-gray-300">
                    <thead>
                        <tr>
                            <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">Name</th>
                            <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Degree</th>
                            <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Date</th>
                            <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">After Graducation</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200">
                        {membersData.map(({name, degree, date, after}) => (
                            <tr>
                                <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">{name}</td>
                                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{degree}</td>
                                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{date}</td>
                                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{after}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        )
    } else {
        return (
            <div className="flex flex-col items-center gap-8">
                <div className="text-3xl tracking-wider">
                    {catogary}
                </div>
                <div className="flex flex-wrap justify-center gap-10">
                    {membersData.map(data => <MemberCard key={data.id} memberData={data} memberImage={memberImages[data.photo]}></MemberCard>)}
                </div>
            </div>
        )
    }
}

export default function MemberCatogarys({ allCatogaries, currentCatogry }) {
    const data = useStaticQuery(graphql`
        query {
            allTeamFaluctyEnJson {
                edges {
                    node {
                        id
                        name
                        photo
                        links
                    }
                }
            }
            allTeamPostdocEnJson {
                edges {
                    node {
                        id
                        name
                        photo
                        links
                    }
                }
            }
            allTeamPhdStudentsEnJson {
                edges {
                    node {
                        id
                        name
                        photo
                        links
                    }
                }
            }
            allTeamMsStudentsEnJson {
                edges {
                    node {
                        id
                        name
                        photo
                        links
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
                        after
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

    const allCatogariesData = {
        "Faculty": data.allTeamFaluctyEnJson.edges.map(({ node }) => node),
        "Postdoc": data.allTeamPostdocEnJson.edges.map(({ node }) => node),
        "PhD Students": data.allTeamPhdStudentsEnJson.edges.map(({ node }) => node),
        "MS Students": data.allTeamMsStudentsEnJson.edges.map(({ node }) => node),
        "Alumni": data.allTeamAlumniEnJson.edges.map(({ node }) => node),
    }

    const memberImages = Object.fromEntries(data.allFile.nodes.map(({ name, childImageSharp }) => [name, getImage(childImageSharp)]))

    if (currentCatogry === allCatogaries[0]) {
        return (
            <div className="flex flex-col gap-10">
                {allCatogaries.filter((_, index) => index !== 0).map((catogary) => <MemberCatogary key={catogary} catogary={catogary} membersData={allCatogariesData[catogary]} memberImages={memberImages}></MemberCatogary>)}
            </div>
        )
    } else {
        return (
            <MemberCatogary catogary={currentCatogry} membersData={allCatogariesData[currentCatogry]} memberImages={memberImages}></MemberCatogary>
        )
    }
}
