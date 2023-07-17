import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import BlogGrid from '../components/Blog/BlogGrid';
import Footer from '../components/Footer/Footer';
import FooterData from '../components/Footer/FooterData';

const BlogGridPage = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/isif.jpg" Ptitle="Blog Grid" Pdescription="Blog Isif "/>
            <BlogGrid/>
            <Footer FooterData={FooterData}/>
        </div>
    )
}
export default BlogGridPage;