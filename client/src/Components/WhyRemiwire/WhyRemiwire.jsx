import React, { useEffect } from "react";
import "./assets/css/whyremiwire.css";
import AOS from "aos";
import "aos/dist/aos.css";
export default function WhyRemiwire() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <section id="timeline">
        <h1>Why should you choose remiwire</h1>

        <div className="demo-card-wrapper">
          <div className="demo-card demo-card--step1" data-aos="fade-right">
            <div className="head">
              <div className="number-box">
                <span>01</span>
              </div>
              <h2>Best Rate</h2>
            </div>
            <div className="body">
              <p>We offer best exchange rates with no hidden fees</p>
              <img
                src="https://media.istockphoto.com/id/1182774086/photo/businessman-draw-growth-graph-and-progress-of-business-and-analyzing-financial-and-investment.jpg?s=2048x2048&w=is&k=20&c=JcgAw_vek49XrmC6DmvfH8-CWKgTkQo0D52Jlt4dlGM="
                alt="Graphic"
              />
            </div>
          </div>

          <div className="demo-card demo-card--step2" data-aos="fade-left">
            <div className="head">
              <div className="number-box">
                <span>02</span>
              </div>
              <h2>Secure & Cost-effective</h2>
            </div>
            <div className="body">
              <p>Cross-border transfers made simple, fast, and secure</p>
              <img
                src="https://media.istockphoto.com/id/1585298058/photo/artificial-intelligence-in-industry-concept-ai-technology-adoption-digital-and-technology.jpg?s=2048x2048&w=is&k=20&c=P-sCFhGMy8_zZyrScLp7YwdNI-71yiVEQZY0HxyshYE="
                alt="Graphic"
              />
            </div>
          </div>

          <div className="demo-card demo-card--step3" data-aos="fade-right">
            <div className="head">
              <div className="number-box">
                <span>03</span>
              </div>
              <h2>Transaparente</h2>
            </div>
            <div className="body">
              <p>
                Trusted by parents to meet the foreign exchange needs of their
                children overseas and receive currency alerts while in control
              </p>
              <img
                src="https://images.unsplash.com/photo-1642239817349-3e1cf98817a5?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Graphic"
              />
            </div>
          </div>

          <div className="demo-card demo-card--step4" data-aos="fade-left">
            <div className="head">
              <div className="number-box">
                <span>04</span>
              </div>
              <h2>Simple</h2>
            </div>
            <div className="body">
              <p>Our easy-to-use apps make sending money easy & effortless.</p>
              <img
                src="https://images.unsplash.com/photo-1515180711443-f8685c6d6a74?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Graphic"
              />
            </div>
          </div>

          <div className="demo-card demo-card--step5" data-aos="fade-right">
            <div className="head">
              <div className="number-box">
                <span>05</span>
              </div>
              <h2>Customer Connectedness</h2>
            </div>
            <div className="body">
              <p>
                Customer service provides us with an edge to outperform. We
                consider our customers to be our most valuable brand
                ambassadors.
              </p>
              <img
                src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Graphic"
              />
            </div>
          </div>
          <div className="demo-card demo-card--step5" data-aos="fade-left">
            <div className="head">
              <div className="number-box">
                <span>06</span>
              </div>
              <h2>Secure & Cost-effective</h2>
            </div>
            <div className="body">
              <p>Cross-border transfers made simple, fast, and secure</p>
              <img src="http://placehold.it/1000x500" alt="Graphic" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
