import React from "react";
import PropTypes from "prop-types";
import { PricePageTemplate } from "../../templates/price-page";

const PricePagePreview = ({ entry, getAsset }) => {
  const entryPricingPlans = entry.getIn(["data", "pricing", "plans"]);
  const pricingPlans = entryPricingPlans ? entryPricingPlans.toJS() : [];

  return (
    <PricePageTemplate
      image={getAsset(entry.getIn(["data", "image"]))}
      pricing={{
        heading: entry.getIn(["data", "pricing", "heading"]),
        description: entry.getIn(["data", "pricing", "description"]),
        plans: pricingPlans,
      }}
    />
  );
};

PricePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default PricePagePreview;
