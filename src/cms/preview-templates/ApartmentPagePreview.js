import React from "react";
import PropTypes from "prop-types";
import { ApartmentPageTemplate } from "./../../templates/apartment-page";

const ApartmentPagePreview = ({ entry, getAsset }) => {
  const entryBlurbs = entry.getIn(["data", "intro", "blurbs"]);
  const blurbs = entryBlurbs ? entryBlurbs.toJS() : [];
  const entryPricingPlans = entry.getIn(["data", "pricing", "plans"]);
  const pricingPlans = entryPricingPlans ? entryPricingPlans.toJS() : [];

  return (
    <ApartmentPageTemplate
      image={getAsset(entry.getIn(["data", "image"]))}
      title={entry.getIn(["data", "title"])}
      heading={entry.getIn(["data", "heading"])}
      description={entry.getIn(["data", "description"])}
      intro={{ blurbs }}
      main={{
        heading: entry.getIn(["data", "main", "heading"]),
        description: entry.getIn(["data", "main", "description"]),
        image1: {
          image: getAsset(entry.getIn(["data", "main", "image1", "image"])),
          alt: entry.getIn(["data", "main", "image1", "alt"]),
        },
        image2: {
          image: getAsset(entry.getIn(["data", "main", "image2", "image"])),
          alt: entry.getIn(["data", "main", "image2", "alt"]),
        },
        image3: {
          image: getAsset(entry.getIn(["data", "main", "image3", "image"])),
          alt: entry.getIn(["data", "main", "image3", "alt"]),
        },
      }}
      main2={{
        heading: entry.getIn(["data", "main2", "heading"]),
        description: entry.getIn(["data", "main2", "description"]),
        image1: {
          image: getAsset(entry.getIn(["data", "main2", "image1", "image"])),
          alt: entry.getIn(["data", "main2", "image1", "alt"]),
        },
        image2: {
          image: getAsset(entry.getIn(["data", "main2", "image2", "image"])),
          alt: entry.getIn(["data", "main2", "image2", "alt"]),
        },
        image3: {
          image: getAsset(entry.getIn(["data", "main2", "image3", "image"])),
          alt: entry.getIn(["data", "main2", "image3", "alt"]),
        },
      }}
      main3={{
        heading: entry.getIn(["data", "main3", "heading"]),
        description: entry.getIn(["data", "main3", "description"]),
        image1: {
          image: getAsset(entry.getIn(["data", "main3", "image1", "image"])),
          alt: entry.getIn(["data", "main3", "image1", "alt"]),
        },
        image2: {
          image: getAsset(entry.getIn(["data", "main3", "image2", "image"])),
          alt: entry.getIn(["data", "main3", "image2", "alt"]),
        },
        image3: {
          image: getAsset(entry.getIn(["data", "main3", "image3", "image"])),
          alt: entry.getIn(["data", "main3", "image3", "alt"]),
        },
      }}
      main4={{
        heading: entry.getIn(["data", "main4", "heading"]),
        description: entry.getIn(["data", "main4", "description"]),
        image1: {
          image: getAsset(entry.getIn(["data", "main4", "image1", "image"])),
          alt: entry.getIn(["data", "main4", "image1", "alt"]),
        },
        image2: {
          image: getAsset(entry.getIn(["data", "main4", "image2", "image"])),
          alt: entry.getIn(["data", "main4", "image2", "alt"]),
        },
        image3: {
          image: getAsset(entry.getIn(["data", "main4", "image3", "image"])),
          alt: entry.getIn(["data", "main4", "image3", "alt"]),
        },
      }}
      main5={{
        heading: entry.getIn(["data", "main5", "heading"]),
        description: entry.getIn(["data", "main5", "description"]),
        image1: {
          image: getAsset(entry.getIn(["data", "main5", "image1", "image"])),
          alt: entry.getIn(["data", "main5", "image1", "alt"]),
        },
        image2: {
          image: getAsset(entry.getIn(["data", "main5", "image2", "image"])),
          alt: entry.getIn(["data", "main5", "image2", "alt"]),
        },
        image3: {
          image: getAsset(entry.getIn(["data", "main5", "image3", "image"])),
          alt: entry.getIn(["data", "main5", "image3", "alt"]),
        },
      }}
      fullImage={entry.getIn(["data", "full_image"])}
      pricing={{
        heading: entry.getIn(["data", "pricing", "heading"]),
        description: entry.getIn(["data", "pricing", "description"]),
        plans: pricingPlans,
      }}
    />
  );
};

ApartmentPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default ApartmentPagePreview;
