import classes from "./Person.module.scss"
import {InfoCard} from "../InfoCard";
import {Selector} from "../Selector";
import jeremyImg from "../../images/image-jeremy.png"

const personData = {
  name: "Jeremy Robson",
  img: jeremyImg,
}

const Person = ({activeId, setActiveId}) => {
  return (
   <div className={classes.person}>
     <InfoCard {...personData} />
     <Selector
       activeId={activeId}
       setActiveId={setActiveId}
     />
   </div>
  );
}

export {Person}
