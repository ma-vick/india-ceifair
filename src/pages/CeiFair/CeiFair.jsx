import { Link } from "react-router-dom";
import MainContainer from "../../components/MainContainer/MainContainer";

function CeiFair() {
  const content = (
    <section>
      <h1>CEI Fair</h1>
      <h2>What's CEI?</h2>
      <p>
        State Language Center The Government of Espírito Santo has created the
        State Language Center (CEI) with the aim of giving the students of the
        State Education Network the opportunity to deepen their studies in
        another language (English or Spanish) in order to use it in the
        different situations in which their knowledge is required. For more
        information about the CEI Fair, visit the website of the <a href="https://sedu.es.gov.br/curso-de-idiomas" target="_blank">State
        Government of Espirito Santo</a>.
      </p>
      <h2>And what's CEI Fair?</h2>
      <p>The CEI Fair is a final event where each class prepares a presentation to show what they have learned and what knowledge they have acquired during the year.</p>
      <h2>What will we do at our cei fair?</h2>
      <p>This year's theme of the cei fair is international relations. That is why we have decided to explore a new culture, and there is no better way to do this than through love.
      So in our presentation we will visit the <Link to="taj-mahal">Taj Mahal</Link>, one of the world's greatest proofs of love, and right after that we will attend an indian/hindu wedding ceremony.</p>
    </section>
  );

  return <MainContainer childrn={content} />;
}

export default CeiFair;
