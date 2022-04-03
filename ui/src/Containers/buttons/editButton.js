import { connect} from 'react-redux';
import EditButton from '../../Components/Buttons/editButton';
import { compose, bindActionCreators } from 'redux';

import {setAction} from '../../store/actions'


const mapStateToProps = state => {
    return {
      action: state.action
  }
}

  const mapDispatchToProps = (
    (dispatch) => bindActionCreators({
        setAction: (data) => setAction(data),
    }, dispatch)
  );
  
export default compose(connect(mapStateToProps, mapDispatchToProps))(EditButton)