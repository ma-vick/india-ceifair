import { Link } from "react-router-dom";
import MainContainer from "../../components/MainContainer/MainContainer";
import cei from '../../assets/imgs/cei.jpg';

function CeiFair() {
  const content = (
    <section>
      <h1>CEI Fair</h1>
      <div className="container-img">
        <img src={cei} alt="Espirito Santo State Language Center" />
      </div>
      <h2>What&apos;s CEI?</h2>
      <p>
        State Language Center The Government of Espírito Santo has created the
        State Language Center (CEI) with the aim of giving the students of the
        State Education Network the opportunity to deepen their studies in
        another language (English or Spanish) in order to use it in the
        different situations in which their knowledge is required. For more
        information about the CEI Fair, visit the website of the{" "}
        <a
          href="https://sedu.es.gov.br/curso-de-idiomas"
          target="_blank"
          rel="noreferrer"
        >
          State Government of Espirito Santo
        </a>
        .
      </p>
      <h2>And what&apos;s CEI Fair?</h2>
      <p>
        The CEI Fair is a final event where each class prepares a presentation
        to show what they have learned and what knowledge they have acquired
        during the year.
      </p>
      <h2>What will we do at our cei fair?</h2>
      <p>
        This year&apos;s theme of the cei fair is international relations. That
        is why we have decided to explore a new culture, and there is no better
        way to do this than through love. So in our presentation we will visit
        the <Link to="taj-mahal">Taj Mahal</Link>, one of the world&apos;s
        greatest proofs of love, and right after that we will attend an
        indian/hindu wedding ceremony.
      </p>
    </section>
  );

  return <MainContainer childrn={content} />;
}

export default CeiFair;
