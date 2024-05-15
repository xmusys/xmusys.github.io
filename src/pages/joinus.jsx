import * as React from "react"
import Seo from '../components/seo'
import Layout from "../components/layout"
import EmailIcon from "../icons/email-icon"
import PhoneIcon from "../icons/phone-icon"
import PositionIcon from "../icons/position-icon"
import JoinUsEn from "../assets/data/join-us/join-us-en.mdx"


export default function JoinUsPage() {
    return (
        <Layout>
            <div className="py-8 text-lg whitespace-pre leading-4 text-wrap
            [&_h1]:text-gray-900 [&_h1]:text-3xl [&_h1]:leading-relaxed [&_h1]:tracking-wide
            [&_p]:text-gray-800 [&_p]:leading-6
            [&_strong]:text-gray-900 [&_strong]:font-semibold
            [&_hr]:my-4 
            [&_svg]:mx-2 md:[&_svg]:mx-4
            [&_li]:list-disc [&_li]:ml-4 [&_li]:leading-6 md:[&_li]:ml-8
            [&_a]:text-xmu-blue-70 hover:[&_a]:underline">
                <JoinUsEn components={{EmailIcon, PhoneIcon, PositionIcon}}></JoinUsEn>
            </div>
        </Layout>
    )
}

export const Head = () => <Seo title="Join Us" />
