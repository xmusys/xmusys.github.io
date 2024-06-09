import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'


/**
 * SEO 组件，用于赋值给 Head
 * 
 * @param {Object} props
 * @param {string} props.title 页面标题（前半部分）
 * @returns {React.ReactNode} SEO 组件
 */
export default function Seo({ title }) {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                    keywords
                }
            }
        }
    `)

    return (
        <>
            <title>{title} | {data.site.siteMetadata.title}</title>
            <meta name="description" content={data.site.siteMetadata.description} />
            <meta name="keywords" content={data.site.siteMetadata.keywords} />
            <meta name="google-site-verification" content="WKKkeJIj7At4UrPqbZ4CsSTC_VcMKw0EhGjzko4gI9s" />
        </>
    )
}
