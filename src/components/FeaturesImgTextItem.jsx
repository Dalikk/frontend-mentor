const styles = {
}

const FeaturesImgTextItem = ({id, img, title, text}) => {
  return (
    <div className="featImgText" >
      <img className="_bckimg" src={img} alt={img.title} />
      <h3 className="featImgText__title">{title}</h3>
      <p className="featImgText__text">{text}</p>
    </div>
  )
}

export default FeaturesImgTextItem