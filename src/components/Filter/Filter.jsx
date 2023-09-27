import css from './Filter.module.css';
import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => (
  <>
    <label>
      Find contacts by name
      <input
        className={css.input}
        type="name"
        value={value}
        onChange={onChange}
      />
    </label>
  </>
);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
