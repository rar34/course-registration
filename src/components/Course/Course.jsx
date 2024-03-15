import PropTypes from 'prop-types'

const Course = ({title}) => {
    // console.log(title)
    return (
        <div>
            <p className='font-semibold my-2'>{title}</p>
        </div>
    );
};

Course.propTypes ={
    title: PropTypes.string
}
export default Course;