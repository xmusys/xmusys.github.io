import * as React from 'react'
import { graphql } from 'gatsby'

import { LangContext } from '../../contexts/lang-context'

import Seo from '../../components/common/seo'
import TeamMemberPage from '../../components/team/team-member-page'

export default function MemberPage({ data }) {
    return (
        <LangContext.Provider value="zh">
            <TeamMemberPage data={data.teamPostdocZhJson}></TeamMemberPage>
        </LangContext.Provider>
    )
}

export const query = graphql`
    query ($id: String) {
        teamPostdocZhJson(id: { eq: $id }) {
            name
            photo
            degree
            links {
                name
                link
            }
            introduce
            education {
                degree
                major
                year
            }
            publications {
                title
                authors
                publication
                links {
                    paper
                    slides
                    code
                }
            }
            major_awards
        }
    }
`

export const Head = () => <Seo title="团队成员" />