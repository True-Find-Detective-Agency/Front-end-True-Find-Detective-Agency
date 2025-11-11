import React, { useState } from 'react'
import {MessageSquare, Send } from 'lucide-react';
function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        caseType: '',
        urgency: '',
        message: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for contacting True Find Detective Agency. We will review your case and get back to you within 24 hours.');
        setFormData({
            name: '',
            email: '',
            phone: '',
            caseType: '',
            urgency: '',
            message: ''
        });
    };

    return (
        <div className="contact-form-wrapper">
            <div className="form-header">
                <MessageSquare size={32} />
                <h2>Send Us a Message</h2>
                <p>Fill out the form below and we'll get back to you as soon as possible</p>
            </div>

            <div className="contact-form">
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="name">Full Name *</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email Address *</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            required
                        />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="phone">Phone Number *</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+1 (555) 000-0000"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="caseType">Case Type *</label>
                        <select
                            id="caseType"
                            name="caseType"
                            value={formData.caseType}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select a case type</option>
                            <option value="background-check">Background Check</option>
                            <option value="corporate">Corporate Investigation</option>
                            <option value="surveillance">Surveillance</option>
                            <option value="fraud">Fraud Investigation</option>
                            <option value="missing-person">Missing Person</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="urgency">Urgency Level *</label>
                    <select
                        id="urgency"
                        name="urgency"
                        value={formData.urgency}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select urgency level</option>
                        <option value="emergency">Emergency - Immediate Response Needed</option>
                        <option value="urgent">Urgent - Within 24 Hours</option>
                        <option value="normal">Normal - Within 2-3 Days</option>
                        <option value="consultation">General Consultation</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="message">Case Details *</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please provide details about your case. All information is kept strictly confidential."
                        rows="6"
                        required
                    ></textarea>
                </div>

                <button
                    type="button"
                    className="submit-button"
                    onClick={handleSubmit}
                >
                    <Send size={20} />
                    Submit Inquiry
                </button>

                <p className="privacy-note">
                    🔒 All communications are encrypted and strictly confidential
                </p>
            </div>
        </div>
    )
}

export default ContactForm