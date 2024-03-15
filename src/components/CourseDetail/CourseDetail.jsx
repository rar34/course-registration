import Course from "../Course/Course";
import PropTypes from 'prop-types'


const CourseDetail = ({titles, price, credit}) => {
    // console.log(titles)
    return (
        <div className="md:w-1/3">
            <h2 className="text-2xl font-bold text-lime-600 my-3">Credit Hour Remaining: {credit}hr</h2>
            <hr />
            <h2 className="text-2xl font-bold">Course Name</h2>
            {
                titles.map((title,idx) => <Course key={idx} title={title}></Course>)
            }
            <hr />
            <p className="font-bold my-3">Total Price: {price} USD</p>
            
        </div>
    );
};

CourseDetail.propTypes ={
    titles: PropTypes.array,
    price: PropTypes.number,
    credit: PropTypes.number
}
export default CourseDetail;