import styles from "./savedPostComponent.module.css";
import { RxArrowTopRight } from "react-icons/rx";
import { BsArrowDownRight } from "react-icons/bs";
import chart from "../../assets/chart.png";
import jeff from '../../assets/111-1114675_user-login-person-man-enter-person-login-icon.png'
import progress from "../../assets/website-buffer-loading-icon-a-bar-showing-the-download-status-of-information-on-the-website-png.webp"

const SavedPostComponent = () => {
  return (
    <div className={styles.saved}>
      <div className={styles.col_1}>
        <div className={styles.recent}>
          <h6>Recent Activities</h6>
          <p>All</p>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "3rem",
              marginTop: "1.3rem",
              padding: "0.75rem",
            }}
          >
            <div>
              <h5 style={{ display: "block" }}>Cross-origin</h5>
              <small style={{ color: "gray" }}>Mar ,2021 11:34pm</small>
            </div>

            <div>$167.82</div>
          </div>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "3rem",
              marginTop: "1.2rem",
              padding: "0.75rem",
            }}
          >
            <div>
              <h5 style={{ display: "block" }}>SSL-Certificate</h5>
              <small style={{ color: "gray" }}>Feb 10 ,2021 6:34pm</small>
            </div>

            <div>$17.22</div>
          </div>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "3rem",
              marginTop: "1.1rem",
              padding: "0.75rem",
            }}
          >
            <div>
              <h5 style={{ display: "block" }}>Self signed</h5>
              <small style={{ color: "gray" }}>Feb 2 ,2021 7:30pm</small>
            </div>

            <div>$107.45</div>
          </div>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "3rem",
              marginTop: "1.3rem",
              padding: "0.75rem",
            }}
          >
            <div>
              <h5 style={{ display: "block" }}>Git Directory</h5>
              <small style={{ color: "gray" }}>Jan 12 ,2021 1:34pm</small>
            </div>

            <div>$207</div>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.col_2}>
          <div>
            <h6>$985,700</h6>
            <span style={{ color: "green" }}>
              +8.14% <RxArrowTopRight color="green" size={22} />
            </span>
          </div>
          <div>
            <h6>$25,900</h6>
            <span style={{ color: "red" }}>
              +3.48% <BsArrowDownRight color="red" size={20} />
            </span>
          </div>
        </div>
        <div>
          <img src={chart} alt="" style={{marginTop:'1rem'}}/>
        </div>
      </div>
      <div className={styles.col_3}>
        <div>
          <h5>New Arrivals</h5>
          <p>$15,050</p>
        </div>
          <div style={{display:'flex',justifyContent:'flex-start',alignItems:'center',gap:'8px'}}>
            <img src={jeff} alt="" width={30}/>
             <small>Jeffrey Bezos</small>
          </div>
        <div>
          <img src={progress} alt=""  />
        </div>
      </div>
    </div>
  );
};

export default SavedPostComponent;
