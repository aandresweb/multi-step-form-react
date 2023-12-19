import React, { useEffect, useState } from "react";
import { Text, Title } from "../../../../Base";
import thankyouImg from "../../../../../assets/images/icon-thank-you.svg";
import BounceLoader from "react-spinners/BounceLoader";
import "./index.css";

function ThankyouStep() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const isLoading = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(isLoading);
  }, []);

  const Loading = () => {
    return (
      <div className="loading">
        <BounceLoader color="#dadada" />
      </div>
    );
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="step-content">
          <div className="step-thankyou-wrapper">
            <img src={thankyouImg} className="thankyou-img mb-medium " />
            <Title className="mb-medium">Thank you!</Title>
            <Text>
              Thanks for confirming your subscription! We hope you have fun
              using our platform. If you ever need support, please feel free to
              email us at support@loregaming.com
            </Text>
          </div>
        </div>
      )}
    </>
  );
}

export default ThankyouStep;
