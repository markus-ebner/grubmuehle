import React from "react";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

export const Room = ({ main }) => {
  return (
    <span>
      <div className="columns">
        <div className="column is-12">
          <h3 className="has-text-weight-semibold is-size-3">{main.heading}</h3>
          <p>{main.description}</p>
        </div>
      </div>
      <div className="tile is-ancestor">
        <div className="tile is-vertical">
          <div className="tile">
            <div className="tile is-parent is-vertical">
              <article className="tile is-child">
                <PreviewCompatibleImage imageInfo={main.image1} />
              </article>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child">
                <PreviewCompatibleImage imageInfo={main.image2} />
              </article>
            </div>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child">
              <PreviewCompatibleImage imageInfo={main.image3} />
            </article>
          </div>
        </div>
      </div>
    </span>
  );
};
