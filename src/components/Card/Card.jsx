import classes from "./Card.module.scss"
import {ReactComponent as IconDice} from "../../images/icon-dice.svg"

const Card = ({ id, advice }) => {
  return (
   <div className={classes.card}>
     <h3 className={classes.title}>Advice #117</h3>
     <div className={classes.text}>"It is easy to sit up and take notice, what's difficult is getting up and taking action."</div>
     <div className={classes.parent}>
       <div className={classes.child}>
         <div className={classes.img}></div>
       </div>
     </div>
     <div className={classes.dice}>
       <IconDice />
     </div>
   </div>
  );
}

export {Card};