import MainContainer from "../../components/MainContainer/MainContainer";
import indiaFlag from "../../assets/imgs/india-flag.jpg";

export default function India() {
  const content = (
    <section>
      <h1>India</h1>
      <div className="container-img">
        <img src={indiaFlag} alt="India Flag" />
      </div>
      <p>
        India is an Asian country located in the south of the continent, in a
        region known as the Indian subcontinent. Its capital is the city of New
        Delhi. India is not only one of the largest countries in the world in
        terms of area, but also the second most populous, with more than 1.3
        billion inhabitants.
      </p>
      <p>
        Considered a developing country and one of the BRICs, India is
        essentially a rural country, with most of the population living in the
        countryside and depending mainly on primary activities such as
        agriculture and the exploitation of natural resources. Some industries
        have made significant progress despite structural bottlenecks.
      </p>
      <h2>More about India</h2>
      <ul>
        <li>Language:</li>
        <p>
          The official language of India is Hindi, and it&apos;s spoken by a
          large portion of the population. However, with over 21 officially
          recognized languages and hundreds of regional languages and dialects,
          India is incredibly linguistically diverse. English is also used
          extensively for administrative and educational purposes, making it a
          widely understood language throughout the country.
        </p>
        <li>Customs:</li>
        <p>
          Indian customs are deeply rooted in the country&apos;s rich history
          and cultural diversity. The customs and traditions of the country vary
          greatly by region and community. Hospitality is highly valued and
          guests are often treated with the utmost respect and warmth.
          Traditional clothing such as sarees for women and dhotis or
          kurta-pajamas for men are still commonly worn, especially on special
          occasions.
        </p>
        <li>Religion:</li>
        <p>
          India is known for its religious diversity. Hinduism is the largest
          religion, followed by Islam, Christianity, Sikhism, Buddhism and
          Jainism. Each religion has its own practices, festivals and
          traditions. The coexistence of different religions has resulted in a
          unique blend of cultural festivals and interfaith interactions.
        </p>
        <li>Society:</li>
        <p>
          Indian society is characterized by its caste system, a complex social
          hierarchy that has historical roots. Efforts have been made to
          eliminate discrimination based on caste, but its influence can still
          be observed in various spheres of life. The joint family system, in
          which several generations live together, is traditional, although
          nuclear families are increasingly common in urban areas. India has
          made great strides in areas such as technology and education, and also
          struggles with problems such as poverty, gender inequality and
          urbanization.
        </p>
        <li>Religious festivals:</li>
        <p>
          India is known for its colorful festivals, many of which have
          religious significance. Diwali, the festival of lights, is celebrated
          by Hindus throughout the country and symbolizes the victory of light
          over darkness. Holi, the festival of colors, marks the arrival of
          spring and is celebrated with glowing powders and water. Eid,
          Christmas, Guru Nanak Jayanti and many other festivals are celebrated
          with equal enthusiasm by different religious communities. In summary,
          India is a country of immense cultural diversity, with an abundance of
          languages, customs and religions. Its society is a blend of ancient
          traditions and modern influences, making it a captivating and diverse
          nation.
        </p>
      </ul>
    </section>
  );

  return <MainContainer childrn={content} />;
}
