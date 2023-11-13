import styles from "./postComponent.module.css";
import skype from "../../assets/Logo no background.webp";
import future from "../../assets/future.webp";
import Vector from "../../assets/Vector (8).png";
import bitcoin from "../../assets/bitcoin.jpg";
import three from '../../assets/Three.png'
import nack from "../../assets/111-1114675_user-login-person-man-enter-person-login-icon.png";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const PostComponent = () => {
  return (
    <div className={styles.post}>
      <div className={styles.posting}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "3px",
          }}
        >
          <img src={skype} alt="" width={60} />
          <h5>All Employee</h5>
        </div>
        <div
          style={{
            marginTop: "2rem",
           
            color: "gray",
            fontSize: "13px",
            padding: "1rem",
            
          }}
        >
          PROJECT
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "10px",
            padding: "10px",
           
            margin:'10px'
          }}
        >
          <img src={future} alt="" width={30} />
          <h5>Arena Sport</h5>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "10px",
            padding: "10px",
           
            margin:'10px'
          }}
        >
          <img src={Vector} alt="" width={30} />
          <h5>DSV</h5>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "10px",
            padding: "10px",
          
            margin:'10px'
          }}
        >
          <img src={bitcoin} alt="" width={30} />
          <h5>SeaFood Mall</h5>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "10px",
            padding: "10px",
           
            margin:'10px'
          }}
        >
          <img src={nack} alt="" width={30} />
          <h5>FireStar</h5>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "10px",
            padding: "10px",
           
            margin:'10px'
          }}
        >
          <img src={three} alt="" width={25} />
          <h5>Zeta Bank</h5>
        </div>
      </div>
      <div className={styles.posted}>
        <div className={styles.post_lay}>
          <div>
            <h6>Ronny Asno</h6>
            <small style={{color:'gray'}}>Software Engineer</small>
          </div>
          <div>
            <h6>3'200 NOK</h6>
             <small style={{color:'gray'}}>Full time</small>
          </div>
          <div>
            <p>test period</p>
            <p style={{color:'gray'}}>2 months</p>
          </div>
          <div>
            <AiFillEdit color='gray'/>
          </div>
          <div>
            <AiFillDelete color='red'/>
          </div>
        </div>
        <div className={styles.post_lay}>
          <div>
            <h6>Tommy Lonsetteig</h6>
            <small style={{color:'gray'}}>Business Analyst</small>
          </div>
          <div>
            <h6>4'000 NOK</h6>
             <small style={{color:'gray'}}>Full time</small>
          </div>
          <div>
            <p>test period</p>
            <p style={{color:'gray'}}>2 months</p>
          </div>
          <div>
            <AiFillEdit color='gray'/>
          </div>
          <div>
            <AiFillDelete color='red'/>
          </div>
        </div>
        <div className={styles.post_lay}>
          <div>
            <h6>Katherine Jane</h6>
            <small style={{color:'gray'}}>Product Designer</small>
          </div>
          <div>
            <h6>2'800 NOK</h6>
             <small style={{color:'gray'}}>Full time</small>
          </div>
          <div>
            <p>test period</p>
            <p style={{color:'gray'}}>2 months</p>
          </div>
          <div>
            <AiFillEdit color='gray'/>
          </div>
          <div>
            <AiFillDelete color='red'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostComponent;
