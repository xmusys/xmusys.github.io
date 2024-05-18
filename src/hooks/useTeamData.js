import { useStaticQuery, graphql } from "gatsby"

/**
 * 返回成员数据
 * 
 * @param {string} lang - 语言
 * @returns {[
 * [],
 * {name: string, slug: string, photo: string, degree: string, links: {type: string, url: string}[]}[],
 * {name: string, slug: string, photo: string, degree: string, links: {type: string, url: string}[]}[],
 * {name: string, slug: string, photo: string, degree: string, links: {type: string, url: string}[]}[],
 * {name: string, slug: string, photo: string, degree: string, links: {type: string, url: string}[]}[],
 * {name: string, degree: string, year: string, first_job: string}[]
 * ]}
 */
export default function useTeamData(lang) {
    const data = useStaticQuery(graphql`
    query {
        allTeamJson {
            edges {
                node {
                    name {
                        en
                        zh
                    }
                    slug
                    photo
                    degree
                    links {
                        type
                        url
                    }
                }
            }
        }
        allAlumniJson {
            edges {
                node {
                    name {
                        en
                        zh
                    }
                    degree {
                        en
                        zh
                    }
                    year
                    first_job {
                        en
                        zh
                    }
                }
            }
        }
    }`)

    let sortData = [[], [], [], [], [], []]

    data.allTeamJson.edges.forEach(({ node }) => {
        sortData[["Faculty", "Postdoc", "PhD Student", "MS Student"].indexOf(node.degree) + 1].push({
            ...node,
            name: node.name[lang],
        })
    })

    sortData[5] = data.allAlumniJson.edges.map(({ node }) => ({
        name: node.name[lang],
        degree: node.degree[lang],
        year: node.year,
        first_job: node.first_job[lang]
    }))

    return sortData
}