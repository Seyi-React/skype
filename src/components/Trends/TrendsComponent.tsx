import { MdNotifications } from 'react-icons/md'
import styles from './TrendsComponent.module.css'

const TrendsComponent = () => {
  return (
    <div className={styles.trends}>
         <div className="search-bar">
             <div className="search-notif">
                <input type="text" name="" id="" />
             </div>
             <div>
                <MdNotifications />
             </div>
         </div>
    </div>
  )
}

export default TrendsComponent