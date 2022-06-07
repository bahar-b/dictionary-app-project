import React from "react";

export default function ShowPhotos(props) {
  console.log(props.photos);
  if (props.photos) {
    return (
        <div className="ShowPhotos">
            hello
        </div>
    );
  } else {
    return null;
  }
}
