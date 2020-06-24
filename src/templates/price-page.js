import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Pricing from "../components/Pricing";
import { MainHeading } from "../components/MainHeading";

export const PricePageTemplate = ({ image, pricing }) => {
  return (
    <div>
      <MainHeading
        title={"Preise"}
        url={!!image.childImageSharp ? image.childImageSharp.fluid.src : image}
      />
      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <h2 className="has-text-weight-semibold is-size-2">
                  {pricing.heading}
                </h2>
                <p className="is-size-5">{pricing.description}</p>
                <Pricing data={pricing.plans} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

PricePageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array,
  }),
};

const PricePage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <PricePageTemplate
        image={post.frontmatter.image}
        pricing={post.frontmatter.pricing}
      />
    </Layout>
  );
};

PricePage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default PricePage;

export const pricePageQuery = graphql`
  query PricePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        pricing {
          heading
          description
          plans {
            description
            items
            plan
            price
          }
        }
      }
    }
  }
`;
