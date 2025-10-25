
'use client';
import { useEffect, useState } from 'react';

export default function Home() {



  let portraitVideos = [
    "https://res.cloudinary.com/dijdzmfvn/video/upload/v1761338385/Project_4-_d0va5s.mp4",
    "https://res.cloudinary.com/dijdzmfvn/video/upload/v1761338349/For_Profile_nvyveu.mp4",
    "https://res.cloudinary.com/dijdzmfvn/video/upload/v1761338407/With_Mo_wcmprg.mp4",
    "https://res.cloudinary.com/dijdzmfvn/video/upload/v1761338415/Test2_vtxkve.mp4",
    "https://res.cloudinary.com/dijdzmfvn/video/upload/v1761338323/Assingmanet_dxppy0.mp4",
    "https://res.cloudinary.com/dijdzmfvn/video/upload/v1761338385/129_-_Nicolette_Fleischmann_-_11824_SW_Antarus_Ct_Port_St_Lucie-V2_snvjoz.mp4",

  ];

  let landscapeVideos = [
    "https://res.cloudinary.com/dijdzmfvn/video/upload/v1761338544/Job_1_After_Revision_jtwfsy.mp4",
    "https://res.cloudinary.com/dijdzmfvn/video/upload/v1761384842/T-002-Oude_Nieuwelandseweg_3_Final_2_o9viuy.mp4",
    "https://res.cloudinary.com/dijdzmfvn/video/upload/v1761384812/Michael_Fk_Liam_Thomas_-_Hold_Me.Mp3_rd1k9b.mp4",
    "https://res.cloudinary.com/dijdzmfvn/video/upload/v1761338560/T-006_o2fhun.mp4",
  ];

  // Add this array at the top with your other arrays
  const resumeData = {
    pdfUrl: "/assets/suhail-resume.pdf", // Update with your actual PDF path
    downloadName: "Karrar_Visuals_Resume.pdf"
  };




  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "e2712e74-ef2a-4128-b4ca-806d39ec6c1f",
          ...formData
        }),
      });

      const result = await response.json();
      if (result.success) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  useEffect(() => {
    // Handle video play/pause
    const videos = document.querySelectorAll("video");

    const handlePlay = (event) => {
      videos.forEach((video) => {
        if (video !== event.target) {
          video.pause();
        }
      });
    };

    videos.forEach((video) => {
      video.addEventListener("play", handlePlay);
    });

    return () => {
      videos.forEach((video) => {
        video.removeEventListener("play", handlePlay);
      });
    };
  }, []);

  useEffect(() => {
    // Handle video play/pause - only one video plays at a time
    const handlePlay = (event) => {
      const allVideos = document.querySelectorAll("video");
      allVideos.forEach((video) => {
        if (video !== event.target && !video.paused) {
          video.pause();
        }
      });
    };

    // Use event delegation on the document for better performance
    document.addEventListener("play", handlePlay, true);

    return () => {
      document.removeEventListener("play", handlePlay, true);
    };
  }, []);

  return (
    <main className="main">
      <header id="header" className="header sticky-top">
        <div className="topbar d-flex align-items-center">
          <div className="container d-flex justify-content-center justify-content-md-between">
            <div className="contact-info d-flex align-items-center">
              <i className="bi bi-envelope d-flex align-items-center">
                <a href="mailto:syedshail4pak@gmail.com">syedshail4pak@gmail.com</a>
              </i>

              <i className="bi bi-phone d-flex align-items-center ms-4">
                <span>+92 349 9535028</span>
              </i>
            </div>

            <div className="social-links d-none d-md-flex align-items-center">
              <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
              <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
              <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>
        <div className="branding d-flex align-items-cente">

          <div className="container position-relative d-flex align-items-center justify-content-between">
            <a href="/" className="logo d-flex align-items-center">
              <h1 className="sitename">
                <img src="assets/img/mainlogo.png" alt="Karrar Visuals Logo" style={{ height: '40px', marginRight: '10px' }} />
              </h1>
            </a>

            <nav id="navmenu" className="navmenu">
              <ul>
                <li><a href="#hero" className="active">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#videos">Portfolio</a></li>
                <li><a href="#team">Testimonials</a></li>
                <li><a href="#resume">Resume</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
              <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
            </nav>

          </div>

        </div>
      </header>

      <section id="hero" className="hero section dark-background">

        <div id="hero-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">

          <div className="carousel-item active">
            <video
              className="background-video"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            >
              <source src="https://res.cloudinary.com/dijdzmfvn/video/upload/v1761338555/T-003-Vossenlaan_24_Final_4_c0ctmk.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div className="carousel-container">
              <h2>Welcome to Karrar Visuals<br /></h2>
              <p>
                Your story deserves more than just a video — we make visuals that inspire, connect, and convert.
              </p>
              <a href="#contact" className="btn-get-started">Contact</a>
            </div>
          </div>

          <ol className="carousel-indicators"></ol>

        </div>

      </section>

      <section id="team" className="team section">

        <div className="container section-title" data-aos="fade-up">
          <h2>Testimonials</h2>
          <p>Real stories from satisfied clients who trusted Karrar Visuals to bring their vision to life</p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-5">
            <div className="col-xl-4 col-md-6 d-flex" data-aos="zoom-in" data-aos-delay="600">
              <div className="team-member">
                <div className="member-img" style={{ aspectRatio: '9/16', overflow: 'hidden' }}>
                  <video
                    src="https://res.cloudinary.com/dijdzmfvn/video/upload/v1761338385/Project_4-_d0va5s.mp4"
                    className="img-fluid"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    controls
                    preload="metadata"
                    alt=""
                  />
                </div>
              </div>
            </div>
            {portraitVideos.slice(1).map((videoSrc, index) => (
              <div key={index} className="col-xl-4 col-md-6 d-flex" data-aos="zoom-in" data-aos-delay={600 + (index + 0) * 100}>
                <div className="team-member">
                  <div className="member-img" style={{ aspectRatio: '9/16', overflow: 'hidden' }}>
                    <video
                      src={videoSrc}
                      className="img-fluid"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      controls
                      preload="metadata"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            ))}


          </div>
        </div>

      </section>

      <section id="videos" className="videos section">

        <div className="container section-title" data-aos="fade-up">
        </div>
        <div className="container">

          <div className="row gy-4">

            <div className="" data-aos="fade-up" data-aos-delay="250">
              <div className="content ps-0 ps-lg-5">

                <div className="position-relative mt-4">
                  <video
                    className="img-fluid rounded-4"
                    controls
                    preload="metadata"
                    style={{ width: '100%' }}
                  >
                    <source src="https://res.cloudinary.com/dijdzmfvn/video/upload/v1761338555/T-003-Vossenlaan_24_Final_4_c0ctmk.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap' }} data-aos="fade-up" data-aos-delay="250">

              {landscapeVideos.map((videoSrc, index) => (
                <div key={index} className="col-lg-6 content ps-0 ps-lg-5">
                  <div className="position-relative mt-4">
                    <video
                      className="img-fluid rounded-4"
                      controls
                      preload="metadata"
                      style={{ width: '100%' }}
                    >
                      <source src={videoSrc} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              ))}

            </div>
          </div>

        </div>

      </section>

      <section id="about" className="about section">

        <div className="container section-title" data-aos="fade-up">
          <h2>About Us</h2>

          <h2>Karrar Visuals is a creative studio specializing in real estate and commercial video editing, storytelling, and visual branding. We combine artistic vision with technical precision to produce videos that not only look stunning but also deliver results.
          </h2>
        </div>
      </section>

      <section id="stats" className="stats section light-background">

        <div className="container" data-aos="fade-up" data-aos-delay="100">

          <div className="row gy-4">

            <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
              <i className="bi bi-emoji-smile"></i>
              <div className="stats-item">
                <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span>
                <p>Happy Clients</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
              <i className="bi bi-journal-richtext"></i>
              <div className="stats-item">
                <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter"></span>
                <p>Projects</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
              <i className="bi bi-headset"></i>
              <div className="stats-item">
                <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1" className="purecounter"></span>
                <p>Hours Of Support</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
              <i className="bi bi-people"></i>
              <div className="stats-item">
                <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" className="purecounter"></span>
                <p>Hard Workers</p>
              </div>
            </div>

          </div>

        </div>

      </section>

      <section id="resume" className="resume section" style={{ padding: '60px 0', background: '#f8f9fa' }}>
        <div className="container section-title" data-aos="fade-up">
          <h2>Resume</h2>
          <p>Download my professional resume to learn more about my experience and skills</p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div style={{
                background: '#fff',
                borderRadius: '20px',
                padding: '40px',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}>
                {/* Resume Preview */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '30px',
                  marginBottom: '30px',
                  paddingBottom: '30px',
                  borderBottom: '2px solid #f0f0f0',
                  flexWrap: 'wrap'
                }}>
                  <div style={{
                    width: '100px',
                    height: '100px',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    borderRadius: '15px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <i className="bi bi-file-earmark-pdf" style={{ fontSize: '50px', color: '#fff' }}></i>
                  </div>
                  <div>
                    <h3 style={{ margin: '0 0 10px 0', fontSize: '28px', fontWeight: '700', color: '#333' }}>
                      Professional Resume
                    </h3>
                    <p style={{ margin: '5px 0', color: '#666', fontSize: '16px' }}>
                      Video Editor & Creative Director
                    </p>
                    <p style={{ fontSize: '14px', color: '#999', margin: '5px 0' }}>
                      PDF Document
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div style={{
                  display: 'flex',
                  gap: '15px',
                  marginBottom: '30px',
                  flexWrap: 'wrap'
                }}>
                  <a
                    href={resumeData.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      flex: 1,
                      minWidth: '180px',
                      padding: '15px 30px',
                      borderRadius: '50px',
                      fontWeight: '600',
                      fontSize: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '10px',
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      color: '#fff',
                      border: 'none',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 8px 20px rgba(102, 126, 234, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    <i className="bi bi-eye"></i> View Resume
                  </a>
                  <a
                    href={resumeData.pdfUrl}
                    download={resumeData.downloadName}
                    style={{
                      flex: 1,
                      minWidth: '180px',
                      padding: '15px 30px',
                      borderRadius: '50px',
                      fontWeight: '600',
                      fontSize: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '10px',
                      background: '#fff',
                      color: '#667eea',
                      border: '2px solid #667eea',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = '#667eea';
                      e.target.style.color = '#fff';
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 8px 20px rgba(102, 126, 234, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = '#fff';
                      e.target.style.color = '#667eea';
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    <i className="bi bi-download"></i> Download
                  </a>
                </div>

                {/* Highlights */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  gap: '20px',
                  flexWrap: 'wrap'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '12px 20px',
                    background: '#f8f9fa',
                    borderRadius: '50px',
                    transition: 'all 0.3s ease'
                  }}>
                    <i className="bi bi-award" style={{ fontSize: '24px', color: '#667eea' }}></i>
                    <span style={{ fontWeight: '600', fontSize: '14px' }}>5+ Years Experience</span>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '12px 20px',
                    background: '#f8f9fa',
                    borderRadius: '50px',
                    transition: 'all 0.3s ease'
                  }}>
                    <i className="bi bi-camera-video" style={{ fontSize: '24px', color: '#667eea' }}></i>
                    <span style={{ fontWeight: '600', fontSize: '14px' }}>500+ Projects</span>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '12px 20px',
                    background: '#f8f9fa',
                    borderRadius: '50px',
                    transition: 'all 0.3s ease'
                  }}>
                    <i className="bi bi-star" style={{ fontSize: '24px', color: '#667eea' }}></i>
                    <span style={{ fontWeight: '600', fontSize: '14px' }}>Award Winning</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Contact</h2>
          <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">

          <div className="row gy-4">

            <div className="col-lg-6">
              <div className="info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="200">
                <i className="bi bi-geo-alt"></i>
                <h3>Address</h3>
                <p>Islamabad, Pakistan</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="300">
                <i className="bi bi-telephone"></i>
                <h3>Call Us</h3>
                <p>+92 349 9535028</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="400">
                <i className="bi bi-envelope"></i>
                <h3>Email Us</h3>
                <p>syedshail4pak@gmail.com</p>
              </div>
            </div>

          </div>

          <form
            onSubmit={handleSubmit}
            className="php-email-form row gy-4"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="col-md-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="form-control"
              />
            </div>

            <div className="col-md-6">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="form-control"
              />
            </div>

            <div className="col-md-12">
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="form-control"
              />
            </div>

            <div className="col-md-12">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                placeholder="Message"
                required
                className="form-control"
              ></textarea>
            </div>

            <div className="col-md-12 text-center" >
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary" style={{
                  flex: 1,
                  minWidth: '180px',
                  padding: '15px 30px',
                  borderRadius: '50px',
                  fontWeight: '600',
                  fontSize: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: '#fff',
                  border: 'none',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </section>

      <footer id="footer" className="footer light-background">

        <div className="container footer-top">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6 footer-about">
              <a href="index.html" className="logo d-flex align-items-center">
                <span className="sitename">Karrar</span>
              </a>
              <div className="footer-contact pt-3">
                <p>Islamabad Pakistan</p>
                <p></p>
                <p className="mt-3"><strong>Phone:</strong> <span>+92 349 9535028</span></p>
                <p><strong>Email:</strong> <span>karrarvisuals@digitalempowermentnetwork.org</span></p>
              </div>
              <div className="social-links d-flex mt-4">
                <a href=""><i className="bi bi-instagram"></i></a>
                <a href=""><i className="bi bi-linkedin"></i></a>
              </div>
            </div>

            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Terms of service</a></li>
                <li><a href="#">Privacy policy</a></li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Our Editing Services</h4>
              <ul>
                <li><a href="#">Real State Edits</a></li>
                <li><a href="#">Promotional Edits</a></li>
                <li><a href="#">Event Highlights</a></li>
                <li><a href="#">Social Media Reels</a></li>
              </ul>
            </div>

          </div>
        </div>

        <div className="container copyright text-center mt-4">
          <p>© <span>Copyright</span> <strong className="px-1 sitename">Karrar</strong> <span>All Rights Reserved</span></p>
          <div className="credits">
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>

      </footer>
    </main>
  );
}

