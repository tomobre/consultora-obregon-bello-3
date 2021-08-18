// @ts-nocheck
import React from "react";

export interface NavbarProps {}

const Jobs: React.SFC<NavbarProps> = () => {
  return (
    <div className="my-60">
      <h3
        data-aos="fade-up"
        className="text-center my-20 text-gray-50 text-xl "
      >
        Proyectos
      </h3>
      <div
        id="jobs"
        className=" text-gray-200 flex justify-center grid grid-cols-2 "
      >
        <div
          data-aos="fade-up"
          className=" border-r-8 flex justify-end rounded-lg grid grid-rows-4"
        >
          <div data-aos="fade-up">
            {" "}
            <div className="flex justify-center">
              {" "}
              <iframe
                className="mx-10"
                width="500"
                height="300"
                src="https://www.youtube.com/embed/8sng7Nxrtqc"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="text-right mx-20">
              <h4 className="text-3xl text-gray-900 bg-gray-50 inline uppercase">
                {" "}
                Lorem ipsum dolor sit amet
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                interdum mauris sed mauris molestie, vel tempor dui ornare.
                Fusce gravida convallis ligula, nec tempor nunc. Donec auctor,
                velit eu sodales porttitor, ipsum nulla luctus turpis, a tempor
                urna augue nec diam. Maecenas id sodales erat, in dictum metus.
                Quisque dictum porttitor risus, at vehicula mauris molestie
                vitae. Duis fringilla laoreet massa. Ut elementum nibh dui, ac
                rhoncus lacus tincidunt a. Vivamus gravida sapien orci, a
                pulvinar ex dignissim eget.
              </p>
            </div>
          </div>
          <div data-aos="fade-up" className="row-start-3">
            {" "}
            <div className="flex justify-center">
              {" "}
              <iframe
                data-aos="fade-up"
                className="mx-10"
                width="500"
                height="300"
                src="https://www.youtube.com/embed/8sng7Nxrtqc"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="text-right mx-20">
              <h4 className="text-3xl text-gray-900 bg-gray-50 inline uppercase">
                {" "}
                Lorem ipsum dolor sit amet
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                interdum mauris sed mauris molestie, vel tempor dui ornare.
                Fusce gravida convallis ligula, nec tempor nunc. Donec auctor,
                velit eu sodales porttitor, ipsum nulla luctus turpis, a tempor
                urna augue nec diam. Maecenas id sodales erat, in dictum metus.
                Quisque dictum porttitor risus, at vehicula mauris molestie
                vitae. Duis fringilla laoreet massa. Ut elementum nibh dui, ac
                rhoncus lacus tincidunt a. Vivamus gravida sapien orci, a
                pulvinar ex dignissim eget.
              </p>
            </div>
          </div>
        </div>
        <div
          className=" border-l-8 flex justify-start rounded-lg  grid grid-rows-4"
          data-aos="fade-up"
        >
          <div data-aos="fade-up" className="row-start-2">
            {" "}
            <div className="flex justify-center">
              {" "}
              <iframe
                className="mx-10"
                width="500"
                height="300"
                src="https://www.youtube.com/embed/8sng7Nxrtqc"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="text-left mx-20">
              <h4 className="text-3xl text-gray-900 bg-gray-50 inline uppercase">
                {" "}
                Lorem ipsum dolor sit amet
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                interdum mauris sed mauris molestie, vel tempor dui ornare.
                Fusce gravida convallis ligula, nec tempor nunc. Donec auctor,
                velit eu sodales porttitor, ipsum nulla luctus turpis, a tempor
                urna augue nec diam. Maecenas id sodales erat, in dictum metus.
                Quisque dictum porttitor risus, at vehicula mauris molestie
                vitae. Duis fringilla laoreet massa. Ut elementum nibh dui, ac
                rhoncus lacus tincidunt a. Vivamus gravida sapien orci, a
                pulvinar ex dignissim eget.
              </p>
            </div>
          </div>
          <div data-aos="fade-up" className="row-start-4">
            {" "}
            <div className="flex justify-center">
              {" "}
              <iframe
                className="mx-10"
                width="500"
                height="300"
                src="https://www.youtube.com/embed/8sng7Nxrtqc"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="text-left mx-20">
              <h4 className="text-3xl text-gray-900 bg-gray-50 inline uppercase">
                {" "}
                Lorem ipsum dolor sit amet
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                interdum mauris sed mauris molestie, vel tempor dui ornare.
                Fusce gravida convallis ligula, nec tempor nunc. Donec auctor,
                velit eu sodales porttitor, ipsum nulla luctus turpis, a tempor
                urna augue nec diam. Maecenas id sodales erat, in dictum metus.
                Quisque dictum porttitor risus, at vehicula mauris molestie
                vitae. Duis fringilla laoreet massa. Ut elementum nibh dui, ac
                rhoncus lacus tincidunt a. Vivamus gravida sapien orci, a
                pulvinar ex dignissim eget.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
