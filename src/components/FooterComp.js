import React, { Component } from "react";
import "../App.css";
import SubscribeComp from "./SubscribeComp";

const thisYear = new Date().getFullYear();

function FooterComp() {
  return (
    <footer className="text-center pb-4">
      <section className="reason-to-buy">
        <h2 className="p-1">
          <span>GREAT REASONS TO USE OUR SERVICE</span>
        </h2>

        <div className="reason-to-buy-wrapper">
          <div className="reason-to-buy-inner grid">
            <div className="grid__cell pr-5 mr-10">
              <img
                alt=""
                src="./images/customer-satisfaction_1.png"
                loading="lazy"
                width="60px"
                height="60px"
              />
              <div>
                <h3>Satisfaction Guarantee</h3>
                <p>
                  We focus on high-quality products and provide good customer
                  support to our users.
                </p>
              </div>
            </div>

            <div className="grid__cell pr-5 mr-10">
              <img
                alt=""
                src="./images/safety.png"
                loading="lazy"
                width="60px"
                height="60px"
              />
              <div>
                <h3>Verified & Trusted</h3>
                We verify each product details and prices professionally to
                ensure accuracy.
              </div>
            </div>

            <div className="grid__cell pr-5 mr-10">
              <img
                alt=""
                src="./images/sale.png"
                loading="lazy"
                width="60px"
                height="60px"
              />
              <div>
                <h3>Great Value</h3>
                <p>
                  Using our service will save you a lot of money and research
                  time.
                </p>
              </div>
            </div>

            <div className="grid__cell pr-5 mr-10">
              <img
                alt=""
                src="./images/world.png"
                loading="lazy"
                width="60px"
                height="60px"
              />
              <div>
                <h3>Local Optimization</h3>
                <p>
                  We frequently update product prices to match the market
                  prices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <h4 className="mt-1 mb-2 p-1">Subscribe to our Newsletter</h4>
      <SubscribeComp />
      <a href="https://www.techsec.cf/">© TechSec {thisYear}</a>
    </footer>
  );
}

export default FooterComp;
