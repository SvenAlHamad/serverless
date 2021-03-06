import React from "react";
import { StaticQuery, graphql } from "gatsby";

import SEO from "../components/seo";

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query AboutPageQuery {
        allMarkdownRemark(
          limit: 10
          filter: { frontmatter: { title: { eq: "Homepage" } } }
        ) {
          edges {
            node {
              frontmatter {
                title
              }
              html
            }
          }
        }
      }
    `}
    render={data => {
      const content = data.allMarkdownRemark.edges[0].node;
      return (
        <>
          <SEO
            title="What is Serverless?"
            keywords={[`serverless`, `cloud`, `cloud functions`]}
          />
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: content.html }}
          />
        </>
      );
    }}
  />
);
