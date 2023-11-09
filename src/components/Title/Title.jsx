import PropTypes from 'prop-types';

import {Title} from './Title.styled';

function TitleDiv({ title }) {
  return (
    <div>
      {title && <Title>{title}</Title>}
    </div>
  );
}

export default TitleDiv;

TitleDiv.propTypes = {
  title: PropTypes.string,
//   children: PropTypes.object.isRequired,
};