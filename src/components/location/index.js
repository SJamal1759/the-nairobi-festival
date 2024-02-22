import React from "react";

const Location = () => {
  return (
    <div className="location-wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d31910.454584683845!2d36.79862629105313!3d-1.2901868187489647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x182f10d77211dcc1%3A0x78befe5deee7e8b8!2sCity%20Hall%20Annex!3m2!1d-1.2865786!2d36.820994!5e0!3m2!1sen!2ske!4v1708565432524!5m2!1sen!2ske"
        width="100%"
        height="500px"
        frameBorder="0"
        title="googlemaps"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="location-tag">
        <div>Location</div>
      </div>
    </div>
  );
};
export default Location;
