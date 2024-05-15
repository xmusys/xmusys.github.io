import * as React from "react"
import Seo from '../components/seo'
import Layout from '../components/layout'


export default function NotFoundPage() {
    return (
        <Layout>
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-4xl font-bold">404: Not Found</h1>
                <p className="text-xl">You just hit a route that doesn&#39;t exist... the sadness.</p>
            </div>
        </Layout>
    )
}

export const Head = () => <Seo title="Not Found" />