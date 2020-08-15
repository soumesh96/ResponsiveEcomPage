import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const HeaderCon = styled.div`
  height: 60px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  display: flex;
  justify-content:
  space-between;
  align-items: center;
  background: white;
  width: 100%;
  z-index: 1;
  @media (max-width: 768px) {
    position: fixed;
    width: 100%;
  }
`;

export const LeftMenuWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 30%;
  padding: 12px;
  & .ArrowLeft {
    display: none;
  }
  > svg {
    cursor: pointer;
    font-size: 24px;
  }
  @media (max-width: 768px) {
    width: 60%;
    & .ArrowLeft {
      display: block;
    }
    & .Bars {
      display: none;
    }
  }
`;

export const LeftHeading = styled.p`
  font-size: 32px;
  margin: 0px;
  color: #3F6DF7;
  padding-left: 20px;
  font-weight: bold;
  cursor: pointer;
  @media (max-width: 1114px) {
    font-size: 28px;
  }
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const MiddleHeader = styled.div`
  border: 1px solid black;
  border-radius: 4px;
  width: 10%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 12px;
  @media (max-width: 768px) {
    display: none;
  }
  @media (max-width: 1126px) {
    width: 15%;
  }
`;

export const LocationTextLabel = styled.p`
  margin: 0px;
  padding-left: 20px;
`;

export const RightMenuWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 16%;
  @media (max-width: 768px) {
    width: 40%;
  }
`;

export const StrikeThrough = styled.div`
  position: relative;
  &::before {
    position: absolute;
    content: "";
    left: 20%;
    top: 50%;
    right: 0;
    border-top: 1px solid;
    border-color: inherit;
  
    -webkit-transform:rotate(-5deg);
    -moz-transform:rotate(-5deg);
    -ms-transform:rotate(-5deg);
    -o-transform:rotate(-5deg);
    transform:rotate(-5deg);
  }
`;

export const SectionWrapper = styled.div`
  display: flex;
  @media (max-width: 768px) {
   flex-direction: column;
  }
`;

export const LeftSectionWrapper = styled.div`
  width: 40%;
  padding: 14px;
  border-right: 4px solid #EFEFEF;
  @media (max-width: 768px) {
    width: auto;
    border: none;
    margin-top: 60px;
  }
`;

export const LeftSectionHeading = styled.div`
  font-size: 20px;
  color: #505050;
  padding: 12px;
  > span {
    font-weight: 500;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const ImgWrapper = styled.div`
  > img {
    width: 94%;
    height: 40vh;
  }
  @media (max-width: 1114px) {
    > img {
      height: 22vh;
    }
  }
`;

export const View360ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 6%;
  > button {
    color: #4979F7;
    border: 2px solid #4979F7;
    background: transparent;
    border-radius: 14px;
    width: 150px;
    padding: 12px 20px;
    cursor: pointer;
    font-size: 18px;
  }
  @media (max-width: 1114px) {
    margin-top: 12%;
  }
  @media (max-width: 768px) {
    margin-top: 2%;
    > button {
      padding: 4px 0 0 0;
      font-size: 16px;
      width: 120px;

    }
  }
`;

export const ImgGalleryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  height: 18vh;
  align-items: center;
  > svg {
    font-size: 28px;
    cursor: pointer;
  }
  > div {
    height: 10vh;
    border: 2px solid #CCCCCC;
    width: 15%;
    cursor: pointer;
  }

  @media (max-width: 1114px) {
    margin-top: 14%;
    > div {
      height: 12vh;
      width: 18%;
    }
  }

  @media (max-width: 768px) {
    margin-top: 10px;
    height: 12vh;
    > svg {
      font-size: 20px;
    }
    > div {
      height: 8vh;
      width: 16%;
    }
  }
`;

export const LeftSectionBtnWrapper = styled.div`
  height: 6vh;
  border: 2px solid #3F6DF7;
  width: 50%;
  margin: auto;
  background: white;
  margin-top: 20px;
  @media (max-width: 1114px) {
    width: 70%;
    height: 6vh;
    margin-top: 16%;
  }
  @media (max-width: 768px) {
    position: fixed;
    left: 0%;
    bottom: 0;
    width: 100%;
    border: 1px solid #3F6DF7;
  }
`;

export const LeftSectionBtn = styled.button`
  color: ${props => props.whiteClr ? 'white' : '#3F6DF7'};
  background: ${props => props.transparent ? 'transparent' : '#3F6DF7'};
  height: 6vh;
  border: none;
  width: 50%;
  cursor: pointer;
  font-size: 18px;
  @media (max-width: 1114px) {
    height: 6vh;
  }
`;

export const RightSectionWrapper = styled.div`
  width: 45%;
  padding: 40px 24px 12px;
  border-left: 4px solid #EFEFEF;
  min-height: 88vh;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
    border: none;
  }
`;

export const RightSectionHeading = styled.p`
  margin: 0px;
  font-weight: bold;
  font-size: 20px;
  > span {
    font-weight: 500;
    color: #707070;
  }
  @media (max-width: 768px) {
    font-size: 16px;
    padding: 0 12px;
  }
  @media (max-width: 1114px) {
    font-size: 16px;
    padding: 0 12px;
  }
`;

export const RightSubHeadingWrapper = styled.div`
  display: flex;
  height: 12vh;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1114px) {
    flex-direction: column-reverse;
    align-items: flex-start;
    margin-left: 10px;
    margin-top: 8%;
    height: 12vh;
  }
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: flex-start;
    margin-left: 10px;
    margin-top: 14%;
    height: 8vh;
  }
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  z-index: -1;
`;

export const ReviewStarWrapper = styled.div`
  display: flex;
  margin-right: 4%;
`;

export const FontAwsmeStar = styled(FontAwesomeIcon)`
  font-size: 18px;
  color: #3F6DF7;
`;

export const DiscountedAmt = styled.p`
  font-weight: bold;
  font-size: 32px;
  @media (max-width: 1114px) {
    font-size: 28px;
    margin: 0;
   }
  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

export const MainAmt = styled.p`
  padding-left: 20px;
  font-size: 20px;
  @media (max-width: 1114px) {
    margin: 0;
   }
   @media (max-width: 768) {
    margin: 10px 0;
   }
`;

export const DiscountPerc = styled.p`
  color: #51A17D;
  padding-left: 20px;
  font-weight: 500;
  font-size: 24px;
  @media (max-width: 768px) {
    margin: 0;
  }
`;

export const OffersWrapper = styled.div`
  border: 1px solid #CCCCCC;
  width: 60%;
  @media (max-width: 1114px) {
    width: 80%;
    margin: 0 10px;
  }
`;

export const OfferHeading = styled.p`
  border-bottom: 2px solid #CCCCCC;
  margin: 0;
  padding: 8px 12px;
  font-weight: bold;
  font-size: 18px;
  @media (max-width: 1114px) {
    padding: 4px 12px;
    font-size: 16px;
  }
`;

export const IndividualOffer = styled.p`
  padding: 4px 12px;
  color: ${props => props.clr ? props.clr : '#505050'};
  > span {
    color: #3F6DF7;
  }
  @media (max-width: 1114px) {
    margin: 0;
    font-size: 14px;
  }
`;

export const WarrantyWrapper = styled.p`
  font-size: 20px;
  @media (max-width: 768px) {
    padding: 0 10px;
    font-size: 16px;
    margin: 10px 0 0 0;
  }
`;

export const DeliveryWrapper = styled.div`
  display: flex;
  height: 60px;
  align-items: center;
  @media (max-width: 768px) {
    height: auto;
    padding-left: 10px;
  }
`;

export const PincodeInput = styled.input`
  padding: 8px 12px;
  border: none;
  border-bottom: 2px solid #CCCCCC;
  margin-left: 12px;
  font-size: 18px;
  &:focus {
    border: none;
  }
  @media (max-width: 768px) {
    width: 26%;
    padding: 4px;
    font-size: 14px;
  }
`;

export const RightIconWrapper = styled(FontAwesomeIcon)`
  font-size: 22px;
  color: #3F6DF7;
  margin: 10px 8px  0;
  cursor: pointer;
`;

export const HighlightsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 28px 0;
  @media (max-width: 768px) {
    flex-direction: column;
    padding-left: 10px;
    margin: 10px 0;
  }
  @media (max-width: 1114px) {
    flex-direction: column;
    padding-left: 10px;
    margin: 10px 0;
   }
`;

export const IndividualSection = styled.div`
  display: flex;
  @media (max-width: 768px) {
    display: block;
  }
  @media (max-width: 1114px) {
    display: block;
   }
`;

export const HighlightLabel = styled.p`
  font-weight: bold;
  font-size: 20px;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 16px;
    ${props => props.underline && 'text-decoration: underline;'}
  }
`;

export const IndividualTextLabel = styled.p`
  margin: 4px 0;
  ${props => props.btnView && 'cursor: pointer; color: #3F6DF7;'}
`;

export const SpecificationWrapper = styled.div`
  border: 1px solid #CCCCCC;
  @media (max-width: 768px) {
    margin-bottom: 14%;
  }
`;

export const IndividualSpecs = styled.div`
  background: #E2E9FF;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  border-bottom: 1px solid #CCCCCC;
  &:last-child {
    border: none;
  }
`;

export const AddIcon = styled(FontAwesomeIcon)`
  font-size: 18px;
`;

export const SpecsLabel = styled.p`
  font-weight: bold;
  font-size: 18px;
  margin: 0;
`;

export const HighLightSection = styled.div`
  padding: 0 24px;
`;

export const ReviewsLabel = styled.p`
  margin: 0;
  padding-left: 10px;
`;