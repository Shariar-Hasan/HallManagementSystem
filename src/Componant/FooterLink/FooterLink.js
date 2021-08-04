import React from 'react';
import FooterLinkItem from '../FooterLinkItem/FooterLinkItem';
import './FooterLink.css'
const FooterLink = () => {
    // d-md-flex justify-content-center align-items-center
    return (
        <div className="w-100 footerLink ">
            <div className="container">
                <div className="row ">   
                    <div className="col-lg-2 col-md-6 p-4">
                        <FooterLinkItem values={[
                            {
                                title: "Vision and Mission",
                                url: "https://cu.ac.bd/content/index.php?menumapno=13"
                            },
                            {
                                title: "Facts and Acts",
                                url: "https://cu.ac.bd/content/index.php?menumapno=14"
                            },
                            {
                                title: "News & Events",
                                url: "https://cu.ac.bd/news_and_events.php?id=1"
                            },
                            {
                                title: "Notice Board",
                                url: "/notice"
                            },
                            {
                                title: "Directories",
                                url: "https://cu.ac.bd/content/index.php?menumapno=22"
                            },
                            {
                                title: "Department/Institute",
                                url: "https://cu.ac.bd/allsections.php?menumapno=28"
                            },
                            {
                                title: "Academic Calendar",
                                url: "https://cu.ac.bd/content/index.php?menumapno=31"
                            },
                            {
                                title: "Contact Us",
                                url: "https://cu.ac.bd/content/index.php?menumapno=26"
                            },

                        ]}></FooterLinkItem>
                    </div>
                    <div className="col-lg-2 col-md-6 p-4">
                        <FooterLinkItem values={[
                            {
                                title: "Central Library",
                                url: "https://library.cu.ac.bd/"
                            },
                            {
                                title: "Financial Aid",
                                url: "https://cu.ac.bd/content/index.php?menumapno=48"
                            },
                            {
                                title: "Office of the Vice-Chancellor",
                                url: "https://cu.ac.bd/vco/"
                            },
                            {
                                title: "Registrar Office",
                                url: "https://cu.ac.bd/rego/"
                            },
                            {
                                title: "Controller of Examination Office",
                                url: "https://cu.ac.bd/cexo/"
                            },
                            {
                                title: "Medical Center",
                                url: "https://cu.ac.bd/medicalcenter/"
                            },
                            {
                                title: "Proctorial Body",
                                url: "https://cu.ac.bd/proctoroffice/"
                            },

                        ]}></FooterLinkItem>
                    </div>
                    <div className="col-lg-3  p-4 col-md-12 mx-auto  text-md-center">
                        <img src="https://cu.ac.bd/assets/image/culogo.png"  alt="Cu Logo" className=" cu-logo " />
                    </div>
                    <div className="col-lg-2  p-4 col-md-6">
                        <FooterLinkItem values={[
                            {
                                title: "ICT Cell",
                                url: "https://cu.ac.bd/ict/"
                            },
                            {
                                title: "Guest Houses",
                                url: "https://cu.ac.bd/content/index.php?menumapno=660"
                            },
                            {
                                title: "Research and Publication Cell",
                                url: "https://curpc.cu.ac.bd/"
                            },
                            {
                                title: "University Journal",
                                url: "https://cu.ac.bd/content/index.php?menumapno=72"
                            },
                            {
                                title: "Conference",
                                url: "https://cu.ac.bd/content/index.php?menumapno=73"
                            },
                            {
                                title: "Publications",
                                url: "https://cu.ac.bd/content/index.php?menumapno=74"
                            },
                            {
                                title: "Residence Halls",
                                url: "/"
                            },

                        ]}></FooterLinkItem>
                    </div>
                    <div className="col-lg-2  p-4 col-md-6">
                        <FooterLinkItem values={[
                            {
                                title: "CU Shuttle",
                                url: "https://cu.ac.bd/content/index.php?menumapno=86"
                            },
                            {
                                title: "Arts & Culture",
                                url: "https://cu.ac.bd/content/index.php?menumapno=91"
                            },
                            {
                                title: "Campus Attractions",
                                url: "https://cu.ac.bd/content/index.php?menumapno=91"
                            },
                            {
                                title: "Gallery",
                                url: "/gallery"
                            },
                            {
                                title: "Forms & Downloads",
                                url: "https://cu.ac.bd/forms.php"
                            },
                            {
                                title: "Important Weblinks",
                                url: "https://cu.ac.bd/important_weblinks.php"
                            },
                            {
                                title: "FAQ",
                                url: "/faq"
                            },

                        ]}></FooterLinkItem>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default FooterLink;