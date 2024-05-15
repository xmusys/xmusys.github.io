import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import { Carousel } from "flowbite-react"
import HomeEn from "../../assets/data/home/home-en.mdx"

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
        <div className="w-5/6 py-2 mx-auto aspect-video">
            <Carousel>
            {
                data.allFile.nodes.map((fileNode) => {
                    return <GatsbyImage className="w-full h-full" image={getImage(fileNode)} alt={fileNode.name} key={fileNode.id} />;
                })
            }
            </Carousel>
        </div> 
    )
}

export default function HomeIntroduction() {
    return (
        <div className={`ml:w-2/3 py-8 ml:py-14 flex flex-col gap-4 leading-7
                        [&_h1]:text-gray-900 [&_h1]:text-[2rem] [&_h1]:font-[600] [&_h1]:leading-10
                        [&_p]:text-gray-800
                        [&_strong]:text-gray-900 [&_strong]:font-semibold
                        `}>
            <HomeEn components={{HomeCarousel}}></HomeEn>
        </div>
    )
}