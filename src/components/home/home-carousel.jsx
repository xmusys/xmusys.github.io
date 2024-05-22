import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import { Carousel } from "flowbite-react"


/**
 * 首页轮播图组件
 * 
 * @returns {React.ReactNode}
 */
export default function HomeCarousel() {
    const data = useStaticQuery(graphql`
        query {
            allFile(filter: {sourceInstanceName: {eq: "home-images"}}) {
                nodes {
                    name
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
        }
    `)
    
    return (
        <div className="w-5/6 py-2 mx-auto aspect-video">
            <Carousel>
            {
                data.allFile.nodes.map((fileNode) => {
                    return <GatsbyImage className="w-full h-full" image={getImage(fileNode)} alt={fileNode.name} key={fileNode.name} />
                })
            }
            </Carousel>
        </div> 
    )
}
