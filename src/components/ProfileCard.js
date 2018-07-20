import React from 'react';
import Button from './Button';

const ProfileCard = ({ img, name, profile, about, buttonText, socialIcons }) => {
  return (
    <div className="card card--profile text-center">
        <div className="card__header">
            <img className="card__img round" src={img} alt="profile" />
            <h4 className="card__title">{name}</h4>
            <small className="card__subtitle">{profile}</small>
        </div>
        <div className="card__body">
            <p className="card__text">{about}</p>
            <Button type="profile">
                <span>{buttonText} +</span>
            </Button>
            <div className="card__icons">
                {
                  socialIcons.length && socialIcons.map(icon => {
                    return (
                      <a key={icon.link} href={icon.link} className="social-icon" target="_blank">
                        <i className={`fab fa-${icon.iconName}`}></i>
                      </a>
                    )
                  })
                }
            </div>
        </div>
    </div>
  );
}


export default ProfileCard;
