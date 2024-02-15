import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import crditLogo from "./Images/crditLogo.png";
import heroBg from "./Images/herobg.png";

function Homepage() {
  const togglrMenu = () => {
    let toggleNAme = document.querySelector(".toggleNAme");
    let navigation = document.querySelector(".navigation");
    toggleNAme.classList.toggle("active");
    navigation.classList.toggle("active");
  };

  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [showForm, setShowForm] = useState(false); // State to manage form visibility

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 15000);
  
    return () => clearTimeout(timer);
  }, []);
  
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowForm(false); // Hide the form after 15 seconds
  //   }, 15000);
  
  //   return () => clearTimeout(timer);
  // }, []);

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    setShowForm(false);
  };

  useEffect(() => {
    const targetTime = new Date().getTime() + 600000;

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetTime - now;

      const hrs = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((distance % (1000 * 60)) / 1000);

      setHours(hrs);
      setMinutes(mins);
      setSeconds(secs);

      if (distance < 0) {
        clearInterval(interval);
        setShowForm(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handlePopup = () => {
    setShowPopup(true);
  };

  const handleOk = () => {
    setShowPopup(false);
  };

  return (
    <div className="App">
      {/* <Navbar/> */}

      <header className="row conatiner">
        <a href="#" className="logo row">
          <img src={crditLogo} alt="" />
          <h1>
            Credit <span className="logo_txt">STOP</span>{" "}
          </h1>
        </a>

        <div className="toggleNAme" onClick={togglrMenu}></div>
        <nav className="navigation row">
          <ul className="row">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Founder</a>
            </li>
            <li>
              <a href="#">Countdown</a>
            </li>
            <li>
              <a href="#">Register</a>
            </li>
            <li>
              <a href="#">SIGN UP</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* hero section */}

      <section className="hero row container">
        <div>
          <h1>
            Transform your <br />
            <span>transactions</span> <br />
            elevate your lifestyle.
          </h1>
          <p className="span_grey">
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates,
            annual fees.
          </p>
          <a href="#" className="hero_btn">
            Get Started
          </a>
        </div>

        <div className="row">
          <img src={heroBg} className="herobgimg" alt="" />
        </div>
      </section>

      {/* Page Counter section */}
      <div class="flex-container">
        <div class="flex-item">
          <h1 className="h1txt">
            2000<i class="fa-solid fa-plus"></i>
          </h1>
          <h1 className="h1para">ACTIVE USERS</h1>
        </div>
        <div class="flex-item">
          <h1 className="h1txt">
            50000<i class="fa-solid fa-plus"></i>
          </h1>
          <h1 className="h1para">TRANSACTIONS</h1>
        </div>
        <div class="flex-item">
          <h1 className="h1txt">
            450<i class="fa-solid fa-plus"></i>
          </h1>
          <h1 className="h1para">DAILY COMPANIES</h1>
        </div>
      </div>

      {/* about us section  */}

      <div class="container">
        <div class="contentLeft">
          <div class="row">
            <div class="imgWrapper">
              <img
                src="https://images.pexels.com/photos/6801867/pexels-photo-6801867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
            <div class="imgWrapper">
              <img
                src="https://images.pexels.com/photos/7876371/pexels-photo-7876371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
            <div class="imgWrapper">
              <img
                src="https://images.pexels.com/photos/7567426/pexels-photo-7567426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
            <div class="imgWrapper">
              <img
                src="https://images.pexels.com/photos/7567479/pexels-photo-7567479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="contentRight">
          <div class="content">
            <h4 id="founHEad">Our Founders</h4>
            <h2>About the Founders</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex ullam
              saepe, totam dicta fuga provident. Fuga, labore porro? Dolorem
              unde, explicabo atque voluptatum laborum harum, quas velit
              voluptates sit rerum non ullam laboriosam iusto ad sequi hic
              soluta consequatur quaerat!
            </p>
            <a href="#">Read More...</a>
          </div>
        </div>
      </div>

      {/* features section */}

      <div class="header">
        <h1 className="whytxt">Why should You go ahead with Me?</h1>

        <p>
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </div>
      <div class="row1-container">
        <div class="box box-down cyan">
          <h2 className="feat1">Supervisor</h2>
          <p>Monitors activity to identify project roadblocks</p>
          <img
            src="https://assets.codepen.io/2301174/icon-supervisor.svg"
            alt=""
          />
        </div>

        <div class="box red">
          <h2 className="feat2">Team Builder</h2>
          <p>
            Scans our talent network to create the optimal team for your project
          </p>
          <img
            src="https://assets.codepen.io/2301174/icon-team-builder.svg"
            alt=""
          />
        </div>

        <div class="box box-down blue">
          <h2 className="feat3">Transactions</h2>
          <p>
            Uses data from past projects to provide better delivery estimates
          </p>
          <img
            src="https://assets.codepen.io/2301174/icon-calculator.svg"
            alt=""
          />
        </div>
      </div>
      <div class="row2-container">
        <div class="box orange">
          <h2 className="feat4">Offers</h2>
          <p>Regularly evaluates our talent to ensure quality</p>
          <img src="https://assets.codepen.io/2301174/icon-karma.svg" alt="" />
        </div>
      </div>

      {/* time counter section */}

      <div class="timecountcontainer">
        <div class="countdown">
          <h1 id="headline">Time is running out.</h1>
          <h1 id="headline">Grab our limited deal!</h1>
          <div class="rowflex">
            <div class="countdown-item">
              <p>
                <span>{hours < 12 ? "0" + hours : hours}</span> Hours
              </p>
            </div>
            <div class="countdown-item">
              <p>
                <span>{minutes < 12 ? "0" + minutes : minutes}</span> Minutes
              </p>
            </div>
            <div class="countdown-item">
              <p>
                <span>{seconds < 12 ? "0" + seconds : seconds}</span> Seconds
              </p>
            </div>
          </div>
        </div>

        <button class="custom-btn btn-12">
          <span>at $499</span>
          <span>Apply for a Credit Card</span>
        </button>
      </div>

      {/* Call to Action */}
      <section id="contact-cta-section" class="contact-cta-section">
        <div class="wrapper-full">
          <div class="cta-wrapper">
            <div class="details-wrapper">
              <h2>Let’s try our service now!</h2>
              <p>
                Everything you need to accept card payments and grow your
                business anywhere on the planet.
              </p>
            </div>
            <a class="blue-cta-button" href="#" onClick={handlePopup}>
              Contact Us Now!
            </a>
            <div class="clearfix"></div>
          </div>
        </div>
      </section>

      {/* Popup Card Component */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2 className="poptxt">Thank you for registering!</h2>
            <button onClick={handleOk}>OK</button>
          </div>
        </div>
      )}

      {/* Sliding Form */}
      {showForm && (
        <div className={`sliding-form ${showForm ? "show activeslideform" : ""}`}>
          <form>
            <h1>Flat 15% OFF</h1>
            <div className="input-row">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                autoComplete="off"
                placeholder="email@example.com"
              />
            </div>
            <div className="input-row">
              <label htmlFor="number">Phone Number</label>
              <input type="number" name="number" placeholder="9876XXXXX" />
            </div>
            <button type="submit" onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Homepage;
