import classes from "./InfoCard.module.scss"

const InfoCard = ({name, img}) => {
  return (
   <div className={classes.infoCard}>
     <img className={classes.photo} src={img} alt="profile-img"/>
     <div className={classes.text}>
       <p className={classes.subtitle}>Report for</p>
       <h3 className={classes.title}>{name}</h3>
     </div>
   </div>
  );
}

export {InfoCard}
