import React, { useState } from "react";
import styles from "./Home.module.css";
import skypeLogo from "../../assets/Logo no background.webp";
import { MdNotifications, MdOutlinePostAdd, MdExplore } from "react-icons/md";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { BiTrendingUp, BiHomeAlt2 } from "react-icons/bi";
import { AiFillSave } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import HomeComponent from "@/components/HomeComponent/HomeComponent";
import TrendsComponent from "@/components/Trends/TrendsComponent";
import SavedPostComponent from "@/components/Saved/SavedPostComponent";
import PostComponent from "@/components/Post/PostComponent";
import ExploreComponent from "@/components/Explore/ExploreComponent";

const Home = (): JSX.Element => {
  const [toggleSideBar, setToggleSidebar] = useState<boolean>(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleSideFunction = () => {
    setToggleSidebar(!toggleSideBar);
  };

  const handleItemClick = (item: string) => {
    setActiveItem(item);
  };

  return (
    <React.Fragment>
      {/* Laptop dashboard */}
      <>
        <div className={styles.container}>
          <div
            className={styles.sidebar}
            style={{ width: toggleSideBar ? "100px" : "220px" }}
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
                  padding: "0.8rem",
                  // width: "10px,",
                  height: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  borderTopRightRadius: "20px",
                  borderBottomRightRadius: "20px",
                  marginLeft: toggleSideBar ? "20px" : "",
                  transition: toggleSideBar ? "300ms" : "",
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
            {/* icons */}
            <div
              style={{
                marginTop: "4.5rem",
                fontSize: "12px",
                letterSpacing: "1px",
                fontFamily: "Jost",
                cursor: "pointer",
              }}
            >
              {/*Home  */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  margin: "2rem",
                  gap: "10px",
                  background: activeItem === "Home" ? "navy" : "",
                  borderRadius: "10px",
                  padding: "8px",
                  color: activeItem === "Home" ? "white" : "",
                }}
                onClick={() => handleItemClick("Home")}
              >
                <div>
                  <small>
                    <BiHomeAlt2 size={20} />
                  </small>
                </div>
                <div>{toggleSideBar ? "" : <h5>Home</h5>}</div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  margin: "2rem",
                  gap: "10px",
                  background: activeItem === "Trends" ? "navy" : "",
                  borderRadius: "10px",
                  padding: "8px",
                  color: activeItem === "Trends" ? "white" : "",
                }}
                onClick={() => handleItemClick("Trends")}
              >
                <div>
                  <small>
                    <BiTrendingUp size={20} />
                  </small>
                </div>
                <div>{toggleSideBar ? "" : <h5>Trends</h5>}</div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  margin: "2rem",
                  gap: "10px",
                  background: activeItem === " Saved Post" ? "navy" : "",
                  borderRadius: "10px",
                  padding: "8px",
                  color: activeItem === " Saved Post" ? "white" : "",
                }}
                onClick={() => handleItemClick(" Saved Post")}
              >
                <div>
                  <small>
                    <AiFillSave size={20} />
                  </small>
                </div>
                <div>{toggleSideBar ? "" : <h5>Saved Post</h5>}</div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  margin: "2rem",
                  gap: "10px",

                  background: activeItem === "Post" ? "navy" : "",
                  borderRadius: "10px",
                  padding: "8px",
                  color: activeItem === "Post" ? "white" : "",
                }}
                onClick={() => handleItemClick("Post")}
              >
                <div>
                  <small>
                    <MdOutlinePostAdd size={20} />
                  </small>
                </div>
                <div>{toggleSideBar ? "" : <h5>Post</h5>}</div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  margin: "2rem",
                  gap: "10px",
                  background: activeItem === "Explore" ? "navy" : "",
                  borderRadius: "10px",
                  padding: "8px",
                  color: activeItem === "Explore" ? "white" : "",
                }}
                onClick={() => handleItemClick("Explore")}
              >
                <div>
                  <small>
                    <MdExplore size={20} />
                  </small>
                </div>
                <div>{toggleSideBar ? "" : <h5>Explore</h5>}</div>
              </div>
              {/* log out */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  margin: "2rem",
                  gap: "10px",
                  // paddingTop: "1rem",
                  // background: activeItem === "Log Out" ? "navy" : "",
                  borderRadius: "10px",
                  padding: "8px",
                }}
                onClick={() => handleItemClick("Log Out")}
              >
                <small>
                  <BiLogOut size={20} />
                </small>
                {toggleSideBar ? "" : <h5>Log out</h5>}
              </div>
            </div>
          </div>
        </div>
        <main className={styles.main}>
          {activeItem === "Home" && <HomeComponent />}
          {activeItem === "Trends" && <TrendsComponent />}
          {activeItem === "Saved Post" && <SavedPostComponent />}
          {activeItem === "Post" && <PostComponent />}
          {activeItem === "Explore" && <ExploreComponent />}
        </main>
      </>

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
