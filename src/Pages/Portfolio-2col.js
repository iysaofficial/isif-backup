import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import Portfolios from '../components/Portfolios/Portfolio2grid';
import Footer from '../components/Footer/Footer';
import FooterData from '../components/Footer/FooterData';

const Portfolio2col = () => {
  return (
    <div className="body_wrapper">
      <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto" />
      <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Video" Pdescription="" />
      <Portfolios />
      <Footer FooterData={FooterData} />
    </div>
  );
};
export default Portfolio2col;
