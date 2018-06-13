import React from 'react';
import Button from './Button';


// const ProfileCard = ({img, name, profile, description}) => (

//     <div className="card">
//         <figure>
//             <img src={img} />
//             <figcaption>
//                 <h3>{name}</h3>
//                 <small>{profile}</small>
//             </figcaption>
//         </figure>
//         <div className="card__content">
//             <p>{description}</p>
//         </div>
//     </div>
    
// );

// export default ProfileCard;

export class ProfileCard extends React.Component{
    render() {

        let profile = 'Graphic eater, hamburger designer, not necessarily in that order',
            cardText = "I'm a 26-year-old art director and graphic designer based in London who loves to think and to create. I'm a calligraphy addict and an art lover. I'm a soldier and I would die for beauty. Why? Remember that the egg has a perfect shape despite coming out of an ass."
        return(
            <div className="card text-center mb-30">
                
                <div className="card__header">
                    <img className="card__img round" src={this.props.img} alt="profile" />
                </div>
                
                <div className="card__content">
                    <h4 className="card__title">{this.props.name}</h4>
                    <small className="card__subtitle">{profile}</small>
                    <p className="card__text">{cardText}</p>
                    <Button type="default">
                        <span children="Read More"></span>
                        <i className="fas fa-plus"></i>
                    </Button>
                </div>

                <div className="card__footer">
                    <div className="social-icon">
                        <a href="button"><i className="fab fa-facebook-f"></i></a>
                        <a href="button"><i className="fab fa-twitter"></i></a>
                        <a href="button"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileCard;