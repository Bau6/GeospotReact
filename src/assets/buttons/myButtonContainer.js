import { connect } from 'react-redux';
import MyButton from './button';

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // Здесь можно определить действия, если это необходимо
    };
};

const MyButtonContainer = connect(mapStateToProps, mapDispatchToProps)(MyButton);

export default MyButtonContainer;