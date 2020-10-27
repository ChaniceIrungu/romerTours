import React, { Component } from "react";
import PropTypes from "prop-types";
import "../App.css";
import penguin from "../assets/penguin.JPEG";
import Rectangle12 from "../assets/Rectangle12.JPEG";
import Rectangle13 from "../assets/Rectangle13.JPEG";
import Rectangle11 from "../assets/Rectangle11.JPEG";
import Rectangle15 from "../assets/Rectangle15.JPEG";
import Rectangle14 from "../assets/Rectangle14.JPEG";
import Rectangle16 from "../assets/Rectangle16.JPEG";
import Rectangle17 from "../assets/Rectangle17.JPEG";
import Carousel from "react-bootstrap/Carousel";

export default class Packages extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return (
      <div style={{ color: '#63312D'}}>
        <div className="packagesRec2 mt-4">
          <div
            className="container"
            style={{
              fontFamily: "",
            }}
          >
            <h1 style={{ color: 'White'}}>Our Tour Packages</h1>
          </div>
        </div>
        <h1  className="text-center">CAPE TOWN – 4DAY TOUR PACKAGE</h1>
        
         
            <p>
              Immerse yourself in the adventures Cape Town has to offer with
              this 4-day tour package. You get certified and friendly tour
              guides who deliver the perfect blend of wine and scenery as you
              vacation away in Cape Town.
            </p>
      
         
        
        <div className="row">
          <div className="col">
          <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Rectangle13}
              text="Cape of Good Hope"
              alt="Cape of Good Hope"
            />
              </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Rectangle12}
              text="Cape of Good Hope"
              alt="Cape of Good Hope"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={penguin}
              text="safari"
              alt="safari"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Rectangle11}
              text="safari"
              alt="safari"
            />
          </Carousel.Item>
          </Carousel>
          </div>
          <div className="col ml-5">
            <h4>Highlights</h4>
            <div>● Cape Peninsula Tour </div>
            <div>● Cape of Good Hope </div>
            <div>● Table Mountain Cable Car Ride </div>
            <div>● Hout Bay Boat Ride to Seal Colony </div>
            <div>● Ostrich Farm </div>
            <div>● Stellenbosch Winery & Wine Tasting Tour </div>
            <div>● Victoria & Alfred Waterfront </div>
            <div>● Cape Town City-Tour </div>
            <div>● Signal Hill Night View </div>
            <div>● Malay Quarters (Bo-Kaap) </div>
          </div>
        </div>
      <hr style={{ color: '#63312D'}}/>
        <h1  className="text-center">GARDEN ROUTE – 4-NIGHT / 5-DAY TOUR</h1>
        <div className="row">
          <div className="col">
            <p>
            The scenic splendor that is the Garden Route has been heralded as the Cape’s finest treasure, and a visit to this 230km stretch of sparkling sands, rugged cliffs, wild flowers and sleepy inland waters will testify to this tribute. Let Romer Tours take you on this memorable tour.
            </p>
          </div>
          <div className="col">
         <h4> Highlights:</h4>
Cango Caves; Ostrich Ranch; Featherbed Nature Reserve; Tsitsikamma National Park; Storms River; Bungy Jump Bridge; Aloe Factory Shop; Garden Route Safari Game Lodge; Penguin Colony

          </div>
        </div>
        <div className="row">
          <div className="col">
          <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Rectangle14}
              text="Cape of Good Hope"
              alt="Cape of Good Hope"
            />
              </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Rectangle15}
              text="Cape of Good Hope"
              alt="Cape of Good Hope"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Rectangle16}
              text="safari"
              alt="safari"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Rectangle17}
              text="safari"
              alt="safari"
            />
          </Carousel.Item>
          </Carousel>
            
           < h5 className="mt-4"> DAY 5: Return to Cape Town </h5>
            <div>●	The morning starts early with your second Safari Game Drive. Return for a Full Breakfast.  </div>
            <div>●  After checking-out, join a guided tour of the Reptile Center.  </div>
            <div>● 	On our return to Cape Town, visit Stony Point penguin colony at Betty’s Bay.  </div>
          </div>
          <div className="col">
            <h5 className="mt-4">DAY 1: Cape Town to Oudtshoorn </h5>
            <div>●	Known as the Ostrich Capital of South Africa </div>
            <div>●  Overnight in Oudtshoorn  </div>
            <h5 className="mt-4">DAY 2: Oudtshoorn to Knysna</h5>
            <div>● 	Visit the Highgate Ostrich Ranch </div>
            <div>●  Drive to Knysna, voted as South Africa’s favorite town and synonymous with oysters </div>
            <div>● 	Enjoy a ferry ride across the beautiful Knysna Estuary to the Featherbed Nature Reserve.  </div>
            <div>● 	Overnight in Knysna </div>
            <h5 className="mt-4">DAY 3: Drive through the Tsitsikamma National Park, a pristine wonderland of forest, mountain and sea on our way to the Storms River Mouth.  </h5>
            <div>● 	Tsitsikamma boasts one of the world’s highest Bungy-jumping (216 meters) </div>
            <div>● 	Return to Knysna. </div>
            <h5 className="mt-4">DAY 4: Oudtshoorn to Knysna</h5>
            <div>● 	Visit the Alcare Aloe factory shop in Albertinia before checking in at the Garden Route Safari Game Lodge www.grgamelodge.co.za </div>
            <div>●  Late afternoon, experience your first 2hour Safari Game Drive. </div>
            <div>● 	Return for a sumptuous Buffet Dinner.  </div>
          </div>
        </div>
        <hr/>
       
        <div className="rec" >
          <div
            className="container"
          
          >
            <h1 className="text-center"style={{ color: 'white'}}>CUSTOMIZED TOURS</h1>
          </div>
          </div>
          
         
        
        Do you prefer a tailor made travel package that is crafted to suit your budget and interests? Romer Tours offers customized packages based on the needs of our customers. 
        <h3>1.	CAPE PENINSULA TOUR - FULL DAY</h3>
        <p>Join us for an unforgettable scenic drive along the Atlantic and False Bay coastlines of the Peninsula. 
Enjoy the breathtaking views of the Cape’s mountain ranges, and panoramic sea-views on our way to the top of Cape Point and Cape of Good Hope.
Highlights: Clifton, Camps Bay, Twelve Apostles, Hout Bay, Seal Island (optional), Cape of Good Hope Nature Reserve, Funicular (optional), Boulders Penguin Colony, Simon’s Town.
</p>
        <h3>2.	CAPE WINELANDS TOUR - FULL DAY</h3>
        <p>Enjoy the beauty of the lush green valleys of the Cape Winelands surrounded by hills and mountain ranges. Visit the Cape’s popular wine regions of Stellenbosch and Franschhoek. Experience the wine-making process through a Cellar Tour and taste some of South Africa’s award-winning wines. 
Highlights: Wine Estates, Cellar Tour & Wine tasting, Stellenbosch Village Museum, Franschhoek Huguenot Memorial, Helshoogte Pass
</p>
        <h3>3.	TABLE MOUNTAIN, CITY ORIENTATION & MALAY QUARTER – HALF DAY</h3>
        <p>The top of the Table Mountains provides spectacular views of Cape Town. Our tour operators are ready to take you on a fascinating tour and show you top attractions as well as lesser-known sites in the city. </p>
        <h3>4.	CULTURAL TOUR – HALF DAY</h3>
        <p>District Six: Discover how 65000 people were displaced because of the colour of their skin.
Bo Kaap: Declared a National Heritage site with its colorful Edwardian-style homes, occupied mostly by the ‘Malay’ community
Langa Township: Established in 1927 as the first ‘Black Township’. Local Tour Guides will take you on a Walking Tour
Cape Flats: The so-called ‘Coloured and ‘Indian’ Group Areas, former residents of District Six
</p>
        <h3>5.	WHALE WATCHING – HERMANUS (Seasonal)</h3>
      
    <p>This picturesque tour is popular with tourists, especially during the months of July to November where whales can be spotted along the shore. With this customized tour package, you get to see marine wildlife and experience beautiful sceneries and great seafood. </p>
    <hr />
    
    <div className="rec" >
          <div
            className="container"
          
          >
            <h1 className="text-center"style={{ color: 'white'}}>Transfers</h1>
          </div>
          </div>
      
      <h2>1.	BIG 5 SAFARI TRANSFERS</h2>
      We arrange transfers to Fairy Glen or Aquila Safari Private Game Reserves. These are malaria-free Game Reserves, less than two hour’s drive from Cape Town.  
View South Africa’s Big 5 from an open vehicle Game Drive.

      <h2>2.	CTI AIRPORT TRANSFERS</h2>
      We arrange Airport Transfers to and from Cape Town International Airport for individuals, couples or groups
      </div>
    );
  }
}
