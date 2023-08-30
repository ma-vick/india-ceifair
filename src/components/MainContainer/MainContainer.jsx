import propTypes from 'prop-types';
import './MainContainer.css';

function MainContainer({ childrn }) {
    return (
        <main className="main-container">
            { childrn }
        </main>
    );
}

export default MainContainer;

MainContainer.propTypes = {
    children: propTypes.shape(),
}.isRequired