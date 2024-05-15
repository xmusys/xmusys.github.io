import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { evaluateSync } from '@mdx-js/mdx'
import * as runtime from 'react/jsx-runtime'

import PaperIcon from "../icons/paper-icon"
import GithubIcon from "../icons/github-icon"
import SlidesIcon from "../icons/slides-icon"
  
function ResourceLink({ title, target }) {
    const size = 14
    const color = "#000000"

    return (
        <Link to={target} className="flex gap-[2px] items-center px-1 py-[2px] border-2 rounded bg-xmu-blue-10">
            {
                title === "Paper" ? <PaperIcon size={size} color={color}></PaperIcon> : 
                title === "Code" ? <GithubIcon size={size} color={color}></GithubIcon> : 
                title === "Slides" ? <SlidesIcon size={size} color={color}></SlidesIcon> : <></>
            }
            <span className="text-xs font-semibold text-neutral-700">
                {title}
            </span>
        </Link>
    )
}

function ResourceLinks({ paper: paperLink, slides: slidesLink, code: codeLink })  {
    return (
        <div className="flex space-x-2">
            {paperLink ? <ResourceLink title="Paper" target={paperLink}></ResourceLink> : <></>}
            {slidesLink ? <ResourceLink title="Slides" target={slidesLink}></ResourceLink> : <></>}
            {codeLink ? <ResourceLink title="Code" target={codeLink}></ResourceLink> : <></>}
        </div>
    )
}

function Paper({ paper }) {

    const {default: Authors} =  evaluateSync(paper.authors, runtime)
    const {default: Publication} =  evaluateSync(paper.publication, runtime)

    return (
        <div className="space-y-1">
            <div className="whitespace-pre text-wrap leading-6 [&_strong]:font-semibold hover:[&_a]:underline">
                <a className="" href={paper.links.paper}>{paper.title}</a>
                <Authors></Authors>
                <Publication></Publication>
            </div>
            <ResourceLinks {...paper.links}></ResourceLinks>
        </div>
    )
}

function PaperCatogary({ currentCatogry, papers }) {
    return (
        <div className="border-b-2 py-8">
            <div className="mb-3 text-3xl tracking-wide">
                {currentCatogry}
            </div>
            <ul className="pl-6">
                {papers.map((paper, index) => (
                    <li key={index} className="mb-4 list-disc">
                        <Paper paper={paper}></Paper>
                    </li>
                ))}
            </ul>
        </div>
    )
}

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

    console.log(data);

    const allPapers = {
        "Conference Papers": data.allConferencePapersJson.edges.map(({ node }) => node),
        "Journal Papers": data.allJournalPapersJson.edges.map(({ node }) => node),
    }  

    console.log(allPapers);
    console.log(currentCatogry);
    console.log(allPapers[currentCatogry]);

    if (currentCatogry === allCatogaries[0]) {
        return (
            <div>
                {allCatogaries.filter((_, index) => index !== 0).map((catogary) => (
                    <PaperCatogary key={catogary} currentCatogry={catogary} papers={allPapers[catogary]}></PaperCatogary>
                ))}
            </div>
        )
    } else {
        return <PaperCatogary currentCatogry={currentCatogry} papers={allPapers[currentCatogry]}></PaperCatogary>
    }
}