import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({ card }) => {
    const { id, img, category, title, card_bg, category_bg, text_color, } = card ||{};

    return (
        <div>
            <Link to={`/cards/${id}`}>
                <div style={{ backgroundColor: card_bg }} className="w-72 lg:w-60 m-4">
                    <img src={img} alt="" />
                    <div className="p-3 my-3">
                        <p style={{ color: text_color, backgroundColor: category_bg }} className="text-base font-semibold text-center w-24 rounded-md px-2">{category}</p>
                        <h3 style={{ color: text_color }} className="font-bold text-base">{title}</h3>
                    </div>
                </div>
            </Link>
        </div>
    );
};

Card.propTypes = {
    card: PropTypes.object
}
export default Card;