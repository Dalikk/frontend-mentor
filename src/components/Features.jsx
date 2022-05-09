import FeaturesTextItem from "./FeaturesTextItem"
import FeaturesImgTextItem from "./FeaturesImgTextItem"
import transformImg from "../assets/desktop/image-transform.jpg"
import standoutImg from "../assets/desktop/image-stand-out.jpg"
import graphicImg from "../assets/desktop/image-graphic-design.jpg"
import photographyImg from "../assets/desktop/image-photography.jpg"


const contents = [
  {
    id: 1,
    title: "Transform your brand",
    text: "We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you",
    link: {
      text: "Learn more",
      href: "/",
    }
  },
  {
    id: 2,
    img: transformImg,
  },
  {
    id: 3,
    img: standoutImg,
  },
  {
    id: 4,
    title: "Stand out to the right audience",
    text: "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.",
    link: {
      text: "Learn more",
      href: "/",
    },
  },
  {
    id: 5,
    img: graphicImg,
    title: "Graphic Design",
    text: "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention.",
  },
  {
    id: 6,
    img: photographyImg,
    title: "Photography",
    text: "Increase your credibility by getting the most stunning, high-quality photos that improve your business image.",
  },
]

const Features = () => {
  return (
    <div className="container">
      <div className="feat">
        <div className="feat__item">
          <FeaturesTextItem {...contents[0]} />
        </div>
        <div className="feat__item">
          <div className="feat__img">
            <img className="_bckimg" src={transformImg} alt="egg" />
          </div>
        </div>
        <div className="feat__item">
          <div className="feat__img ">
            <img className="_bckimg" src={standoutImg} alt="stand out" />
          </div>
        </div>
        <div className="feat__item">
          <FeaturesTextItem {...contents[3]} />
        </div>
        <div className="feat__item">
          <FeaturesImgTextItem {...contents[4]} />
        </div>
        <div className="feat__item">
          <FeaturesImgTextItem {...contents[5]} />
        </div>
      </div>
    </div>
  )
}

export default Features