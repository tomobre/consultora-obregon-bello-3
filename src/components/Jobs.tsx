// @ts-nocheck
import React from "react";

export interface NavbarProps {}

const VideoSlider = () => {
  const videos = [
    {
      video: "https://www.youtube.com/embed/INZBjxEETZ8",
      title: "1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamu  interdum mauris sed mauris molestie, vel tempor dui ornare. Fusce gravida convallis ligula, nec tempor nunc. Donec auctor,velit eu sodales porttitor, ipsum nulla luctus turpis, a temporurna augue nec diam. Maecenas id sodales erat, in dictum metus.Quisque dictum porttitor risus, at vehicula mauris molestievitae. Duis fringilla laoreet massa. Ut elementum nibh dui, ac rhoncus lacus tincidunt a. Vivamus gravida sapien orci,    pulvinar ex dignissim eget.",
    },
    {
      video: "https://www.youtube.com/embed/fK6Thie-BRI",
      title: "2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamu  interdum mauris sed mauris molestie, vel tempor dui ornare. Fusce gravida convallis ligula, nec tempor nunc. Donec auctor,velit eu sodales porttitor, ipsum nulla luctus turpis, a temporurna augue nec diam. Maecenas id sodales erat, in dictum metus.Quisque dictum porttitor risus, at vehicula mauris molestievitae. Duis fringilla laoreet massa. Ut elementum nibh dui, ac rhoncus lacus tincidunt a. Vivamus gravida sapien orci,    pulvinar ex dignissim eget.",
    },
    {
      video: "https://www.youtube.com/embed/X5jelHuzlH0",
      title: "3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamu  interdum mauris sed mauris molestie, vel tempor dui ornare. Fusce gravida convallis ligula, nec tempor nunc. Donec auctor,velit eu sodales porttitor, ipsum nulla luctus turpis, a temporurna augue nec diam. Maecenas id sodales erat, in dictum metus.Quisque dictum porttitor risus, at vehicula mauris molestievitae. Duis fringilla laoreet massa. Ut elementum nibh dui, ac rhoncus lacus tincidunt a. Vivamus gravida sapien orci,    pulvinar ex dignissim eget.",
    },
    {
      video: "https://www.youtube.com/embed/4rczwreN_9E",
      title: "4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamu  interdum mauris sed mauris molestie, vel tempor dui ornare. Fusce gravida convallis ligula, nec tempor nunc. Donec auctor,velit eu sodales porttitor, ipsum nulla luctus turpis, a temporurna augue nec diam. Maecenas id sodales erat, in dictum metus.Quisque dictum porttitor risus, at vehicula mauris molestievitae. Duis fringilla laoreet massa. Ut elementum nibh dui, ac rhoncus lacus tincidunt a. Vivamus gravida sapien orci,    pulvinar ex dignissim eget.",
    },
    {
      video: "https://www.youtube.com/embed/aho_Dtmckm0",
      title: "5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamu  interdum mauris sed mauris molestie, vel tempor dui ornare. Fusce gravida convallis ligula, nec tempor nunc. Donec auctor,velit eu sodales porttitor, ipsum nulla luctus turpis, a temporurna augue nec diam. Maecenas id sodales erat, in dictum metus.Quisque dictum porttitor risus, at vehicula mauris molestievitae. Duis fringilla laoreet massa. Ut elementum nibh dui, ac rhoncus lacus tincidunt a. Vivamus gravida sapien orci,    pulvinar ex dignissim eget.",
    },
    {
      video: "https://www.youtube.com/embed/tpgYm7IiSDM",
      title: "6",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamu  interdum mauris sed mauris molestie, vel tempor dui ornare. Fusce gravida convallis ligula, nec tempor nunc. Donec auctor,velit eu sodales porttitor, ipsum nulla luctus turpis, a temporurna augue nec diam. Maecenas id sodales erat, in dictum metus.Quisque dictum porttitor risus, at vehicula mauris molestievitae. Duis fringilla laoreet massa. Ut elementum nibh dui, ac rhoncus lacus tincidunt a. Vivamus gravida sapien orci,    pulvinar ex dignissim eget.",
    },
  ];

  const [current, setCurrent] = React.useState(0);
  const length = videos.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? -1 : current - 1);
  };

  return (
    <section className="relative flex justify-center items-center">
      <div
        onClick={prevSlide}
        className="absolute left-12 text-4xl  top-12 text-white z-10 cursor-pointer select-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
          />
        </svg>
      </div>
      <div
        className="absolute right-12 top-12 text-4xl text-white z-10 cursor-pointer select-none"
        onClick={nextSlide}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      {videos.map((vid, index) => {
        return (
          <div
            className={`  ${index === current ? "slide active" : "slide"}`}
            key={index}
          >
            {" "}
            {index === current && (
              <div>
                <div className="flex justify-end mx-10">
                  <iframe
                    className="mx-10"
                    width="250"
                    height="150"
                    src={vid.video}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="text-left mx-20">
                  <h4 className="text-xl  text-gray-900 bg-gray-50 inline uppercase">
                    {vid.title}
                  </h4>
                  <p className="text-xs">{vid.description}</p>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
};

const Jobs: React.SFC<NavbarProps> = () => {
  return (
    <div className="my-60 container mx-auto w-2/3">
      <h3
        data-aos="fade-up"
        className="text-center my-20 text-gray-50 text-xl "
      >
        Proyectos
      </h3>
      <div
        id="jobs"
        className=" text-gray-200 flex justify-center grid md:grid-cols-2 "
      >
        <div data-aos="fade-up" className="md:hidden block">
          <VideoSlider></VideoSlider>
        </div>
        <div
          data-aos="fade-up"
          className="md:grid hidden border-r-8 flex justify-end rounded-lg grid grid-rows-4"
        >
          <div data-aos="fade-up">
            {" "}
            <div className="flex justify-end mx-10">
              {" "}
              <iframe
                className="mx-10"
                width="500"
                height="300"
                src="https://www.youtube.com/embed/INZBjxEETZ8"
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
            <div className="flex  justify-end mx-10">
              {" "}
              <iframe
                data-aos="fade-up"
                className="mx-10"
                width="500"
                height="300"
                src="https://www.youtube.com/embed/fK6Thie-BRI"
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
          className="md:grid hidden border-l-8 flex justify-start rounded-lg  grid grid-rows-4"
          data-aos="fade-up"
        >
          <div data-aos="fade-up" className="row-start-2">
            {" "}
            <div className="flex justify-start mx-10">
              {" "}
              <iframe
                className="mx-10"
                width="500"
                height="300"
                src="https://www.youtube.com/embed/X5jelHuzlH0"
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
            <div className="flex justify-start mx-10">
              {" "}
              <iframe
                className="mx-10"
                width="500"
                height="300"
                src="https://www.youtube.com/embed/4rczwreN_9E"
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
