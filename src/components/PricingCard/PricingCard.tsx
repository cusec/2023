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
  const featureList = features.map((feature: string) => {
    return (
      <li>
        <span className="Icon">
          <i className="fa-solid fa-circle-check"></i>
        </span>
        {feature}
      </li>
    );
  });

  return (
    <div className={className}>
      <h2>{title}</h2>
      <p>{helpText}</p>
      <div className="PriceContainer">
        <div className="Wrapper">
          <div className="WrapperContent">
            <span className="DollarSign">$</span>
            <span className="Price">{price}</span>
          </div>
        </div>
      </div>
      <ul>{featureList}</ul>
    </div>
  );
};

export default PricingCard;
