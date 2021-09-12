import './card-comp.scss';
import PropTypes from 'prop-types';


function ContentCardComp (props) {
  const {
    id,
    className = '',
    title,
    children
  } = props;


    return (
         <div className={`content-container-card ${className}`}>
             {props.children}
        </div>
    )
};

ContentCardComp.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  className: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.string
};

export default ContentCardComp;