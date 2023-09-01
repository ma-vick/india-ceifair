import MainContainer from "../../components/MainContainer/MainContainer";

import chai from '../../assets/imgs/chai.jpg';
import naan from '../../assets/imgs/naan.webp';
import hummus from '../../assets/imgs/hummus.jpg';
import lentilSoup from '../../assets/imgs/lentil-soup.jpg';

export default function Foods(){
    const content = (
        <section>
            <h1>Typical Foods</h1>
            <p>Coming from one of the most populous countries in the world, Indian food reflects the unique blending of cultures and regional identities found throughout the country. Shaped by its long and tumultuous history, Indian cuisine carries influences of colonizers from the East and the West as well as a range of religious beliefs and practices.</p>
            <p>What makes Indian food so different? With distinct regional delicacies, a unique cultivation of cultural and religious influences and the signature aromatic spices, there is a lot to explore when it comes to Indian food. The iconic breads and curries widely recognized in Indian food outside of the country are enhanced by the bustling street food culture, celebratory dishes and ancient beverages that make up the vibrant world of Indian food.</p>
            <h3>We made some typical dishes for you to try today, we&apos;ll talk a little about them:</h3>
            <ul>
                <li>Indian Chai (Beverage):</li>
                <img src={chai} alt="Indian Chai" />
                <p>Indian Chai, also known as &quot;chai tea,&quot; is a popular beverage in India and around the world. It&apos;s a spiced tea made by brewing black tea leaves with a mixture of aromatic spices such as cardamom, cinnamon, ginger, cloves, and black pepper. The tea is typically prepared with milk and sweetened with sugar. Chai is known for its rich, warming flavors and is often enjoyed throughout the day, whether as a morning pick-me-up or a comforting drink during gatherings.</p>
                <li>Naan (Type of Bread):</li>
                <img src={naan} alt="Naan" />
                <p>Naan is a traditional Indian bread that is widely enjoyed with various dishes. It is a leavened flatbread made from a dough of wheat flour, water, yeast, and yogurt. The dough is typically stretched and slapped onto the walls of a tandoor (clay oven), where it bakes quickly at high temperatures. This process results in naan&apos;s distinctive soft and slightly chewy texture, with a charred and bubbled exterior. Naan can be plain or flavored with garlic, butter, or herbs, making it a versatile accompaniment to curries and other dishes.</p>
                <li>Hummus:</li>
                <img src={hummus} alt="Hummus" />
                <p>Hummus is a popular Middle Eastern dip made from cooked and mashed chickpeas (garbanzo beans), blended with tahini (sesame paste), olive oil, lemon juice, garlic, and spices like cumin. The mixture is processed until smooth, resulting in a creamy and flavorful dip. Hummus is often served as an appetizer with pita bread, vegetables, or crackers. It has gained international popularity for its nutritious profile and delicious taste.</p>
                <li>Lentil Soup:</li>
                <img src={lentilSoup} alt="Lentil Soup" />
                <p>Lentil soup is a hearty and nutritious dish made from lentils, which are legumes that come in various colors such as green, brown, red, and black. Lentils are simmered with vegetables, herbs, and spices to create a thick and flavorful soup. The soup can be prepared in many different styles, depending on the type of lentils used and the region&apos;s culinary traditions. Lentil soup is known for its high protein content and is a staple in many cultures due to its comforting and filling nature. It&apos;s often served with bread or rice.</p>
            </ul>
        </section>
    );

    return <MainContainer childrn={content} />;
}