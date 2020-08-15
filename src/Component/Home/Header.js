import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons/faMapMarker';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons/faShoppingCart';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons/faAngleLeft';

import { HeaderCon, LeftMenuWrapper, LeftHeading, MiddleHeader, LocationTextLabel, RightMenuWrapper } from './skins';

const Home = () => {
  return (
    <React.Fragment>
      <HeaderCon>
        <LeftMenuWrapper>
          <FontAwesomeIcon className="Bars" icon={faBars} />
          <FontAwesomeIcon className="ArrowLeft" icon={faAngleLeft} />
          <LeftHeading>White Orange</LeftHeading>
        </LeftMenuWrapper>
        <MiddleHeader>
          <FontAwesomeIcon icon={faMapMarker} />
          <LocationTextLabel>Bengaluru.</LocationTextLabel>
        </MiddleHeader>
        <RightMenuWrapper>
          <FontAwesomeIcon icon={faSearch} />
          <FontAwesomeIcon icon={faShoppingCart} />
          <FontAwesomeIcon icon={faUser} />
        </RightMenuWrapper>
      </HeaderCon>
    </React.Fragment>
  );
}

export default Home;
