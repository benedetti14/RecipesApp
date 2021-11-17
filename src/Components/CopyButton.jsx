import React, { useState } from 'react';
import PropTypes from 'prop-types';
import shareIcon from '../images/exploreIcon.svg';

function CopyButton(props) {
  const [copy, setCopy] = useState(false);

  const { link, onClick } = props;

  const onCopy = () => {
    window.navigator.clipboard.writeText(link)
      .catch((err) => console.error('Error:', err));
    onClick();
    setCopy(true);
  };

  return (
    <>
      {copy && <span className="">Link copiado!</span>}
      <button
        type="button"
        data-testid="share-btn"
        onClick={ onCopy }
        className="remove-button-default-style ms-3"
      >
        <img
          src={ shareIcon }
          alt="compartilhar"
          width="40"
          height="40"
          className="img-png-border"
        />
      </button>
    </>
  );
}

CopyButton.propTypes = {
  link: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

CopyButton.defaultProps = {
  onClick: () => {},
};

export default CopyButton;
