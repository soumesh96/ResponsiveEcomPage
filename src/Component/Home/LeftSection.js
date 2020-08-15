import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons/faChevronCircleRight';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons/faChevronCircleLeft';

import { LeftSectionWrapper, LeftSectionHeading, ImgWrapper, View360ButtonWrapper, ImgGalleryWrapper, LeftSectionBtnWrapper, LeftSectionBtn } from './skins';
import IMacImg from '../../assets/iMac.jpg';

const Home = () => {
  return (
    <React.Fragment>
      <LeftSectionWrapper>
        <LeftSectionHeading>Home &gt; TVs &gt; <span>Apple iMac</span></LeftSectionHeading>
        <ImgWrapper>
          <img src={IMacImg} alt="noImg" />
        </ImgWrapper>
        <View360ButtonWrapper>
          <button>View 360</button>
        </View360ButtonWrapper>
        <ImgGalleryWrapper>
          <FontAwesomeIcon icon={faChevronCircleLeft} />
          {[1, 2, 3, 4].map(ele => (
            <div key={ele}></div>
          ))}
          <FontAwesomeIcon icon={faChevronCircleRight} />
        </ImgGalleryWrapper>
        <LeftSectionBtnWrapper>
          <LeftSectionBtn transparent>Add to cart</LeftSectionBtn>
          <LeftSectionBtn whiteClr>Buy Now</LeftSectionBtn>
        </LeftSectionBtnWrapper>
      </LeftSectionWrapper>
    </React.Fragment>
  );
}

export default Home;
