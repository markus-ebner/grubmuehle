import React from "react";
import { navigate } from "gatsby-link";
import Layout from "../../components/Layout";
import { MainHeading } from "../../components/MainHeading";
import { Helmet } from "react-helmet";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error));
  };

  render() {
    return (
      <Layout>
        {/* <Helmet>
          <script type="application/ld+json">
            {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "url": "https://www.spookytech.com",
              "name": "Spooky technologies",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+5-601-785-8543",
                "contactType": "Customer Support"
              }
            }
          `}
          </script>
        </Helmet> */}
        <MainHeading
          title={"Kontakt"}
          url={"/img/fluss_andere_seite_garten_haus.jpg"}
        />
        <section className="section">
          <div className="container">
            <div className="content">
              <div className="columns">
                <div className="column is-10 is-offset-1">
                  <div className="section">
                    <h3 className="has-text-weight-semibold is-size-2">
                      Kontaktdaten
                    </h3>
                    <p>
                      Claudia Sonvilla
                      <br />
                      Grubmühlenweg 8
                      <br />
                      9554 St. Urban
                      <br />
                      Österreich
                    </p>
                    <p>
                      Tel: +43 650/4726353
                      <br />
                      E-Mail:{" "}
                      <a href="mailto:sonvilla.claudia@aon.at?subject=Urlaub im Haus Grubmühle">
                        sonvilla.claudia@aon.at
                      </a>
                    </p>
                  </div>
                  <div className="maps-container">
                    <iframe
                      title="Maps"
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d89182.59953605272!2d14.085073342092313!3d46.668213671187985!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4770652fa8b6a01d%3A0x7ae20bafb94af62d!2sGrubm%C3%BChlenweg%208%2C%209554%20Agsdorf-Gegend!5e0!3m2!1sde!2sat!4v1593013051238!5m2!1sde!2sat"
                      frameBorder="0"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      aria-hidden="false"
                    ></iframe>
                  </div>
                  <!--
                  <div className="section">
                    <h1 className="title is-size-3 has-text-weight-bold is-bold-light">
                      Kontaktformular
                    </h1>
                    <form
                      name="contact"
                      method="post"
                      action="/contact/thanks/"
                      data-netlify="true"
                      data-netlify-honeypot="bot-field"
                      onSubmit={this.handleSubmit}
                    >
                      {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                      <input
                        type="hidden"
                        name="form-name"
                        value="contact"
                        aria-label="Hidden"
                      />
                      <div hidden>
                        <label>
                          Don’t fill this out:{" "}
                          <input
                            aria-label="Hidden"
                            name="bot-field"
                            onChange={this.handleChange}
                          />
                        </label>
                      </div>
                      <div className="field">
                        <label className="label" htmlFor={"name"}>
                          Dein Name
                        </label>
                        <div className="control">
                          <input
                            aria-label="Dein Name"
                            className="input"
                            type={"text"}
                            name={"name"}
                            onChange={this.handleChange}
                            id={"name"}
                            required={true}
                          />
                        </div>
                      </div>
                      <div className="field">
                        <label className="label" htmlFor={"email"}>
                          E-Mail
                        </label>
                        <div className="control">
                          <input
                            className="input"
                            type={"email"}
                            name={"email"}
                            onChange={this.handleChange}
                            id={"email"}
                            required={true}
                            aria-label="Mail Adresse"
                          />
                        </div>
                      </div>
                      <div className="field">
                        <label className="label" htmlFor={"message"}>
                          Nachricht
                        </label>
                        <div className="control">
                          <textarea
                            className="textarea"
                            name={"message"}
                            onChange={this.handleChange}
                            id={"message"}
                            required={true}
                            aria-label="Nachricht"
                          />
                        </div>
                      </div>
                      <div className="field">
                        <button className="button is-link" type="submit">
                          Senden
                        </button>
                      </div>
                    </form>
                  </div>
                -->
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
