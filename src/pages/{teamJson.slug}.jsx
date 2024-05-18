import * as React from 'react'
import { graphql } from 'gatsby'

import { LangContext } from '../contexts/lang-context'

import Seo from '../components/common/seo'
import TeamMemberPage from '../components/team/team-member-page'


export default function MemberEnPage({ data }) {
    const node = data.teamJson

    const memberData = {
        ...node,
        name: node.name.en,
        position: node.position.en,
        about_me: node.about_me.en,
        education: node.education.en,
        major_awards: node.major_awards.en
    }

    return (
        <LangContext.Provider value="en">
            <TeamMemberPage data={memberData}></TeamMemberPage>
        </LangContext.Provider>
    )
}

export const query = graphql`
    query ($id: String) {
        teamJson(id: {eq: $id}) {
            
                    id
                    name {
                        en
                        zh
                    }
                    photo
                    position {
                        en
                        zh
                    }
                    links {
                        type
                        url
                    }
                    about_me {
                        en
                        zh
                    }
                    education {
                        en {
                            degree
                            major
                            period
                        }
                        zh {
                            degree
                            major
                            period
                        }
                    }
                    publications {
                        title
                        authors
                        publication
                        links {
                            type
                            url
                        }
                    }
                    major_awards {
                        en
                        zh
                    }
                
            
        }
    }
`

export const Head = ({ data }) => <Seo title={data.teamJson.name.en} />