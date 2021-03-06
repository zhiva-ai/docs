import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout/Layout";
import { OpenAPI } from "../services/OpenAPI";
import { OpenAPISpec } from "../types/OpenAPISpec";
import DocHead from "../components/Layout/DocHead";
import {getLatestSemver} from "../utils";

interface Props {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string;
        description: string;
        category: string;
        date: string;
      };
      fields: {
        slug: string;
      };
      html: string;
    };
    openapiYaml: {
      info: {
        contact: {
          email: string;
          url: string;
        };
        description: string;
        termsOfService: string;
        title: string;
        version: string;
      };
      openapi: string;
      x_tagGroups: {
        name: string;
        tags: {
          name: string;
          slug: string;
        };
        slug: string;
      }[];
      spec: string;
      slug: string;
      tags: {
        description: string;
        name: string;
      };
    };
    allOpenapiYaml: {
      nodes: [
        {
          info: {
            version: string;
          };
          slug: string;
        }
      ]
    };
    site: {
      siteMetadata: {
        categories: {
          name: string;
          key: string;
        }[];
      };
    };
  };
}

// markup
export default function PageTemplate({ data }: Props) {
  const {
    markdownRemark,
    openapiYaml,
    allOpenapiYaml,
    site: {
      siteMetadata: { categories },
    },
  } = data;
  const { frontmatter, html } = markdownRemark;
  const latestVersion = getLatestSemver(allOpenapiYaml.nodes.map((openapi) => openapi.info.version));
  const openApiStore = new OpenAPI({
    spec: JSON.parse(openapiYaml.spec) as any as OpenAPISpec,
    versionSlug: openapiYaml.info.version === latestVersion ? 'latest' : openapiYaml.slug,
  });
  const selectedCategory = categories.find(
    (cat) => cat.key === frontmatter?.category
  );
  return (
    <Layout
      selectedVersion={openapiYaml.slug}
      selectedPage={markdownRemark.fields.slug}
      openApiStore={openApiStore}
    >
      <div className="blog-post-container">
        <DocHead
          title={
            frontmatter.title +
            " - " +
            selectedCategory.name +
            " - v" +
            openapiYaml.info.version
          }
          description={frontmatter.description}
        />
        <div className="blog-post" style={{padding: '0 24px'}}>
          <h1>{frontmatter.title}</h1>
          <h4>{frontmatter.date}</h4>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query PageBySlug($markdownid: String!, $verid: String!) {
    markdownRemark(id: { eq: $markdownid }) {
      html
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        category
        description
      }
    }
    openapiYaml(id: { eq: $verid }) {
      info {
        contact {
          email
          url
        }
        description
        termsOfService
        title
        version
      }
      openapi
      x_tagGroups {
        name
        section
        tags {
          name
          slug
        }
        slug
      }
      spec
      slug
      tags {
        description
        name
      }
    }
    allOpenapiYaml {
      nodes {
        info {
          version
        }
        slug
      }
    }
    site {
      siteMetadata {
        categories {
          name
          key
        }
      }
    }
  }
`;
