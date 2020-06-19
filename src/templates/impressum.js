import React from "react";
import { MainHeading } from "../components/MainHeading";
import { ImpressumText } from "./impressumText";

export const ImpressumPageTemplate = () => {
  return (
    <div>
      <MainHeading title={"Impressum"} url={"/img/außen-frontansicht.jpg"} />
      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <h1 className="title is-size-3 has-text-weight-bold is-bold-light">
                  Impressum
                </h1>
                <ImpressumText />
                <p>
                  Made by{" "}
                  <a href="https://twitter.com/EbnerMarkus49">Ebner Markus</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
