import classes from "./Card.module.scss"
import {ReactComponent as IconDice} from "../../images/icon-dice.svg"

import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {fetchAdvice} from "../../store/adviceSlice";

const Card = () => {
  const dispatch = useDispatch()
  const advice = useSelector(state => state.advice.advice.slip)

  const handleClick = () => {
    dispatch(fetchAdvice())
  }

  return (
   <div className={classes.card}>
     <h3 className={classes.title}>Advice #{advice.id}</h3>
     {/*<div className={classes.text}>"It is easy to sit up and take notice, what's difficult is getting up and taking action."</div>*/}
     <div className={classes.text}>{advice.advice}</div>
     <div className={classes.parent}>
       <div className={classes.child}>
         <div className={classes.img}></div>
       </div>
     </div>
     <div className={classes.dice} onClick={() => handleClick()}>
       <IconDice />
     </div>
   </div>
  );
}

export {Card};