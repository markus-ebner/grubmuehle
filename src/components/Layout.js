import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./all.sass";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div>
      <Helmet>
        <html lang="de" />
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#0088D4" />

        <meta name="robots" content="index, follow" />
        <meta name="author" content="Ebner Markus" />
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="https://ferienhaus-grubmuehle.at/" />
        <meta
          property="business:contact_data:street_address"
          content="Grubmühlenweg 8"
        />
        <meta property="business:contact_data:locality" content="St. Urban" />
        <meta property="business:contact_data:region" content="Kärnten" />
        <meta property="business:contact_data:postal_code" content="9554" />
        <meta
          property="business:contact_data:country_name"
          content="Österreich"
        />
        <meta
          property="og:image"
          content={"https://ferienhaus-grubmuehle.at/img/og-image.jpg"}
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://ferienhaus-grubmühle.at/"
        />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta
          property="twitter:image"
          content="https://ferienhaus-grubmuehle.at/img/og-image.jpg"
        />
      </Helmet>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default TemplateWrapper;
