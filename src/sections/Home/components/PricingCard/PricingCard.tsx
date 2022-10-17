import React from "react";
import classNames from "classnames";
import "./PricingCard.scss";

interface Props {
  title: string;
  helpText: string;
  price: number;
  features: string[];
  vip?: boolean;
}

const PricingCard = ({ title, helpText, price, features, vip }: Props) => {
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
        <div className="PriceContainerContent">
          <span className="Price">${price}</span>
          <span className="PriceExtras">/ person</span>
        </div>
      </div>
      <h1>{title}</h1>
      <p className="HelpText">{helpText}</p>
      <div className="Features">{formattedFeatures}</div>
    </div>
  );
};

export default PricingCard;
