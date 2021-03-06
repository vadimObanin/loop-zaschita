import {v4 as uuidv4} from "uuid";
import styles from './Cards.module.scss'
import Card from '../card/Card';
import {useState} from 'react';
import {Link} from 'react-router-dom';


function Cards() {

  const [cardsInfo, setCardsInfo] = useState([
    {
      id: 1,
      title: 'Социальный проект:',
      description: "Доступная юридическая помощь, как фактор повышения качества жизни людей",
      color: "#F2F2FF",
      image: "./tree.png",
      link: '/social_project'
    },
    {
      id: 2,
      title: "Наши партнеры",
      description: null,
      color: "#ffe9da",
      image: "./puzzle.png",
      link: '/partners'
    },
    {
      id: 3,
      title: "О нас в СМИ",
      description: null,
      color: "#c6deef",
      image: "./card-mm.jpg",
      link: '/videos'
    }
  ])

  return (
    <div className={styles.cards}>
      <div className={styles.wrap}>
        {
          cardsInfo.map((item) => (
            <Link key={uuidv4()} to={item.link}>
              <Card title={item.title} color={item.color} description={item.description} image={item.image}/>
            </Link>

          ))
        }
      </div>
    </div>
  )
}

export default Cards