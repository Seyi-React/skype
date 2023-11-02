import { Link } from "react-router-dom";
import Logo from '../assets/Logo no background.webp'

const Topbar = () => {
  return (
    <section className="topbar">
      <div className="flex-between py-4 px-5">
        <Link to="/">
          <img src={Logo} alt="" width={100} height={100} />
        </Link>
      </div>
    </section>
  );
};

export default Topbar;
