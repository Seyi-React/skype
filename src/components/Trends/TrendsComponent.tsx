
import styles from './TrendsComponent.module.css'
import { IoIosNotificationsOutline } from 'react-icons/io'

const TrendsComponent = () => {
  return (
    <div className={styles.trends}>
         <div className={styles.search_bar}>
             <div className={styles.search_notif}>
                <input type="text" name="" id="" placeholder='Search trends' />
             </div>
             <div>
                <IoIosNotificationsOutline size={27} />
             </div>
         </div>
    </div>
  )
}

export default TrendsComponent