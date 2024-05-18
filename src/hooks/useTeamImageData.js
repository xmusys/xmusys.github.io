import { useStaticQuery, graphql } from "gatsby"

/**
 * 团队成员照片
 * 
 * @returns {{[name: string]: any}}
 */
export default function useTeamImageData() {
    const data = useStaticQuery(graphql`
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

    return Object.fromEntries(data.allFile.nodes.map(({name, childImageSharp}) => [name, childImageSharp]))
}