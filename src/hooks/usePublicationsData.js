import { useStaticQuery, graphql } from "gatsby"

/**
 * 返回论文数据
 * 
 * @returns {{title: string, authors: string, publication: string, links: {type: string, url: string}[]}[][]}
 */
export default function usePublicationsData() {
    const data = useStaticQuery(graphql`
        fragment PaperFrament on Paper {
            title
            authors
            publication
            links {
                type
                url
            }
        }

        query {
            allJournalPapersJson {
                edges {
                    node {
                        ...PaperFrament
                    }
                }
            }
            allConferencePapersJson {
                edges {
                    node {
                        ...PaperFrament
                    }
                }
            }
        }
    `)

    return [
        {},
        data.allConferencePapersJson.edges.map(({ node }) => node),
        data.allJournalPapersJson.edges.map(({ node }) => node),
    ]
}