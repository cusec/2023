import React from "react";
import classNames from "classnames";
import "./PricingCard.scss";

interface Props {
  title: string;
  helpText: string;
  priceStudent: number;
  priceProf: number;
  features: string[];
  vip?: boolean;
}

const PricingCard = ({
  title,
  helpText,
  priceStudent,
  priceProf,
  features,
  vip,
}: Props) => {
  const className = classNames("PricingCard", vip ? "Vip" : null);
  const formattedFeatures = features.map((feature: string) => {
    return (
      <>
        <span className="Icon">
          <i className="fa-solid fa-circle-check"></i>
        </span>
        <p className="FeatureName">{feature}</p>
      </>
    );
  });

  return (
    <div className={className}>
      <div className="PriceContainer">
        {vip ? <div className="MostPopular">MOST POPULAR</div> : null}
        <h1>{title}</h1>
        <div className="PriceContainerContent">
          <span className="Price">${priceStudent}</span>
          <span className="PriceExtras">/ student</span>
        </div>
        <div className="PriceContainerContent">
          <span className="Price">${priceProf}</span>
          <span className="PriceExtras">/ professional</span>
        </div>
      </div>
      <p className="HelpText">{helpText}</p>
      <div className="Features">{formattedFeatures}</div>
    </div>
  );
};

export default PricingCard;
