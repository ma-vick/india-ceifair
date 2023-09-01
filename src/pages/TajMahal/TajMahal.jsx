import MainContainer from '../../components/MainContainer/MainContainer';
import tajmahal from '../../assets/imgs/tajmahal.png';

function TajMahal() {
    const content = (
        <section>
            <h1>Taj Mahal</h1>
            <div className="container-img">
                <img src={tajmahal} alt="Taj Mahal" />
            </div>
            <p>The Taj Mahal is a magnificent white marble mausoleum located in Agra, India. It was built by the Mughal Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal, who passed away during childbirth in 1631. Construction of the Taj Mahal began in 1632 and was completed in 1653.</p>
            <p>The Taj Mahal's design is a fusion of various architectural styles, including Persian, Islamic, and Indian influences. The central dome is surrounded by four smaller domes and sits atop a large platform. The entire structure is adorned with intricate inlay work, calligraphy, and delicate marble carvings.</p>
            <p>The gardens around the Taj Mahal are meticulously laid out in a geometric pattern, with reflecting pools that enhance the beauty of the monument. The symmetry and elegance of the Taj Mahal have earned it the title of one of the most iconic and recognizable buildings in the world. It is also recognized as a UNESCO World Heritage Site and is considered a symbol of love and architectural brilliance.</p>
            <a href="https://www.taj-mahal.net/newtaj/tour/p_bullet_4/p_bullet_4.html" target="_blank">Visit the Taj Mahal with us.</a>
        </section>
    );

  return (
    <MainContainer childrn={content} />
  );
}

export default TajMahal;
