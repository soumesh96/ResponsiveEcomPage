import React from 'react';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons/faChevronCircleRight';
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';

import { StrikeThrough, RightSectionWrapper, RightSectionHeading, RightSubHeadingWrapper, PriceWrapper, ReviewStarWrapper, FontAwsmeStar, DiscountedAmt, MainAmt, DiscountPerc, OffersWrapper, OfferHeading, IndividualOffer, DeliveryWrapper, PincodeInput, RightIconWrapper, HighlightsWrapper, IndividualSection, HighlightLabel, IndividualTextLabel, SpecificationWrapper, IndividualSpecs, WarrantyWrapper, AddIcon, SpecsLabel, HighLightSection, ReviewsLabel } from './skins';

const Home = () => {
  return (
    <React.Fragment>
      <RightSectionWrapper>
        <RightSectionHeading>Apple IMac 80cm (32 inch) HD Ready LED TV <span>(KLV-32R202F)</span></RightSectionHeading>
        <RightSubHeadingWrapper>
          <PriceWrapper>
            <DiscountedAmt>&#8377; 89,999</DiscountedAmt>
            <StrikeThrough><MainAmt>&#8377; 98,999</MainAmt></StrikeThrough>
            <DiscountPerc>35%</DiscountPerc>
          </PriceWrapper>
          <ReviewStarWrapper>
            <FontAwsmeStar icon={faStar} />
            <FontAwsmeStar icon={faStar} />
            <FontAwsmeStar icon={faStar} />
            <FontAwsmeStar icon={faStar} />
            <ReviewsLabel>4608 Reviews</ReviewsLabel>
          </ReviewStarWrapper>
        </RightSubHeadingWrapper>
        <OffersWrapper>
          <OfferHeading>Available Offers</OfferHeading>
          <IndividualOffer>Bank Offers 10% Instant Discount with HDFC Bank</IndividualOffer>
          <IndividualOffer>Credit Cards and Credit/Debit EMI Transactions <span>T&C</span></IndividualOffer>
          <IndividualOffer>Bank Offers 10% Instant Discount with HDFC Bank</IndividualOffer>
          <IndividualOffer>Debit Card Transactions <span>T&C</span></IndividualOffer>
          <IndividualOffer clr="#3F6DF7">View 4 More offers</IndividualOffer>
        </OffersWrapper>
        <WarrantyWrapper>1 year manufacture warranty</WarrantyWrapper>
        <DeliveryWrapper>
          <HighlightLabel>Delivery</HighlightLabel>
          <PincodeInput type="number" name="pincode" placeholder="Enter Pincode" />
          <RightIconWrapper icon={faChevronCircleRight} />
        </DeliveryWrapper>
        <HighlightsWrapper>
          <IndividualSection>
            <HighlightLabel underline>Highlights</HighlightLabel>
            <HighLightSection>
              <IndividualTextLabel>Resolution: HD Ready 1366 x 768 Pixels</IndividualTextLabel>
              <IndividualTextLabel>Sound Output: 20 W</IndividualTextLabel>
              <IndividualTextLabel>Refresh Rate: 50 Hz</IndividualTextLabel>
            </HighLightSection>
          </IndividualSection>
          <IndividualSection>
            <HighlightLabel underline>Seller</HighlightLabel>
            <HighLightSection>
              <IndividualTextLabel>White, Orange, HSR</IndividualTextLabel>
              <IndividualTextLabel btnView>View More Sellers</IndividualTextLabel>
            </HighLightSection>
          </IndividualSection>
        </HighlightsWrapper>
        <SpecificationWrapper>
          <IndividualSpecs>
            <SpecsLabel>Specifications</SpecsLabel>
            <AddIcon icon={faPlus} />
          </IndividualSpecs>
          <IndividualSpecs>
            <SpecsLabel>Features</SpecsLabel>
            <AddIcon icon={faPlus} />
          </IndividualSpecs>
          <IndividualSpecs>
            <SpecsLabel>Description</SpecsLabel>
            <AddIcon icon={faPlus} />
          </IndividualSpecs>
        </SpecificationWrapper>
      </RightSectionWrapper>
    </React.Fragment>
  );
}

export default Home;
