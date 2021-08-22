import React from 'react';

class Card extends React.Component {
    render() {
        const { imgSRC, name, age, alterEgo, powers, activities, friends, addInfo } = this.props;
        return (
            <div className="gallery__card card">
                <div className="img-container">
                    <img className="card__img" src={imgSRC} alt={name} />
                </div>
                <div className="card__info">
                    <h2 className="card__title">{name}</h2>
                    <ul className="card__list">
                        <li className="card__item"><span className="bold">Возраст: </span>{age}</li>
                        <li className="card__item"><span className="bold">Имя: </span>{alterEgo}</li>
                        <li className="card__item"><span className="bold">Суперсилы: </span>{powers.join(", ")}</li>
                        <li className="card__item"><span className="bold">Род деятельности: </span>{activities.join(", ")}</li>
                        <li className="card__item"><span className="bold">Друзья: </span>{friends.join(", ")}</li>
                        <li className="card__item"><span className="bold">Подробнее: </span>{addInfo}</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Card;

