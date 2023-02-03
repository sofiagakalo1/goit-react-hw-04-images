import PropTypes from 'prop-types';
import css from './button.module.css';

const Button = ({loadMore, text, type}) => {
    return(<button className={css.button} type={type} onClick={loadMore}>{text}</button>)
}

Button.propTypes={
    loadMore: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
}

export default Button;