import MainContainer from "../../components/MainContainer/MainContainer";

function CeiFair() {
  const content = (
    <section>
      <h1>What's CEI?</h1>
      <p>
        State Language Center The Government of Espírito Santo has created the
        State Language Center (CEI) with the aim of giving the students of the
        State Education Network the opportunity to deepen their studies in
        another language (English or Spanish) in order to use it in the
        different situations in which their knowledge is required. For more
        information about the CEI Fair, visit the website of the <a href="https://sedu.es.gov.br/curso-de-idiomas" target="_blank">State
        Government of Espirito Santo</a>.
      </p>
      <h1>And what's CEI Fair?</h1>
    </section>
  );

  return <MainContainer childrn={content} />;
}

export default CeiFair;
