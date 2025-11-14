/* eslint-disable no-unused-vars */
import { useEffect, useRef } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import LocationButton from "../components/LocationButton";

function BranchCard({ branch, index }) {
  const imgRef = useRef(null);
  const contentRef = useRef(null);

  // Match image box height === content box height
  useEffect(() => {
    if (imgRef.current && contentRef.current) {
      imgRef.current.style.height = contentRef.current.offsetHeight + "px";
    }
  }, []);

  return (
    <div className={`branch-card ${index % 2 === 0 ? "even-card" : "odd-card"}`}>
      
      {/* IMAGE LEFT (even index) */}
      {index % 2 === 0 && (
        <div className="branch-img-box" ref={imgRef}>
          <Swiper
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 1200 }}
            speed={900}
            modules={[Autoplay]}
          >
            {branch.images.map((img) => (
              <SwiperSlide key={img}>
                <img src={img} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}

      {/* CONTENT */}
      <div className="branch-content" ref={contentRef}>
        
        <div className="branch-header">
          <div className="branch-location">
            <MapPin size={24} />
            <div>
              <h3>{branch.city}</h3>
              <span className="branch-state">{branch.state}</span>
            </div>
          </div>
          <div className="branch-badge">Est. {branch.established}</div>
        </div>

        <div className="branch-details">
          <div className="detail-item">
            <MapPin size={18} />
            <div>
              <strong>Address</strong>
              <p>{branch.address}</p>
              <p>{branch.city}, {branch.state} {branch.zip}</p>
            </div>
          </div>

          <div className="detail-item">
            <Phone size={18} />
            <div>
              <strong>Phone</strong>
              <a href={`tel:${branch.phone}`}>{branch.phone}</a>
            </div>
          </div>

          <div className="detail-item">
            <Mail size={18} />
            <div>
              <strong>Email</strong>
              <a href={`mailto:${branch.email}`}>{branch.email}</a>
            </div>
          </div>

          <div className="detail-item">
            <Clock size={18} />
            <div>
              <strong>Hours</strong>
              <p>{branch.hours}</p>
            </div>
          </div>
        </div>

        <div className="branch-manager">
          <strong>Branch Manager:</strong> {branch.manager}
        </div>

        <div className="branch-services">
          <strong>Services Available:</strong>
          <div className="services-tags">
            {branch.services.map((service, i) => (
              <span key={i} className="service-tag">{service}</span>
            ))}
          </div>
        </div>

        <LocationButton lat="23.2056" lng="77.0937" />

      </div>

      {/* IMAGE RIGHT (odd index) */}
      {index % 2 !== 0 && (
        <div className="branch-img-box" ref={imgRef}>
          <Swiper
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 1200 }}
            speed={900}
            modules={[Autoplay]}
          >
            {branch.images.map((img) => (
              <SwiperSlide key={img}>
                <img src={img} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
}

export default BranchCard;
