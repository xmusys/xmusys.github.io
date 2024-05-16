import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import { Carousel } from "flowbite-react"
import { useContext } from "react"

import { LangContext } from "../../contexts/lang-context"

import HomeEnMdx from "../../assets/data/home/home_en.mdx"
import HomeZhMdx from "../../assets/data/home/home_zh.mdx"


/**
 * 首页轮播图组件
 * 
 * @returns {React.ReactNode} 首页轮播图组件
 */
function HomeCarousel() {
    const data = useStaticQuery(graphql`
        query {
            allFile(filter: {sourceInstanceName: {eq: "home-images"}}) {
                nodes {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
        }
    `)
    
    return (
        <div className="w-11/12 py-2 mx-auto aspect-video">
            <Carousel>
            {
                data.allFile.nodes.map((fileNode) => {
                    return <GatsbyImage className="w-full h-full" image={getImage(fileNode)} alt={fileNode.name} key={fileNode.id} />
                })
            }
            </Carousel>
        </div> 
    )
}

/**
 * 页面介绍组件
 * 
 * @returns {React.ReactNode} 页面介绍组件
 */
export default function HomeIntro() {
    const lang = useContext(LangContext)
    
    return (
        <div className={`ml:w-2/3 py-4 ml:py-8 flex flex-col gap-4 leading-7
                        [&_h1]:text-gray-900 [&_h1]:text-[2rem] [&_h1]:font-[600] [&_h1]:leading-10
                        [&_p]:text-gray-800
                        [&_strong]:text-gray-900 [&_strong]:font-semibold
                        `}>
            {lang === "en" ? <HomeEnMdx components={{HomeCarousel}}></HomeEnMdx> : <HomeZhMdx components={{HomeCarousel}}></HomeZhMdx>}
        </div>
    )
}