import React from 'react';
import Button from './Button';


export class ProfileCard extends React.Component{
    constructor(props) {
        super();
        this.name = props.name;
        this.img = props.img;
        this.profile = props.profile;
        this.about = props.about;
        this.children = props.children;

        // default values if user not provide any value
        this.defaultProfile = 'Graphic eater, hamburger designer, not necessarily in that order';
        this.defaultAbout = "Default text from component. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium assumenda at id rem qui, temporibus voluptatem possimus excepturi amet! Animi nostrum, voluptatibus quo a repudiandae itaque. Fugiat laudantium sint."
        this.defaultChildren = 'Read more'
        
    }

    // user designatin 
    getProfile() {
        if(this.profile) {
            return this.profile;
        }else{
            return this.defaultProfile;
        }
    }

    // about text content
    getAbout() {
        if(this.about) {
            return this.about;
        }else{
            return this.defaultAbout;
        }
    }

    // cta button
    ctaText() {
        if(this.children) {
            return this.children;
        }else{
            return this.defaultChildren;
        }
    }

    // social icons 
    facebook() {
        if(this.props.facebook) {
            return (
                <a href={this.props.facebook} className="social-icon__list" target="_blank">
                    <i className="fab fa-facebook-f"></i>
                </a>
            );
        }        
    }
    twitter() {
        if(this.props.twitter) {
            return(
                <a href={this.props.twitter} className="social-icon__list" target="_blank">
                    <i className="fab fa-twitter"></i>
                </a>
            )
        }        
    }
    instagram() {
        if(this.props.instagram) {
            return (
                <a href={this.props.instagram} className="social-icon__list" target="_blank">
                    <i className="fab fa-instagram"></i>
                </a>
            )
        }        
    }
    // component output
    render() {
        return(
            <div className="card text-center mb-30">
                <div className="card__header">
                    <img className="card__img round" src={this.img} alt="profile" />
                </div>
                <div className="card__body">
                    <h4 className="card__title">{this.name}</h4>
                    <small className="card__subtitle">{this.getProfile()}</small>
                    <p className="card__text">{this.getAbout()}</p>
                    <Button type="default">
                        <span>{this.ctaText()}</span>
                        <i className="fas fa-plus"></i>
                    </Button>
                    <div className="social-icon">
                       {this.facebook()}
                       {this.twitter()}
                       {this.instagram()}
                    </div>
                </div>
            </div>
        )
    }

}

export default ProfileCard;