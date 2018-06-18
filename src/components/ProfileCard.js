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

    // component output
    render() {
        return(
            <div className="card text-center mb-30">
                <div className="card__header">
                    <img className="card__img round" src={this.img} alt="profile" />
                </div>
                <div className="card__body">
                    <h4 className="card__title">{this.name}</h4>
                    <small className="card__subtitle">{this.profile ? this.profile : this.defaultProfile}</small>
                    <p className="card__text">{this.about ? this.about : this.defaultAbout}</p>
                    <Button type="default">
                        <span>{this.children ? this.children : this.defaultChildren}</span>
                        <i className="fas fa-plus"></i>
                    </Button>
                    <div className="social-icon">
                        {this.props.facebook && 
                            <a href={this.props.facebook} className="social-icon__list" target="_blank">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                        }
                        {this.props.twitter && 
                            <a href={this.props.twitter} className="social-icon__list" target="_blank">
                                <i className="fab fa-twitter"></i>
                            </a>
                        }
                       {this.props.instagram && 
                            <a href={this.props.instagram} className="social-icon__list" target="_blank">
                                 <i className="fab fa-instagram"></i>
                            </a>
                        }
                    </div>
                </div>
            </div>
        )
    }

}

export default ProfileCard;