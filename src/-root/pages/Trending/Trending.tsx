import { IoIosNotificationsOutline, IoLogoDesignernews } from 'react-icons/io'
import styles from './Trends.module.css'
import { BsPhone } from 'react-icons/bs'
import { FaBusinessTime, FaCloudsmith, FaMoneyBillAlt, FaPager, FaVideo } from 'react-icons/fa'
import { AiFillDatabase } from 'react-icons/ai'

const Trending = () => {
  return (
    <div className={styles.trend_home}>
       <div className={styles.search}>
        <div className={styles.search_notif}>
          <input type="text" name="" id="" placeholder="Search trends" />
        </div>
        <div>
          <IoIosNotificationsOutline size={27} />
        </div>
      </div>
      <div className={styles.trendings_m}>
        <div className={styles.trend_m}>
          <BsPhone size={30} style={{marginBottom:'1rem'}} color='pink'/>
          <div>
            <p style={{fontWeight:'bold'}}>App Development</p>
          </div>
          <div>
            <small>Marketing Team</small>
          </div>
        </div>
        <div className={styles.trend_m}>
          <IoLogoDesignernews  size={30} style={{marginBottom:'1rem'}} color='green'/>
          <div>
            <p  style={{fontWeight:'bold'}}>Web Design</p>
          </div>
          <div>
            <small>Marketing Team</small>
          </div>
        </div>
        <div className={styles.trend_m}>
          <FaPager size={30} style={{marginBottom:'1rem'}} color='blue' />
          <div>
            <p  style={{fontWeight:'bold'}}>Landing Page</p>
          </div>
          <div>
            <small>Marketing Team</small>
          </div>
        </div>
        <div className={styles.trend_m}>
          <FaBusinessTime size={30} style={{marginBottom:'1rem'}} color='orange'/>
          <div>
            <p  style={{fontWeight:'bold'}}>Business Compare</p>
          </div>
          <div>
            <small>Marketing Team</small>
          </div>
        </div>
        <div className={styles.trend_m}
        >
          
          <FaMoneyBillAlt size={30} style={{marginBottom:'1rem'}} color='purple'/>
          <div>
            <p  style={{fontWeight:'bold'}}>Commerce Checkout</p>
          </div>
          <div>
            <small>Marketing Team</small>
          </div>

        </div>
        <div className={styles.trend_m}>

        <AiFillDatabase size={30} style={{marginBottom:'1rem'}} color='orange'/>
          <div>
            <p  style={{fontWeight:'bold'}}>Data Staging</p>
          </div>
          <div>
            <small>Marketing Team</small>
          </div>
        </div>
        <div className={styles.trend_m}>

        <FaVideo size={30} style={{marginBottom:'1rem'}} color='blue'/>
          <div>
            <p  style={{fontWeight:'bold'}}>Campaign Store</p>
          </div>
          <div>
            <small>Marketing Team</small>
          </div>
        </div>
        <div className={styles.trend_m}>

         <FaCloudsmith size={30} style={{marginBottom:'1rem'}} color='pink'/>
          <div>
            <p  style={{fontWeight:'bold'}}>Acquisition Mitra</p>
          </div>
          <div>
            <small>Marketing Team</small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trending