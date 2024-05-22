exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions;

    const typeDefs = `
        type StringLang implements Node {
            en: String
            zh: String
        }

        type StringArrayLang implements Node {
            en: [String]
            zh: [String]
        }

        type EducationLang implements Node {
            en: [Education]
            zh: [Education]
        }

        type Link implements Node {
            type: String
            url: String
        }

        type Publication implements Node {
            paper_id: String
            title: String
            authors: String
            publication: String
            links: [Link]
        }

        type PersonalPublication implements Node {
            group: [String]
            personal: [Publication]
        }

        interface Paper implements Node {
            id: ID!
            paper_id: String
            title: String
            authors: String
            publication: String
            links: [Link]
        }

        type Education implements Node {
            degree: String
            major: String
            period: String
        }

        type TeamJson implements Node {
            name: StringLang
            slug: String
            photo: String
            degree: String
            position: StringLang
            links: [Link]
            about_me: StringLang
            education: EducationLang
            publications: PersonalPublication
            major_awards: StringArrayLang
        }

        type AlumniJson implements Node {
            name: StringLang
            degree: StringLang
            year: String
            first_job: StringLang
        }

        type ConferencePapersJson implements Node {
            name: String
        }

        type ConferencePapersJson implements Paper {
            title: String
            authors: String
            publication: String
            links: [Link]
        }

        type JournalPapersJson implements Node {
            name: String
        }

        type JournalPapersJson implements Paper {
            title: String
            authors: String
            publication: String
            links: [Link]
        }

        type NewsJson implements Node {
            date: String
            content: StringLang
        }
    `

    createTypes(typeDefs);
  };