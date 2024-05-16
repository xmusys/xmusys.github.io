exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions;

    const teamType = [
        "TeamFaluctyEnJson", 
        "TeamFaluctyZhJson",
        "TeamPostdocEnJson", 
        "TeamPostdocZhJson",
        "TeamPhdStudentsEnJson",
        "TeamPhdStudentsZhJson",
        "TeamMsStudentsEnJson",
        "TeamMsStudentsZhJson",
    ]

    const paperType = [
        "ConferencePapersJson",
        "JournalPapersJson",
    ]

    const newsType = [
        "NewsEnJson",
        "NewsZhJson",
    ]

    const typeDefs = `
        interface News implements Node {
            id: ID!
            date: String
            content: String
        }

        type Education implements Node {
            degree: String
            major: String
            year: String
        }

        type PublicationLinks implements Node {
            paper: String
            slides: String
            code: String
        }

        interface Publication implements Node {
            id: ID!
            title: String
            authors: String
            publication: String
            links: PublicationLinks
        }

        type MemberLink implements Node {
            name: String
            link: String
        }

        interface TeamMember implements Node {
            id: ID!
            name: String
            slug: String
            photo: String
            degree: String
            links: [MemberLink]
            introduce: String
            education: [Education]
            publications: [Publication]
            major_awards: [String]
        }
    `
    + teamType.map(type => `
        type ${type} implements Node {
            name: String
        }

        type ${type} implements TeamMember {
            name: String
            slug: String
            photo: String
            degree: String
            links: [MemberLink]
            introduce: String
            education: [Education]
            publications: [Publication]
            major_awards: [String]
        }
    `).join('\n')
    + paperType.map(type => `
        type ${type} implements Node {
            name: String
        }

        type ${type} implements Publication {
            title: String
            authors: String
            publication: String
            links: PublicationLinks
        }
    `).join('\n');
    + newsType.map(type => `
        type ${type} implements Node {
            name: String
        }

        type ${type} implements News {
            date: String
            content: String
        }
    `).join('\n');
  
    createTypes(typeDefs);
  };