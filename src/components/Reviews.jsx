import Review from "./Review"
import picEmily from "../assets/image-emily.jpg"
import picThomas from "../assets/image-thomas.jpg"
import picJennie from "../assets/image-jennie.jpg"

const reviewContent = [
  {
    id: 1,
    pic: picEmily,
    text: "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
    author: {
      name: "Emily R.",
      pos: "Marketing Director",
    },
  },
  {
    id: 2,
    pic: picThomas,
    text: "Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.",
    author: {
      name: "Thomas S.",
      pos: "Chief Operating Officer",
    },
  },
  {
    id: 3,
    pic: picJennie,
    text: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
    author: {
      name: "Jennie F.",
      pos: "Business Owner",
    },
  },
]

const Reviews = () => {
  return (
    <div className="container">
      <div className="reviews">
        <h1 className="reviews__title">Client testimonials</h1>
        <div className="reviews__content">
          {reviewContent.map(review => (
            <Review key={review.id} {...review} />
          ))}
          {/* <Review {...reviewContent[0]} /> */}
        </div>
      </div>
    </div>
  )
}

export default Reviews