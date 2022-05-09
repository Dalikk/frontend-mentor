const styles = {
  paddingLeft: {
    padding: "156px 100px 150px 165px",
  },
  paddingRight: {
    padding: "156px 165px 150px 100px",
  }
}

const FeaturesTextItem = ({id, title, text, link}) => {

  return (
    // style={id === 1 ? styles.paddingLeft : styles.paddingRight}
    <div className={`featText ${id === 1 ? "featText_paddingLeft" : "featText_paddingRight"}`}>
      <h3>{title}</h3>
      <p>{text}</p>
      <div className="featText__link">
        <a href={link.href}>{link.text}</a>    
      </div>
    </div>
  )
}

export default FeaturesTextItem