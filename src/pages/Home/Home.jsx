import { Link } from "react-router-dom";

import "./Home.css";
import MainContainer from "../../components/MainContainer/MainContainer";

function Home() {
  const content = (
    <section>
      <h1>Welcome!</h1>
      <p>We would like to present our project for this CEI Fair.</p>
      <p>
        Today we visit with you the Taj Mahal and you visit an{" "}
        <Link to="wedding">indian wedding</Link>.
      </p>
      <p>
        We have developed this website to guide you better in this presentation,
        here we provide all the necessary information for better use. You can
        access it below or through the menu in the upper right corner. We wish
        you a lot of fun!
      </p>
      <ul>
        <li>
          <Link to="cei-fair">CEI Fair</Link>
        </li>
        <li>
          <Link to="india">India</Link>
        </li>
        <li>
          <Link to="wedding">Indian/Hindu wedding</Link>
        </li>
        <li>
          <Link to="foods">Typical foods</Link>
        </li>
        <li>
          <Link to="ai">AI in India</Link>
        </li>
      </ul>
    </section>
  );

  return <MainContainer childrn={content} />;
}

export default Home;
