import {v4 as uuidv4} from "uuid";
import styles from './News.module.scss'



export default function News(props) {

  return <div className={styles.wrap}>
    {props.lastnews.map(item => (
        <div className={styles.item} key={uuidv4()}>
         <h3 className={styles.title}>{item.title.length > 100
           ? `${item.title.substr(0, 100)}...`
           : item.title}</h3>
          <p className={styles.date}>{item.date}</p>
        </div>
    ))}
  </div>
}