import React from "react";
import "./ShowPhotos.css";

export default function ShowPhotos(props) {
  if (props.photos) {
    return (
      <div className="ShowPhotos">
        <section>
          <div className="row">
            {props.photos.map(function (photo, index) {
              return (
                <div className="col-4" key={index}>
                  <a href={photo.src.original} target="-blank">
                    <img
                      src={photo.src.landscape}
                      alt="keywords-images"
                      className="img-fluid"
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    );
  } else {
    return null;
  }
}
