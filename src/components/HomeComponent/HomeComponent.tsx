import styles from "./HomeComponent.module.css";
import skype from "../../assets/Logo no background.webp";
import { BiTrendingUp } from "react-icons/bi";
import { MdExplore, MdMail, MdOutlinePostAdd } from "react-icons/md";
import { AiFillSave } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";

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
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>Posts</div>
              <MdOutlinePostAdd />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>Trends</div>
              <BiTrendingUp />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>Saved Post</div>
              <AiFillSave />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>Explore</div>
              <MdExplore />
            </div>
          </div>
          <div className={styles.sub_utility}>
            <div className={styles.users_sub}>
              Skype Toppers
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>01</div>
                <MdOutlinePostAdd />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>02</div>
                <BiTrendingUp />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>03</div>
                <AiFillSave />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>04</div>
                <MdExplore />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.row2}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <MdMail size={27} />
            <BsPerson size={27} />
          </div>
          <div className={styles.report}>
            
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "column",
                marginTop: "-1.2rem",
                color:'black',
                fontWeight:'300',
                marginLeft:'-2.2rem',
                fontFamily:'jost',
                paddingLeft:'1rem'
              }}
            >
              Reports
              <div>15k</div>
              <div>10k</div>
              <div>5k</div>
              <div>0k</div>
            </div>
            <div style={{display: "flex",
                justifyContent: "space-around",
                alignItems:'center',
                color:'black',
                fontWeight:'300',
                fontFamily:'jost',
                marginBottom:'-2rem',
                fontSize:'12px'
                }}>
                <div>Jan</div>
                <div>Feb</div>
                <div>Mar</div>
                <div>Apr</div>
                <div>May</div>
                <div>June</div>
            </div>
          </div>
          <div className={styles.report_2}>
             <div style={{textAlign:'center'}}>Utility</div>
             <div style={{display:'flex',justifyContent:'space-between',padding:'10px'}}>
              <div>Price</div>
              <div>$100.00</div>
             </div>
             <div style={{display:'flex',justifyContent:'space-between',padding:'10px'}}>
              <div>Toppers</div>
              <div>$60.00</div>
             </div>
             <div style={{display:'flex',justifyContent:'space-between',padding:'10px'}}>
              <div>Utility</div>
              <div>$50.00</div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
