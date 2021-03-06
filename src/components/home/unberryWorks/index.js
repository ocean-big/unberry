import Flickity from "react-flickity-component";

// Lottie
import Lottie from "react-lottie";
import shape1 from "../../../assets/json/step1.json";
import shape2 from "../../../assets/json/step2.json";
import shape3 from "../../../assets/json/step3.json";

import "./styles.scss";

function UnberryWorks() {
  const media = window.matchMedia(`(min-width: 768px)`);

  const flickityOptions = {
    freeScroll: media.matches ? false : true,
    contain: true,
    prevNextButtons: media.matches ? false : true,
    pageDots: false,
    draggable: media.matches ? false : true,
  };

  const infoBoxes = [
    {
      number: 1,
      title: "We create your custom screening benchmarks.",
      description: `We do Unberry rounds with your teams, lay out their traits
      and create your custom profile. It'll help find what 'good'
      looks like for each role image`,
      jsonUrl: shape1,
    },
    {
      number: 2,
      title: "Candidates play remotely and get assessed immediately",
      description: `A link with automated Unberry gameplay takes care of
      everything`,
      jsonUrl: shape2,
    },
    {
      number: 3,
      title: "You get detailed reports with relevant, predictive insights.",
      description: `With insights around multi-level traits, make data-driven
      probes during hiring and more informed & faster decisions`,
      jsonUrl: shape3,
    },
  ];
  return (
    <section className="unberry-works-style">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h3 className="title2">
              Here's How Unberry Works. <br /> It’s simply a game changer
            </h3>
          </div>
        </div>

        <div className="row mt--30">
          <div className="col-sm-12">
            <Flickity
              className={"carousel outline-none worksSlider"}
              elementType={"div"}
              options={flickityOptions}
            >
              {infoBoxes.map((data, index) => {
                return (
                  <div className="col-sec" key={index}>
                    <div className="content-box">
                      <div className="info">
                        <div className="number">{data.number}</div>
                        <h4 className="title4">{data.title}</h4>
                        <p className="description">{data.description}</p>
                      </div>
                      <div className="scale-box">
                      <div className="animation-file">
                        <Lottie
                          options={{
                            animationData: data.jsonUrl,
                            loop: true,
                            autoplay: true,
                            rendererSettings: {
                              preserveAspectRatio: "xMidYMid slice",
                            },
                          }}
                        />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Flickity>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UnberryWorks;
