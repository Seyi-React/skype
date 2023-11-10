import { BsPhone } from "react-icons/bs";
import {FaBusinessTime, FaPager} from 'react-icons/fa'
import styles from "./TrendsComponent.module.css";
import { IoIosNotificationsOutline, IoLogoDesignernews } from "react-icons/io";

const TrendsComponent = () => {
  return (
    <div className={styles.trends}>
      <div className={styles.search_bar}>
        <div className={styles.search_notif}>
          <input type="text" name="" id="" placeholder="Search trends" />
        </div>
        <div>
          <IoIosNotificationsOutline size={27} />
        </div>
      </div>
      <div className={styles.trendings}>
        <div className={styles.trend}>
          <BsPhone size={30} style={{marginBottom:'1rem'}} color='pink'/>
          <div>
            <p style={{fontWeight:'bold'}}>App Development</p>
          </div>
          <div>
            <small>Marketing Team</small>
          </div>
        </div>
        <div className={styles.trend}>
          <IoLogoDesignernews  size={30} style={{marginBottom:'1rem'}} color='green'/>
          <div>
            <p  style={{fontWeight:'bold'}}>Web Design</p>
          </div>
          <div>
            <small>Marketing Team</small>
          </div>
        </div>
        <div className={styles.trend}>
          <FaPager size={30} style={{marginBottom:'1rem'}} color='blue' />
          <div>
            <p  style={{fontWeight:'bold'}}>Landing Page</p>
          </div>
          <div>
            <small>Marketing Team</small>
          </div>
        </div>
        <div className={styles.trend}>
          <FaBusinessTime size={30} style={{marginBottom:'1rem'}} color='orange'/>
          <div>
            <p  style={{fontWeight:'bold'}}>Business Compare</p>
          </div>
          <div>
            <small>Marketing Team</small>
          </div>
        </div>
        <div className={styles.trend}></div>
        <div className={styles.trend}></div>
        <div className={styles.trend}></div>
        <div className={styles.trend}></div>
      </div>
    </div>
  );
};

export default TrendsComponent;
