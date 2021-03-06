import {BrowserRouter as Router, Link} from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'
import {useParams} from 'react-router-dom'
import styles from './NewsContent.module.scss'
import EditIcon from '@material-ui/icons/Edit'
import Chip from '@material-ui/core/Chip'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import Slider from './slider/Slider'
import {useContext, useState} from 'react'
import {AddNews} from '../../../dashboard/components/AddNews/AddNews'
import {AuthContext} from '../../../../context/AuthContext'
import {useAuth} from '../../../../hooks/auth.hook'

export default function NewsContent({news, incCount}) {
  const {id} = useParams()
  const [showEditWindow, setShowEditWindow] = useState(false)
  const auth = useContext(AuthContext)
  const {token, login, logout, role} = useAuth()
  const isAuthenticated = !!token
  const [hideDeleteChip, setHideDeleteChip] = useState(false)
  const [count, setCount] = useState(0)
  const editNews = () => {
    setShowEditWindow(!showEditWindow)
  }

  const hideDeleteChipHandler = () => {
    setHideDeleteChip(!hideDeleteChip)
  }

  const deleteNews = (id) => {
    let item = {
      id: id
    }
    fetch('/api/delete', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(item)
    })
      .then((response) => {
        return response.json()
      })
      .then((data) => {
      })
      .then(
        incCount()
      )
  }

  useState(() => {

  }, [count])

  return <div>
    {news.filter((item) => item.id === +id).map(item => (
      <div className={styles.wrap} key={uuidv4()}>
        {showEditWindow ?
          (<div className={styles.editNews}>
            <AddNews count={incCount} show={setShowEditWindow} id={item.id} title={item.title}
                     description={item.description} images={item.images}/>
          </div>) :
          (<div>
                <span onClick={incCount}><Link to="/news">
                    Вернуться к новостям
                </Link>
                </span>

            <div className={styles.el}>
              <h1 className={styles.title}>{item.title}</h1>
              {isAuthenticated ? <div className={styles.edit}>
                <EditIcon onClick={() => editNews(item.id)} className={styles.icon}/>
                <DeleteForeverIcon onClick={hideDeleteChipHandler} className={styles.icon}/>
                {hideDeleteChip ? (<div
                  className={styles.confirmdelition}
                >
                  <div className={styles.wrapchip}>
                    <Link to="/news">
                      <Chip
                        onClick={() => deleteNews(item.id)}
                        size="small"
                        label="Удалить новость"
                        color="secondary"
                      />
                    </Link>
                  </div>
                </div>) : null}
              </div> : null}
            </div>
            {
              item.images.length > 1
                ? <div className={styles.slider}>
                  <Slider images={item.images}/>
                </div>
                : null
            }

            {item.description.split('\n').map(paragraph => {
              return <p key={uuidv4()} className={styles.description}>{paragraph}</p>
            })}
            <p className={styles.date}>{item.date}</p>
          </div>)}
      </div>
    ))}
  </div>
}