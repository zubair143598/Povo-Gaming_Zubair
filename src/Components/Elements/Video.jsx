import React from "react";

const Video = () => {
  return (
    <div className="video-section">
      <div className="container text-center">
        <div className="col-md-12">
          <video controls  className="mt-5 w-100">
            <source
              src="https://povoneww.s3.ap-southeast-1.amazonaws.com/cs.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Video;
