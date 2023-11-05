import React, { useState } from "react";
import styles from "./Home.module.css";
import skypeLogo from "../../assets/Logo no background.webp";
import { MdNotifications } from "react-icons/md";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Home = (): JSX.Element => {
  const [toggleSideBar, setToggleSidebar] = useState<boolean>(false);

  const handleSideFunction = () => {
    setToggleSidebar(!toggleSideBar);
  };

  return (
    <React.Fragment>
      {/* Laptop dashboard */}
      <div
        className={styles.sidebar}
        style={{ width: toggleSideBar ? "150px" : "220px" }}
      >
        <div className={styles.sidebar_content}>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            {/* image div */}
            <div>
              <img src={skypeLogo} alt="logo" width={30} height={30} />
            </div>
            {/* Text(skype div) */}
            <div>
              <h6
                style={{
                  fontWeight: "bold",
                  color: "navy",
                  fontFamily: "Jost",
                  letterSpacing: "2px",
                  fontSize: "13px",
                }}
              >
                Skype
              </h6>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "navy",
              padding: "1rem",
              // width: "10px,",
              height: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              borderTopRightRadius: "20px",
              borderBottomRightRadius: "20px",
            }}
            onClick={handleSideFunction}
          >
            {toggleSideBar ? (
              <BsChevronRight size={18} style={{ color: "white" }} />
            ) : (
              <BsChevronLeft size={18} style={{ color: "white" }} />
            )}
          </div>
        </div>
      </div>

      {/* Mobile dashboard */}
      <>
        <div className={styles.mobile_parent}>
          {/* top bar div */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingRight: "2rem",
              // backgroundColor:'greenyellow',
              // boxShadow:''
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                paddingTop: "2rem",
                paddingLeft: "2rem",
                paddingBottom: "1rem",
              }}
            >
              {/* image div */}
              <div>
                <img src={skypeLogo} alt="logo" width={50} height={40} />
              </div>
              {/* Text(skype div) */}
              <div>
                <h6
                  style={{
                    fontWeight: "bold",
                    color: "navy",
                    fontFamily: "Jost",
                    letterSpacing: "2px",
                    fontSize: "17px",
                  }}
                >
                  Skype
                </h6>
              </div>
            </div>
            {/* Notif & Logout div */}
            <div>
              <small>
                <MdNotifications size={30} style={{ marginTop: "15px" }} />
              </small>
            </div>
          </div>
        </div>
      </>
    </React.Fragment>
  );
};

export default Home;
