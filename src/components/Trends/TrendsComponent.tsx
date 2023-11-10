import { BsPhone } from "react-icons/bs";
import {FaBusinessTime, FaCloudsmith, FaMoneyBillAlt, FaPager, FaVideo} from 'react-icons/fa'
import styles from "./TrendsComponent.module.css";
import { IoIosNotificationsOutline, IoLogoDesignernews } from "react-icons/io";
import { AiFillDatabase } from "react-icons/ai";

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
        <div className={styles.trend}
        >
          
          <FaMoneyBillAlt size={30} style={{marginBottom:'1rem'}} color='purple'/>
          <div>
            <p  style={{fontWeight:'bold'}}>Commerce Checkout</p>
          </div>
          <div>
            <small>Marketing Team</small>
          </div>

        </div>
        <div className={styles.trend}>

        <AiFillDatabase size={30} style={{marginBottom:'1rem'}} color='orange'/>
          <div>
            <p  style={{fontWeight:'bold'}}>Data Staging</p>
          </div>
          <div>
            <small>Marketing Team</small>
          </div>
        </div>
        <div className={styles.trend}>

        <FaVideo size={30} style={{marginBottom:'1rem'}} color='blue'/>
          <div>
            <p  style={{fontWeight:'bold'}}>Campaign Store</p>
          </div>
          <div>
            <small>Marketing Team</small>
          </div>
        </div>
        <div className={styles.trend}>

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
  );
};

export default TrendsComponent;
