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
              <div className="column is-10 is-offset-1">
                <div className="section">
                  <h3 className="has-text-weight-semibold is-size-2">
                    News vom Hof
                  </h3>
                </div>
              </div>
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
