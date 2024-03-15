import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";
import PropTypes from 'prop-types'

const Cards = ({handleAddTitle}) => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('course.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, []);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:w-3/4">
            {
                cards.map(card => <Card key={card.id} card={card} handleAddTitle={handleAddTitle}></Card>)
            }
        </div>
    );
};

Cards.propTypes ={
    handleAddTitle: PropTypes.func
}

export default Cards;