import PropTypes from 'prop-types'

const Card = ({ card, handleAddTitle }) => {
    // console.log(card);
    const { photo, name, description, price, credit } = card;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={photo} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <div className='flex justify-between my-3'>
                        <p className='font-medium'>Price: {price}</p>
                        <p className='font-medium'>Credit: {credit}hr</p>
                    </div>
                    <div className="card-actions">
                        <button onClick={()=>handleAddTitle(card)} className="btn btn-primary w-full">Select</button>
                    </div>
                </div>
            </div>
        </div>
    );
};


Card.propTypes = {
    card: PropTypes.object,
    handleAddTitle:PropTypes.func
}
export default Card;