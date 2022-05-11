import classes from "./Selector.module.scss";
import {SelectorItem} from "./SelectorItem"
import {useEffect, useState} from "react";

const sI = [
  {
    id: 1,
    title: "Daily",
    link: "/",
  },
  {
    id: 2,
    title: "Weekly",
    link: "/",
  },
  {
    id: 3,
    title: "Monthly",
    link: "/",
  },
]


const Selector = ({activeId, setActiveId}) => {

  const [selectorItems, setSelectorItems] = useState([]);

  useEffect(() => {
    setSelectorItems(sI)
  }, [])

  return (
   <div className={classes.selector}>
     {selectorItems.map (item => (
       <SelectorItem
         key={item.id}
         {...item}
         active={item.id === activeId}
         setActiveId={setActiveId}
       />
     ))}
   </div>
  );
}

export {Selector}
