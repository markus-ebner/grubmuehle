import React from "react";
import { navigate } from "gatsby-link";
import Layout from "../../components/Layout";
import { MainHeading } from "../../components/MainHeading";

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
                    <h1 className="title is-size-3 has-text-weight-bold is-bold-light">
                      Kontaktdaten
                    </h1>
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
                      <a href="mailto:claudia.sonvilla@aon.at?subject=Urlaub im Haus Grubmühle">
                        claudia.sonvilla@aon.at
                      </a>
                    </p>
                  </div>
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
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
