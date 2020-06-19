import React from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";
import { MainHeading } from "../../components/MainHeading";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <MainHeading title="News vom Hof" url="/img/außen_vorne_hell.jpg" />
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
