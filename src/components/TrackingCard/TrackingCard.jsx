import styles from "./TrackingCard.module.scss"
import {ReactComponent as ImgEllipsis} from "../../images/icon-ellipsis.svg"
import {useEffect, useState} from "react";

const TrackingCard = ({title, time, prev, activeId}) => {
  const [styleName, setStyleName] = useState();

  const toLowerCamelCase = (str) => {
    const firstLetter = str[0].toLowerCase().split('')
    const restWord = str.slice(1).replace(" ", "").split('')
    restWord.map(c => firstLetter.push(c))
    return firstLetter.join('')
  }

  const [wtime, setWtime] = useState();
  const [wprev, setWprev] = useState();

  useEffect(() => {
    setStyleName(toLowerCamelCase(title))

  }, [title])

  useEffect(() => {
    switch(activeId) {
      case 1:
        setWtime(time.daily);
        setWprev(prev.daily);
        break;
      case 2:
        setWtime(time.weekly);
        setWprev(prev.weekly);
        break;
      case 3:
        setWtime(time.monthly);
        setWprev(prev.monthly);
        break;
      default:
        setWtime(time.weekly);
        setWprev(prev.weekly);
    }
  }, [activeId])


  return (
    <div className={styles.trackingCard.concat(' ',styles[`trackingCard_${styleName}`])}>
      <div className={styles.content}>
        <header className={styles.header}>
          <h4 className={styles.title}>{title}</h4>
          <ImgEllipsis className={styles.menu}/>
        </header>
        <div className={styles.body}>
          <div className={styles.time}>{wtime}</div>
          <div className={styles.prevPeriod}>{wprev}</div>
        </div>
      </div>
    </div>
  )
    ;
}

export {TrackingCard};