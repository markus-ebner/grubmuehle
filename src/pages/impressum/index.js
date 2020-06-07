import React from "react";

import Layout from "../../components/Layout";
import { ImpressumPageTemplate } from "../../templates/impressum";

export default class ImpressumIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <ImpressumPageTemplate />
      </Layout>
    );
  }
}
