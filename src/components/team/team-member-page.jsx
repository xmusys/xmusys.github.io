import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../common/layout"
import HomeIcon from "../icons/home-icon"
import GithubIcon from "../icons/github-icon"
import EmailIcon from "../icons/email-icon"
import GoogleScholarIcon from "../icons/google-scholar-icon"
import GraducationIcon from "../icons/graducation-icon"
import PaperLinkIcon from "../icons/paper-link-icon"
import { GatsbyImage, getImage } from "gatsby-plugin-image"


function MemberLink({ name, link, iconSize=16, iconColor="#333"}) {
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
        <div className={`flex flex-wrap items-center space-x-3 sm:space-x-4 max-w-36`}>
            {links.map(({name, link}) => (
                <MemberLink key={name} name={name} link={link}></MemberLink>)
            )}
        </div>
    )
}

function TopSection({ data }) {
    const images = useStaticQuery(graphql`
        query {
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
    
    const imageSource = Object.fromEntries(images.allFile.nodes.map(({name, childImageSharp}) => [name, childImageSharp]))[data.photo]

    return (
        <div className="flex gap-8 border-b-2 pb-8 sm:border-0 sm:gap-16">
            <div className="min-w-36 flex-initial size-56 flex flex-col items-center gap-6">
                <GatsbyImage image={getImage(imageSource)} alt={data.name} className="rounded-full aspect-square shadow-lg"></GatsbyImage>
                <div className="block sm:hidden">
                    <MemberLinks links={data.links}></MemberLinks>
                </div>
            </div>
            <div className="flex-initial space-y-3 sm:space-y-5 text-gray-800">
                <div className="font-[750] text-xl sm:text-3xl leading-10 text-gray-900">
                    {data.name}
                </div>
                <div className="text-sm sm:text-base">
                    {data.degree}
                </div>
                <div className="text-sm sm:text-base leading-6 sm:leading-8 text-pretty"> 
                    ERAS Group &nbsp; XiaMen University
                </div>
                <div className="hidden sm:block">
                    <MemberLinks links={data.links}></MemberLinks>
                </div>
            </div>
        </div>
    )
}

function Chapter({title, children }) {
    return (
        <div className="space-y-2 text-gray-900">
            <div className="font-semibold text-2xl leading-10">
                {title}
            </div>
            <div className="ml-2">
                {children}
            </div>
        </div>
    
    )
}

function BottomSection({ data }) {
    return (
        <div className="my-10 space-y-8 leading-8">
            <Chapter title="Introduce">
                <div className="whitespace-pre text-wrap">
                    { data.introduce }
                </div>
            </Chapter>
            <Chapter title="Education">
                <div className="w-full overflow-x-auto">
                    <table class="min-w-full divide-gray-300 text-gray-900">
                        {data.education.map(({ degree, major, year }, index) => (
                            <tr>
                                <td><GraducationIcon/></td>
                                <td class="whitespace-nowrap pl-2 pr-3">{degree}</td>
                                <td class="whitespace-nowrap pl-2 pr-3">{major}</td>
                                <td class="whitespace-nowrap pl-2 pr-3">{year}</td>
                            </tr>
                        ))}
                    </table>
                </div>
            </Chapter>
            <Chapter title="Publications">
                <div>
                    <ul className="">
                        {data.publications.map((publication) => (
                            <li key={1}><PaperLinkIcon/></li>)
                        )}
                    </ul>
                </div>
            </Chapter>
            <Chapter title="Major Awards">
                <ul className="list-disc ml-4">
                    {data["major_awards"].map((interest) => (
                        <li key={interest}> </li>)
                    )}
                </ul>
            </Chapter>
        </div>
    )

}


export default function TeamMemberPage({ data }) {
    console.log(data);

    return (
        <Layout>
            <div className="my-8 flex flex-col">
                <TopSection data={data}></TopSection>
                <BottomSection data={data}></BottomSection>
            </div>
        </Layout>
    )
}