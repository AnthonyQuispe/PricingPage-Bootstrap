import React, { useState } from "react";
import "./PricingPage.css";

export default function PricingPage() {
  const [activePlan, setActivePlan] = useState(false);
  const [price, setPrice] = useState(false);

  const onClickPrice = () => {
    setPrice(!price);
  };

  const pricingArray = [
    {
      ID: 1,
      MonthlyCost: "$80",
      YearlyCost: "$960",
      Title: "Base",
      Description: "For most businesses that want to optimize web queries.",
      Services: [
        "All limited links",
        "Own analytics platform",
        "Chat support",
        "Optimize hashtags",
        "Unlimited users",
      ],
    },
    {
      ID: 2,
      MonthlyCost: "$120",
      YearlyCost: "$1440",
      Title: "Pro",
      Description: "For most businesses that want to optimize web queries.",
      Services: [
        "All limited links",
        "Own analytics platform",
        "Chat support",
        "Optimize hashtags",
        "Unlimited users",
      ],
    },
    {
      ID: 3,
      MonthlyCost: "$260",
      YearlyCost: "$3120",
      Title: "Enterprise",
      Description: "For most businesses that want to optimize web queries.",
      Services: [
        "All limited links",
        "Own analytics platform",
        "Chat support",
        "Optimize hashtags",
        "Unlimited users",
      ],
    },
  ];

  return (
    <section className="container-fluid vh-100 bg-custom d-flex flex-column align-items-center gap-3">
      <h1 className="display-4 fw-bold text-body-emphasis title-custom">
        Simple, transparent pricing
      </h1>
      <p className="fs-5 text-body-secondary">
        No contracts, No surprise fees.
      </p>
      <div className="rounded-3 d-flex gap-2">
        <button
          onClick={onClickPrice}
          className={`custom-buttons  rounded-3 ${
            price ? "" : "custom-buttons--time"
          }`}
        >
          Monthly
        </button>
        <button
          onClick={onClickPrice}
          className={`custom-buttons  rounded-3 ${
            price ? "custom-buttons--time" : ""
          }`}
        >
          Yearly
        </button>
      </div>
      <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
        {pricingArray.map(function (pricing) {
          return (
            <div className="col" key={pricing.ID}>
              <div
                className={`card mb-4 rounded-3 shadow-sm ${
                  activePlan ? "custom-card--active" : ""
                } `}
              >
                <div key={pricing.ID} className="card-header py-3">
                  {price ? pricing.YearlyCost : pricing.MonthlyCost}/
                  {price ? "Year" : "Month"}{" "}
                </div>
                <div className="card-body">
                  <h3 className="card-title">{pricing.Title}</h3>
                  <p className="">{pricing.Description}</p>
                  <ul className="list-unstyled mt-3 mb-4">
                    {pricing.Services.map((service, idx) => (
                      <li key={idx}>{service}</li>
                    ))}
                  </ul>
                  <button className="w-100 btn btn-lg custom-buttons--active ">
                    Choose This Plan
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
