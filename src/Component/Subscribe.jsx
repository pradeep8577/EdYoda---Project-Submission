import React, { useEffect, useState } from "react";

function Subscribe() {
  const [selected, setSelected] = useState(1);
  const [totalAmount, setTotalAmount] = useState(278)


  useEffect(() => {
    switch (selected) {
      case 1:
        setTotalAmount(179+99)
        break;
      case 2:
        setTotalAmount(149+99)
        break;
      case 3:
        setTotalAmount(99+99)
        break;
      default:
        break;
    }
  }, [selected])
  

  return (
    <div className="subscribe">
      <p className="heroRightTitle">Select your subcription plan</p>
      <div className="subscribeCardContainer">
        <div className="subscribeCard disable">
          <div className="subscribeCardLeft">
            <div className="circle expired">
              <div className="circleExpired"></div>
            </div>
            <p className="subscribeCardLeftText">12 Months Subscription </p>
          </div>
          <div className="subscribeCardRight">
            <p className="subscribeCardRightText">
              Total <span className="subscribeCardRightPrice"> ₹99</span>
            </p>
            <p className="subscribeCardRightText">
              <span>₹8</span>{" "}
              <span className="subscribeCardRightMonth">/mo</span>
            </p>
          </div>
          <p className="sugession">Offer expired</p>
        </div>
        <div
          onClick={() => setSelected(1)}
          className={`subscribeCard recommended ${
            selected === 1 && "selectedCard"
          }`}
        >
          <div className="subscribeCardLeft">
            {selected === 1 ? <img src="right.svg" height={20} alt="" /> : <div className="circle"></div>}
            <p className="subscribeCardLeftText">12 Months Subscription </p>
          </div>
          <div className="subscribeCardRight">
            <p className="subscribeCardRightText">
              Total <span className="subscribeCardRightPrice"> ₹179</span>
            </p>
            <p className="subscribeCardRightText">
              <span>₹15</span>{" "}
              <span className="subscribeCardRightMonth">/mo</span>
            </p>
          </div>
          <p className="sugession">Recommended</p>
        </div>
        <div
          onClick={() => setSelected(2)}
          className={`subscribeCard ${selected === 2 && "selectedCard"}`}
        >
          <div className="subscribeCardLeft">
          {selected === 2 ? <img src="right.svg" height={20} alt="" /> : <div className="circle"></div>}
            <p className="subscribeCardLeftText">6 Months Subscription </p>
          </div>
          <div className="subscribeCardRight">
            <p className="subscribeCardRightText">
              Total <span className="subscribeCardRightPrice"> ₹149</span>
            </p>
            <p className="subscribeCardRightText">
              <span>₹25</span>{" "}
              <span className="subscribeCardRightMonth">/mo</span>
            </p>
          </div>
          {/* <p className='sugession'>Recommended</p> */}
        </div>
        <div
          onClick={() => setSelected(3)}
          className={`subscribeCard ${selected === 3 && "selectedCard"}`}
        >
          <div className="subscribeCardLeft">
          {selected === 3 ? <img src="right.svg" height={20} alt="" /> : <div className="circle"></div>}
            <p className="subscribeCardLeftText">3 Months Subscription </p>
          </div>
          <div className="subscribeCardRight">
            <p className="subscribeCardRightText">
              Total <span className="subscribeCardRightPrice"> ₹99</span>
            </p>
            <p className="subscribeCardRightText">
              <span>₹33</span>{" "}
              <span className="subscribeCardRightMonth">/mo</span>
            </p>
          </div>
          {/* <p className='sugession'>Recommended</p> */}
        </div>
      </div>
      <hr />
      <div className="subscriptionFeeContainer">
        <p>Subscription Fee</p>
        <p className="subscriptionFeeContainerPrice">₹18,500</p>
      </div>
      <div className="limitedOfferContainer">
          <div className="limitedOfferContainerHead">
            <p className="limitedOfferContainerHeadText">Limited time offer</p>
            <p className="limitedOfferContainerHeadPrice">- ₹18,401</p>
          </div>
          <div className="limitedOfferContainerBotton">
            <img height={16} src="limitedTime.svg" alt="" />
            <p className="limitedOfferContainerBottonText">Offer valid till 25th March 2023 </p>
          </div>
      </div>
      <div className="subscriptionFeeContainer">
        <p><span className="subscribeCardLeftText">Total</span> (Incl. of 18% GST)</p>
        <p className="totalPrice">₹{totalAmount}</p>
      </div>


      <div className="subscribeFooter">
      <div className="btnContainer">
          <button className="cancleBtn">cancel</button>
          <button className="proceedBtn">proceed to pay</button>
      </div>
      <img className="rezropayimage" src="pay.png" alt="" />
      </div>
    </div>
  );
}

export default Subscribe;
