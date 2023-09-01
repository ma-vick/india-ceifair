import MainContainer from "../../components/MainContainer/MainContainer";

import holi from "../../assets/imgs/holi.jpeg";
import diwali from "../../assets/imgs/diwali.jpg";
import navratri from "../../assets/imgs/navratri.jpg";
import durgaPuja from "../../assets/imgs/durga-puja.webp";

function Festivals() {
  const content = (
    <section>
      <h1>Festivals of India</h1>
      <ol>
        <li>Holi</li>
        <img src={holi} alt="Holi" />
        <p>
          Holi is one of the most colorful and lively festivals in India,
          primarily celebrated at the beginning of spring. Also known as the
          &quot;Festival of Colors&quot; Holi marks the victory of good over
          evil and the arrival of warmer weather. People gather in open spaces,
          streets, and courtyards to play with vibrant colored powders and
          water. This joyful celebration is characterized by dancing, singing,
          and sharing traditional sweets and snacks. It&apos;s a time when
          social barriers are broken, and people of all ages and backgrounds
          come together to enjoy the festive spirit.
        </p>
        <li>Diwali (or Deepavali)</li>
        <img src={diwali} alt="Diwali (or Deepavali)" />
        <p>
          Diwali, often referred to as the &quot;Festival of Lights,&quot; is
          one of the most significant festivals in India. It typically falls in
          the autumn and is celebrated with great enthusiasm. Diwali symbolizes
          the triumph of light over darkness and good over evil. People decorate
          their homes with oil lamps, candles, and colorful rangoli designs.
          Families exchange gifts, sweets, and visit each other&apos;s homes.
          Bursting fireworks is also a prominent part of the festivities. The
          festival has cultural and religious significance, celebrated by
          Hindus, Jains, Sikhs, and Buddhists. It&apos;s a time of renewal,
          cleansing, and fostering positive relationships.
        </p>
        <li>Navratri</li>
        <img src={navratri} alt="Navratri" />
        <p>
          Navratri, meaning &quot;nine nights,&quot; is a festival dedicated to
          the worship of the Hindu goddess Durga. It spans nine nights and ten
          days and usually falls in the autumn and spring seasons. During
          Navratri, people engage in various religious and cultural activities,
          including fasting, praying, and performing traditional dances, such as
          Garba and Dandiya Raas. These dances are often accompanied by rhythmic
          music and colorful costumes. Each night, different aspects of the
          goddess Durga are celebrated, and the festival culminates with the
          worship of the goddess on the tenth day, known as Vijayadashami.
        </p>
        <li>Durga Puja</li>
        <img src={durgaPuja} alt="Durga Puja" />
        <p>
          Durga Puja is a major Hindu festival dedicated to the goddess Durga.
          It is celebrated with immense fervor and grandeur, especially in West
          Bengal and other parts of India. The festival typically spans ten days
          and is marked by the installation of beautifully crafted idols of
          goddess Durga in intricately decorated pandals (temporary structures).
          These idols depict the goddess slaying the demon Mahishasura.
          Elaborate rituals, cultural performances, and traditional food
          offerings are part of the celebrations. On the last day, known as
          Dashami, the idols are immersed in water bodies, symbolizing the
          goddess&apos;s return to her celestial abode.
        </p>
      </ol>
    </section>
  );

  return <MainContainer childrn={content} />;
}

export default Festivals;
