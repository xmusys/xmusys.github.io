import { useStaticQuery, graphql } from "gatsby"

function formatDate(dateStr, lang) {
    const [year, month] = dateStr.split('-');
    const monthNames = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    
    if (lang === "en") {
        return `${monthNames[month - 1]}, ${year}`;
    } else if (lang === "zh") {
        return `${year} 年 ${month} 月`;
    } else {
        return "Invalid Date Format";
    }
}

/**
 * 返回新闻数据
 * 
 * @param {string} lang 语言
 * @returns {{date: string, content: string}[]} 
 */
export default function useNewsData(lang) {
    let data = useStaticQuery(graphql`
        query {
            allNewsJson {
                edges {
                    node {
                        date
                        content {
                            en
                            zh
                        }
                    }
                }
            }
        }
    `)
    return data.allNewsJson.edges.map(({ node }) => ({
        date: formatDate(node.date, lang),
        content: node.content[lang]
    }))
}