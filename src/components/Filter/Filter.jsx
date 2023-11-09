import PropTypes from 'prop-types';
import {FilterDiv} from './Filter.styled'

function Filter ({value, onChange}){
    return (
        <FilterDiv>
            <label htmlFor="filter">
            Find contacts by name <br/>
                <input autoComplete='off' type="text" name="filter" value={value} onChange={onChange} />
            </label>
        </FilterDiv>
   )}
   
export default Filter;

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
     };