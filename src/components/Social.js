import React from 'react';

const className = 'social-icon';
const classBlock = `${className}__list`;
const classItem = `${classBlock}__item`;

const Social = () => {
    return(
        <div className={className}>
            <h2>Social</h2>
            <ul className={classBlock}>
                <li className={classItem}><i className="icon-Facebook-KO" /></li>
                <li className={classItem}><i className="icon-Facebook" /></li>

                <li className={classItem}><i className="icon-Foursquare-KO" /></li>
                <li className={classItem}><i className="icon-Foursquare" /></li>

                <li className={classItem}><i className="icon-GoogleAlerts-KO" /></li>
                <li className={classItem}><i className="icon-GoogleAlerts" /></li>

                <li className={classItem}><i className="icon-GooglePlus-KO" /></li>
                <li className={classItem}><i className="icon-GooglePlus" /></li>

                <li className={classItem}><i className="icon-Instagram-KO" /></li>
                <li className={classItem}><i className="icon-Instagram" /></li>
                
                <li className={classItem}><i className="icon-LinkedIn-KO" /></li>
                <li className={classItem}><i className="icon-LinkedIn" /></li>

                <li className={classItem}><i className="icon-Money-KO" /></li>
                <li className={classItem}><i className="icon-Money" /></li>

                <li className={classItem}><i className="icon-Pinterest-KO" /></li>
                <li className={classItem}><i className="icon-Pinterest" /></li>

                <li className={classItem}><i className="icon-RSS-KO" /></li>
                <li className={classItem}><i className="icon-RSS" /></li>

                <li className={classItem}><i className="icon-Tumblr-KO" /></li>
                <li className={classItem}><i className="icon-Tumblr" /></li>

                <li className={classItem}><i className="icon-Twitter-KO" /></li>
                <li className={classItem}><i className="icon-Twitter" /></li>

                <li className={classItem}><i className="icon-Yelp-KO" /></li>
                <li className={classItem}><i className="icon-Yelp" /></li>

                <li className={classItem}><i className="icon-Youtube-KO" /></li>
                <li className={classItem}><i className="icon-Youtube" /></li>
            </ul>
        </div>
    )
}

export default Social;