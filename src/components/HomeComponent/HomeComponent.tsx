import styles from "./HomeComponent.module.css";
import skype from "../../assets/Logo no background.webp";
import { BiTrendingUp } from "react-icons/bi";
import { MdExplore, MdOutlinePostAdd } from "react-icons/md";
import { AiFillSave } from "react-icons/ai";

const HomeComponent = () => {
  return (
    <div className={styles.parent}>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "6rem",
          }}
          className={styles.row1}
        >
          <div>
            <h2>Hello, Efe</h2>
            <p>Welcome back</p>
          </div>
          <div>
            <input
              type="text"
              name=""
              placeholder="Search..."
              className={styles.search}
            />
          </div>
        </div>
        <div className={styles.login}>
          Welcome to skype
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              marginTop: "1rem",
              gap: "4px",
            }}
          >
            <img src={skype} alt="" width={40} />
            <small> skype</small>
          </div>
        </div>
        <div className={styles.utility}>
          <div className={styles.users}>
            Top Users
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <div>Posts</div>
              <MdOutlinePostAdd/>
            </div>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <div>Trends</div>
               <BiTrendingUp/>
            </div>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <div>
                 Saved Post
              </div>
              <AiFillSave/>
            </div>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <div>Explore</div>
              <MdExplore/>
            </div>
          </div>
          <div className={styles.sub_utility}>
          <div className={styles.users_sub}>
            Skype Toppers
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <div>01</div>
              <MdOutlinePostAdd/>
            </div>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <div>02</div>
               <BiTrendingUp/>
            </div>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <div>
                 03
              </div>
              <AiFillSave/>
            </div>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <div>04</div>
              <MdExplore/>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.row2}>hi</div>
      </div>
    </div>
  );
};

export default HomeComponent;
