import * as React from 'react'
import { graphql } from 'gatsby'

import Seo from '../../components/seo'
import TeamMemberPage from '../../components/team-member-page'

export default function MemberPage({ data }) {
    return (
        <TeamMemberPage data={data.teamFaluctyEnJson}></TeamMemberPage>
    )
}

export const query = graphql`
    query ($id: String) {
        teamFaluctyEnJson(id: { eq: $id }) {
            name
            photo
            degree
            introduce
            links
            interests
            education {
                degree
                major
                year
            }
            publications {
                title
                authors
                publication
            }
        }
    }
`

export const Head = () => <Seo title="Member" />