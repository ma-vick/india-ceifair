import MainContainer from "../../components/MainContainer/MainContainer";

import './Wedding.css';

import imgTopic1 from "../../assets/imgs/1-hands-couple.webp";
import imgTopic2 from "../../assets/imgs/2-couple.webp";
import imgTopic3 from "../../assets/imgs/3-clothes-couple.webp";
import imgTopic4 from "../../assets/imgs/4-guest.webp";
import imgTopic5 from "../../assets/imgs/5-dress.webp";
import imgTopic6 from "../../assets/imgs/6-entrance.webp";
import imgTopic7 from "../../assets/imgs/7-brides.webp";
import imgTopic8 from "../../assets/imgs/8-unity-cerimonies.webp";
import imgTopic9 from "../../assets/imgs/9-saptapadi.webp";
import imgTopic10 from "../../assets/imgs/10-no-kiss.webp";
import imgTopic11 from "../../assets/imgs/11-party.webp";
import imgTopic12 from "../../assets/imgs/12-cakecut.webp";
import imgTopic13 from "../../assets/imgs/13-dance.webp";
import imgTopic14 from "../../assets/imgs/14-pranks.webp";

function Wedding() {
  const content = (
    <section>
      <h1>Indian/Hindu Wedding</h1>
      <p>
        An Indian wedding is a vibrant and culturally rich ceremony that
        reflects the traditions, customs and rituals of Hinduism, one of the
        oldest religions in the world. It&apos;s a multi-day event where not
        only the couple but also their families, friends and community members
        come together to celebrate the union of two people.
      </p>
      <h2>Ceremony Traditions</h2>
      <ol>
        <li>An Astrology-Approved Date and Time</li>
        <img src={imgTopic1} alt="Hands Couple" />
        <p>
          A pandit (also spelled pundit), is a Hindu priest who presides over
          the ceremony and consults astrology to determine the most auspicious
          date and time for that ceremony to take place.
        </p>
        <li>Multiple Days of Events</li>
        <img src={imgTopic2} alt="Multiple Days of Events" />
        <p>
          The actual nuptial ceremony and reception, similar to what a Western
          wedding encompasses, take place on the third day after two days of
          more intimate events (such as the tilak ceremony, the haldi (or pithi)
          ceremony, the mehndi party, and the sangeet) and are only attended by
          close friends and family members. Most people prefer to incorporate
          natural light and will opt for an outdoor ceremony, but ballrooms that
          support open flame (more on that later) are also an option.
        </p>
        <li>Lots of Red</li>
        <img src={imgTopic3} alt="Lots of Red" />
        <p>
          Red is considered auspicious and, not surprisingly, it is the most
          prominent color at Indian weddings—usually with gold accents.
          &quot;Saris, flowers, decorations, invitations—everything will be
          red,&quot; says Shah. &quot;Sometimes we even put a little bit of red
          dye in the bride&apos;s hair two or three days before the
          wedding.&quot;
        </p>
        <li>A Huge Guest List</li>
        <img src={imgTopic4} alt="A Huge Guest List" />
        <p>
          &quot;Oh, we&apos;ve only talked once? Great! You&apos;re invited to
          my wedding,&quot; jokes Shah. &quot;That&apos;s just how it is. We
          invite everyone. That&apos;s why these weddings turn out so
          huge!&quot; Shah explains there&apos;s additional pressure in the
          South Asian community to avoid offending anyone by not offering them
          an invitation, and on the flip side, most of those invited feel
          obligated to attend out of respect.
        </p>
        <li>Outfit Changes</li>
        <img src={imgTopic5} alt="Outfit Changes" />
        <p>
          &quot;Honestly, for Indians, weddings are like a huge fashion
          show,&quot; says Shah. &quot;You have a different outfit for every
          single event.&quot; The bride and bridesmaids wear saris or lengha;
          the groom and groomsmen wear a sherwani, which is a long top and
          pants, and the groom usually dons a turban. &quot;The groom gets to do
          as many outfit changes as the bride, which is pretty cool,&quot; Shah
          adds, but members of the bridal party are allotted fewer looks. Each
          attendee&apos;s sari or lengha (the skirt version) feels as radiantly
          splendid as the last with bright colors and gorgeous embellishments.
        </p>
        <li>A Grand Entrance for the Groom</li>
        <img src={imgTopic6} alt="A Grand Entrance for the Groom" />
        <p>
          The groom gets his own processional, or baraat, and talk about an
          entrance. He usually rides up with a fancy car, a horse, or an
          elephant. He then makes his way to the mandap, a dome-like covering
          that resembles a Jewish chuppa, to greet the families. The parents and
          the groom remove their shoes and enter the sacred space where a fire
          (agni) is burning to symbolize the highest degree of a witness. The
          prayer to Ganesh under the mandap asks for the Hindu deity to bestow
          good luck and remove obstacles for the couple and their families.
        </p>
        <li>The Bride&apos;s Big Reveal</li>
        <img src={imgTopic7} alt="The Bride's Big Reveal" />
        <p>
          The bridesmaids, flower girl, and ring bearer (if the couple has
          decided to exchange rings) all journey down the aisle while the bride
          prepares for her grand reveal or kanya aagaman. During the
          processional, she will often be escorted by her uncle(s) or oldest
          male relative and sometimes is literally carried before being given
          away, during the kanya daan.
        </p>
        <li>Unity Ceremonies</li>
        <img src={imgTopic8} alt="Unity Ceremonies" />
        <p>
          The particulars vary per culture, but the jai mala is the bride and
          groom&apos;s exchanging of flower garlands. Many times the groom also
          gifts the bride a mangal sutra necklace, translated as &quot;an
          auspicious thread.&quot; For the hasta melap, a knot is tied between
          the groom&apos;s scarf and the bride&apos;s sari by a female relative
          of the groom. The couple joins hands, and their physical binding
          represents &quot;a love that binds two souls for a lifetime.&quot;
          During the mangal phera, the couple clasps hands again and takes four
          steps around the fire, each step representing a stage of life: To
          pursue life&apos;s religious and moral duty (dharma); to pursue
          prosperity (artha); to pursue earthly pleasures (kama); to pursue
          spiritual salvation (moksha).
        </p>
        <li>Saptapadi (Seven Steps)</li>
        <img src={imgTopic9} alt="Saptapadi (Seven Steps)" />
        <p>
          The couple will take seven more steps for the saptapadi. &quot;These
          represent the first seven steps you take together as husband and
          wife,&quot; explains Shah. Someone from the wedding party, typically
          the groom&apos;s brother, will spread out seven stones in a straight
          line, and the couple will move from stone to stone, touching each with
          their toes, as the pandit reads the seven verses. They roughly
          translate to: &quot;Together we will live with respect for one
          another. Together we will develop mental, physical, and spiritual
          balance. Together we will prosper, acquire wealth, and share our
          accomplishments. Together we will acquire happiness, harmony, and
          knowledge through mutual love. Together we will raise strong, virtuous
          children. Together we will be faithful to one another and exercise
          self-restraint and longevity. Together we will remain lifelong
          partners and achieve salvation.&quot;
        </p>
        <li>No Kiss (Probably)</li>
        <img src={imgTopic10} alt="No Kiss (Probably)" />
        <p>
          Finally, the newlyweds recess back down the aisle, conventionally
          sprinkled with red rose petals. But no first kiss as a married couple?
          &quot;Most Indian people don&apos;t show a lot of affection during the
          wedding weekend out of respect for elders who might get
          offended,&quot; says Shah. &quot;There&apos;s almost never a,
          &apos;You may now kiss the bride&apos; kinda thing.&quot;
        </p>
        <li>A Big Party</li>
        <img src={imgTopic11} alt="A Big Party" />
        <p>
          Everyone invited to the wedding is usually invited to the reception,
          and if you&apos;ve ever seen a Bollywood movie that ends with
          nuptials, you know Indian receptions have a reputation to be huge
          parties. Receptions normally start close to seven and go until around
          midnight. Sometimes there&apos;s a farewell for the bride and groom,
          who venture off in a fancy car or something comparable.
        </p>
        <li>Plenty of Food</li>
        <img src={imgTopic12} alt="Plenty of Food" />
        <p>
          Yes, it&apos;s often Indian, but that doesn&apos;t always mean
          vegetarian or spicy. Plus, many South Asian couples prefer to offer
          regional and non-regional options. &quot;Indian people are all over,
          so we kinda build on not having it be one type of thing,&quot; says
          Shah. &quot;A lot of our clients have turned to Western food.&quot;
          And the alcohol situation? &quot;Most of the time, yes,&quot; says
          Shah. &quot;Most of the weddings I do, anyway.&quot;
        </p>
        <li>Serious Dancing</li>
        <img src={imgTopic13} alt="Serious Dancing" />
        <p>
          Oftentimes there&apos;s an elevated theatrical aspect to an Indian
          reception. Wedding party members or guests may serenade the newlyweds
          with Bollywood-style dances. Sometimes the couple will show off a
          performative dance themselves before everyone joins them on the dance
          floor. The bhangra, usually set to Punjabi-type music, is the most
          popular type of dance.
        </p>
        <li>Pranks Played on the Groom</li>
        <img src={imgTopic14} alt="Pranks Played on the Groom" />
        <p>
          Keep your eyes on the bridesmaids and the bride&apos;s side of the
          family during the reception, and you might see some grade-A mischief.
          &quot;They do steal the groom&apos;s shoes!&quot; says Shah.
          &quot;Then they&apos;ll demand money, and he&apos;ll have to give them
          money to get them back. Everything is about money. They&apos;ll also
          try to stop the bride and groom from leaving the ceremony sometimes
          like, Ok, you pay us, you get to take the bride with you&apos; kinda
          thing.&quot;
        </p>
      </ol>
    </section>
  );

  return (
    <>
      <MainContainer childrn={content} />
      <footer className="claim"> 
        <p>
          content taken from the{" "}
          <a
            href="https://www.brides.com/indian-wedding-traditions-4795877"
            target="_blanl"
          >
            Brides website
          </a>
        </p>
      </footer>
    </>
  );
}

export default Wedding;
