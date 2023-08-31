import MainContainer from "../../components/MainContainer/MainContainer";

export default function India(){
    const content = (
        <section>
            <h1>India</h1>
            <p>India is an Asian country located in the south of the continent, in a region known as the Indian subcontinent. Its capital is the city of New Delhi. India is not only one of the largest countries in the world in terms of area, but also the second most populous, with more than 1.3 billion inhabitants.</p>
            <p>Considered a developing country and one of the BRICs, India is essentially a rural country, with most of the population living in the countryside and depending mainly on primary activities such as agriculture and the exploitation of natural resources. Some industries have made significant progress despite structural bottlenecks.</p>
        </section>
    );

    return <MainContainer childrn={content} />;
}