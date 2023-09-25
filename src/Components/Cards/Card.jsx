 import PropTypes from 'prop-types';

const Card = ({card}) => {
    const {img, category, title, card_bg, category_bg,text_color,} = card;

    return (
        <div style={{backgroundColor: card_bg}} className="w-60 m-4">
            <img src={img} alt="" />
            <div className="my-3 px-3">
            <p style={{color:text_color, backgroundColor: category_bg}} className="text-base font-semibold text-center w-24 rounded-md px-2">{category}</p>
            <h3 style={{color:text_color}} className="font-bold text-base">{title}</h3>
            </div>
        </div>
    );
};

Card.propTypes = {
    card: PropTypes.object
}
export default Card;