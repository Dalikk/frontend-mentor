import styles from "./Selector.module.scss"

const SelectorItem = ({id, title, active, setActiveId}) => {

  return (
   <div
     onClick={() => setActiveId(id)}
     className={active ? styles.selectorItem.concat(" ", styles.active) : styles.selectorItem}
   >
     {title}
   </div>
  );
}

export {SelectorItem};