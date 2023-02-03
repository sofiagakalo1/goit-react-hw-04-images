import PropTypes from 'prop-types';
import { ThreeCircles } from 'react-loader-spinner';

const Loader = ({ loading }) => {
  if (loading) {
    return (
      <ThreeCircles
        height="100"
        width="100"
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    );
  }
};

export default Loader;

Loader.propTypes = {
  loading: PropTypes.bool.isRequired,
};
