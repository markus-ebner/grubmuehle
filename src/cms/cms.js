import CMS from "netlify-cms-app";
import uploadcare from "netlify-cms-media-library-uploadcare";
import cloudinary from "netlify-cms-media-library-cloudinary";

import AboutPagePreview from "./preview-templates/AboutPagePreview";
import PricePagePreview from "./preview-templates/PricePagePreview";
import BlogPostPreview from "./preview-templates/BlogPostPreview";
import ApartmentPagePreview from "./preview-templates/ApartmentPagePreview";
import IndexPagePreview from "./preview-templates/IndexPagePreview";

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("price", PricePagePreview);
CMS.registerPreviewTemplate("apartment", ApartmentPagePreview);
CMS.registerPreviewTemplate("blog", BlogPostPreview);
