import React from "react";

import shivam from './aboutimage/shi2.jpeg'
import ktm from './aboutimage/a1.jpeg'
import jagdish from './aboutimage/jag.jpeg'
import kumud from './aboutimage/km2.jpeg'
import ankita from './aboutimage/ak.jpeg'


const About = () => {
  return <>
    <div className="container py-5" style={{ marginTop: "90px", backgroundColor: "#f4f6f8" }}>
      <h1 className="text-center text-danger mb-5 fw-bold">About RideIntelliX</h1>

      <div className="row align-items-center mb-5">
        <div className="col-md-6 mb-4 mb-md-0">
          <div className="shadow rounded overflow-hidden border border-2">
            <img
              src={ktm}
              alt="KTM Bike"
              className="img-fluid w-100 hover-zoom"
              style={{ transition: "transform 0.3s" }}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </div>
        </div>
        <div className="col-md-6">
          <h3 className="fw-semibold text-primary mb-3">What is RideIntelliX?</h3>
          <p className="text-secondary">
            RideIntelliX is a smart and efficient vehicle rental platform that allows users
            to rent bikes, scooters, or bicycles for a limited time. Whether it's for a
            quick trip, daily commute, or weekend ride – we’ve got the right vehicle for you.
          </p>
        </div>
      </div>

      <div className="mb-5">
        <h3 className="fw-semibold text-success mb-3">Problem We Solve</h3>
        <p className="text-secondary">
          Not everyone can afford their own vehicle — and even if they can, sometimes they
          need short-term access without long-term commitment. RideIntelliX makes it simple
          for users to rent a vehicle, save time, and move freely.
        </p>
      </div>

      <div className="row text-white mb-5">
        <div className="col-md-6">
          <div className="bg-success p-4 rounded shadow h-100">
            <h4 className="fw-bold mb-2"><i className="fa fa-leaf"></i> Eco-Friendly Transport</h4>
            <p>
              Our platform supports the use of eco-friendly vehicles and encourages users to
              reduce carbon emissions through shared mobility.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="bg-primary p-4 rounded shadow h-100">
            <h4 className="fw-bold mb-2"><i className="fa fa-lock"></i> Secure Payment System</h4>
            <p>
              We ensure all transactions are encrypted and secure. Your privacy and payment
              details are fully protected.
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-center fw-bold text-dark mb-4">Meet Our Team</h3>
      <div className="row text-center">
        {[{
          name: "Shivam Kumar",
          role: "Team Leader",
          img: shivam,
        }, {
          name: "Jagdish Poddar",
          role: "Core Member",
          img: jagdish
        }, {
          name: "Kumud Kamani",
          role: "Core Member",
          img: kumud
        }, {
          name: "Ankita Kumari",
          role: "Core Member",
          img: ankita
        }].map((member, idx) => (
          <div className="col-sm-6 col-md-3 mb-4" key={idx}>
            <div className="p-3 shadow rounded bg-white border">
              <img
                src={member.img}
                alt={member.name}
                className="rounded-circle img-fluid mb-3 border border-3"
                style={{ width: "120px", height: "120px", objectFit: "cover", transition: "transform 0.3s" }}
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
              <h5 className="fw-bold mb-0">{member.name}</h5>
              <small className="text-muted">{member.role}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  </>
};

export default About;
