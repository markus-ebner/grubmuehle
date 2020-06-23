import React from "react";
import PropTypes from "prop-types";
import { PricePageTemplate } from "../../templates/price-page";

const PricePagePreview = ({ entry, widgetFor, getAsset }) => {
  const entryPricingPlans = entry.getIn(["data", "pricing", "plans"]);
  const pricingPlans = entryPricingPlans ? entryPricingPlans.toJS() : [];

  return (
    <PricePageTemplate
      title={entry.getIn(["data", "title"])}
      image={getAsset(entry.getIn(["data", "image"]))}
      pricing={{
        heading: entry.getIn(["data", "pricing", "heading"]),
        description: entry.getIn(["data", "pricing", "description"]),
        plans: pricingPlans,
      }}
      content={widgetFor("body")}
    />
  );
};

PricePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
  getAsset: PropTypes.func,
};

export default PricePagePreview;
