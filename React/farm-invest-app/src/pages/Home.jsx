import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="wrapper">
      <section className="hero">
        <div className="heroContent">
          <h1 className="title">
            Rent your own field, invest in farming, <br />
            and grow your own vegetables
          </h1>
          <Link to="/locations" className="ctaButton">
            Let's start
          </Link>
        </div>
      </section>

      <section className="features">
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?q=80&w=600&auto=format&fit=crop"
            alt="Lettuce"
          />
          <div className="cardOverlay">
            <p>
              Rent your own piece of farmland and watch your vegetables grow.
            </p>
          </div>
        </div>

        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=600&auto=format&fit=crop"
            alt="Tomatoes"
          />
          <div className="cardOverlay">
            <p>
              Enjoy, year after year, the wonders of nature with your rented
              vegetable farmland.
            </p>
          </div>
        </div>

        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=600&auto=format&fit=crop"
            alt="Soil"
          />
          <div className="cardOverlay">
            <p>
              Grow your own piece of land, from planting seeds in the lush soil
              to harvesting.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
