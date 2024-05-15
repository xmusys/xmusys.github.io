import * as React from "react"
import Seo from '../components/seo'
import Layout from "../components/layout"
import ResearchEn from "../assets/data/research/research-en.mdx"

export default function ResearchPage() {
    return (
        <Layout>
            <div className="py-8 text-sm whitespace-pre leading-3 text-wrap
            [&_h1]:text-gray-900 [&_h1]:text-3xl [&_h1]:leading-loose [&_h1]:tracking-wide
            [&_h2]:text-gray-900 [&_h2]:text-xl [&_h2]:font-semibold
            [&_p]:text-gray-800 [&_p]:leading-6
            [&_strong]:text-gray-900 [&_strong]:font-semibold
            [&_hr]:my-4
            [&_ul]:list-disc [&_ul]:-mb-4
            [&_li]:ml-8
            [&_a]:text-xmu-blue-70 hover:[&_a]:underline">
                <ResearchEn></ResearchEn>
            </div>
        </Layout>
    )
}

export const Head = () => <Seo title="Research" />