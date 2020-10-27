import React, { Component } from "react";
import tablemountain from "../assets/tablemountain.JPEG";
import hippo from "../assets/hippo.JPEG";
import penguin from "../assets/penguin.JPEG";
import star from "../assets/star.svg";
import Rectangle1 from "../assets/Rectangle1.JPEG";
import Rectangle2 from "../assets/Rectangle2.JPEG";
import Rectangle3 from "../assets/Rectangle3.JPEG";
import Rectangle4 from "../assets/Rectangle4.JPEG";
import Rectangle5 from "../assets/Rectangle5.JPEG";
import Rectangle6 from "../assets/Rectangle6.JPEG";
import Rectangle7 from "../assets/Rectangle7.JPEG";
import "../App.css";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import CardDeck from "react-bootstrap/CardDeck";
import Button from "react-bootstrap/Button";

export default class Home extends Component {
  render() {
    return (
      <div
        style={{
          color: "White",
        }}
      >
        {/* first photos */}
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Rectangle7}
              text="Cape of Good Hope"
              alt="Cape of Good Hope"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Rectangle2}
              text="safari"
              alt="safari"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Rectangle3}
              text="safari"
              alt="safari"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Rectangle4}
              text="safari"
              alt="safari"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Rectangle5}
              text="safari"
              alt="safari"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Rectangle6}
              text="safari"
              alt="safari"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Rectangle1}
              text="safari"
              alt="safari"
            />
          </Carousel.Item>
        </Carousel>
        {/* content */}
        <div className="bgimage mt-4">
          <div className="">
            <h1
              className="experienceSA mt-4"
              style={{
                fontFamily: "Script MT",
              }}
            >
              Experience the Best of South Africa, Your Way
            </h1>
<div className="container fluid">
            <div className="rectangle mt-4  " style={{display:"flex"}} >
              <div className=" ml-3 mr-3 mt-3" style={{height:"400px", display: "inline-block"}}>
                <p style={{fontsize:"2vw"}}>
                  Romer Tours specializes in providing personalized guided tours
                  with flexible itineraries, allowing you to experience the
                  beauty and diversity of South Africa, the Rainbow Nation.{" "}
                </p>
                <h1
                  className="unique"
                  style={{
                    fontFamily: "Script MT",
                  }}
                >
                  Unique and Unforgettable Adventures
                </h1>
                <p >
                  There’s never a bad day to explore Cape Town, twice voted as
                  one of the most beautiful cities in the world. Nestled beneath
                  Table Mountain, this travel destination offers a perfect blend
                  of breath-taking scenic beauty and superb tourist attractions.
                  Our holiday packages are customized to fit your budget and
                  schedule, allowing you to tour the Western Cape, go on a Big 5
                  Safari, and discover the history of ‘The Mother City’ of South
                  Africa.
                </p>
                <h1
                  className="wonder"
                  style={{
                    fontFamily: "Script MT",
                  }}
                >
                  Wondering What to do in Cape Town?
                </h1>
                <p >
                  Cape Town has something for every kind of traveler. This city
                  has enough destinations to satisfy even the most adventurous
                  spirit. Travel with Romer Tours and take in all the beauty
                  Cape Town has to offer - from the iconic Table Mountain, one
                  of the seven wonders of the world, to the pristine white
                  beaches along the Atlantic and False Bay coastlines.
                  Experience the lush green vineyards of the Winelands, breath
                  in the fragrant aromas, and relish in the unique varieties of
                  fauna and flora. Make lasting memories on the scenic and
                  rugged coastline of Cape Point and Cape of Good Hope. Come and
                  experience the rich cultural diversity in the city, from the
                  vibrant Townships to the colourful and cobbled streets of the
                  Bo-Kaap, Cape Malay Quarter
                </p>
              </div>
            </div>
            </div>

          </div>
        </div>
        <div className="packagesRec mt-4">
          <div
            className="container"
            style={{
              fontFamily: "Script MT",
            }}
          >
            <h1>Our Tour Packages</h1>
          </div>
        </div>

        {/* Rating */}
        <CardDeck className="m-4 p-0" style={{
          }} >
          <Card  style={{ width: "16rem",background:" rgba(123, 81, 69, 0.82)" }}>
            <Card.Img style={{ width: "100%", height: "15vw", objectFit: "cover" }}
         src={penguin} />
            <Card.Body>
              <Card.Title style={{textalign: "center"}}>CAPE TOWN  – 4DAY TOUR PACKAGE</Card.Title>
              <Card.Text style={{fontsize:"2vw"}}>
                Immerse yourself in the adventures Cape Town has to offer with
                this 4-day tour package. You get certified and friendly tour
                guides who deliver the perfect blend of wine and scenery as you
                vacation away in Cape Town.

                Highlights
●	Cape Peninsula Tour  
●	Cape of Good Hope 
●	 Cape Point 
●	 Table Mountain Cable Car Ride  
●	 Hout Bay Boat Ride to Seal Colony
●	 Ostrich Farm
●	 Penguin Colony 

              </Card.Text>
              <ListGroup className="list-group-flush">
            <ListGroupItem>
            <Button  style={{
          backgroundColor: "#B8583B"}} >
            View More
          </Button>
          <i className="fas fa-star ml-4"  style={{ color: '#F4A261' }} ></i>  <i className="fas fa-star"  style={{ color: '#F4A261' }} ></i>  <i className="fas fa-star"  style={{ color: '#F4A261' }} ></i>  <i className="fas fa-star"  style={{ color: '#F4A261' }} ></i>  <i className="fas fa-star"  style={{ color: '#F4A261' }} ></i> 
            </ListGroupItem>
          
          </ListGroup>
            </Card.Body>
          </Card >
          <Card style={{ background:" rgba(123, 81, 69, 0.82)" }}>
            <Card.Img variant="top" src={hippo} />
            <Card.Body>
              <Card.Title>GARDEN ROUTE – 4-NIGHT / 5-DAY TOUR</Card.Title>
              <Card.Text>
              The scenic splendor that is the Garden Route has been heralded as the Cape’s finest treasure, and a visit to this 230km stretch of sparkling sands, rugged cliffs, wild flowers and sleepy inland waters will testify to this tribute. Let Romer Tours take you on this memorable tour.
              </Card.Text>
              <ListGroup className="list-group-flush">
            <ListGroupItem>
            <Button  style={{
          backgroundColor: "#B8583B"}} >
           View More
          </Button>
          <i className="fas fa-star ml-4"  style={{ color: '#F4A261' }} ></i>  <i className="fas fa-star"  style={{ color: '#F4A261' }} ></i>  <i className="fas fa-star"  style={{ color: '#F4A261' }} ></i>  <i className="fas fa-star"  style={{ color: '#F4A261' }} ></i>  <i className="fas fa-star"  style={{ color: '#F4A261' }} ></i> 
            </ListGroupItem>
          
          </ListGroup>
            </Card.Body>
          </Card >
          <Card style={{ background:" rgba(123, 81, 69, 0.82)" }}>
            <Card.Img variant="top" src={tablemountain} />
            <Card.Body>
              <Card.Title>CUSTOMIZED TOURS</Card.Title>
              <Card.Text>
              Do you prefer a tailor made travel package that is crafted to suit your budget and interests? Romer Tours offers customized packages based on the needs of our customers. 
              </Card.Text>
              <ListGroup className="list-group-flush">
            <ListGroupItem>
            <Button  style={{
          backgroundColor: "#B8583B"}} >
            View More
          </Button>
          <i className="fas fa-star ml-4"  style={{ color: '#F4A261' }} ></i>  <i className="fas fa-star"  style={{ color: '#F4A261' }} ></i>  <i className="fas fa-star"  style={{ color: '#F4A261' }} ></i>  <i className="fas fa-star"  style={{ color: '#F4A261' }} ></i>  <i className="fas fa-star"  style={{ color: '#F4A261' }} ></i> 
            </ListGroupItem>
          
          </ListGroup>
            </Card.Body>
          </Card>
        </CardDeck>
      </div>
    );
  }
}

{
  /* <div className="row row-cols-2 justify-content-center">
<div class="col">
  <img
    src={waterfront}
    alt="waterfront view"
    className="waterfront img-fluid "
  ></img>
</div>
<div class="col ">
  <img
    src={sea}
    alt="sea view"
    className="waterfront img-fluid"
  ></img>
</div>
</div> */
}

