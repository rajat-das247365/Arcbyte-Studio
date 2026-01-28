import React from 'react'
import WebService from "../components/Services/WebService";
import DesignService from "../components/Services/DesignService";
import VideoService from "../components/Services/VideoService";
import ThreeDService from "../components/Services/ThreeDService";
import AdsService from "../components/Services/AdsService";
import EcommerceService from "../components/Services/EcommerceService";

const ServicesPage = () => {
  return (
       <>
      <WebService />
      <DesignService />
      <VideoService />
      <ThreeDService />
      <AdsService />
      <EcommerceService />
    </>
  )
}

export default ServicesPage
