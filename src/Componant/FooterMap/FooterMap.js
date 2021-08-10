import React from 'react';

const FooterMap = () => {
    return (
        <div className="p-3 mx-auto bg-light shadow rounded">
            <h4 className="card-title text-info text-center my-4">Hall Map Location</h4>
            <iframe title="Shaheed Abdur Rab Hall Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1843.3971908134793!2d91.78454262374197!3d22.474359897987156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd6fb74dd70a7%3A0xcbecb06e9b9e305b!2sShaheed%20Abdur%20Rab%20Hall!5e0!3m2!1sen!2sbd!4v1628429736610!5m2!1sen!2sbd" width="100%" height="400px" style={{border:"0"}}  loading="lazy"></iframe>
        </div>
    );
};

export default FooterMap;