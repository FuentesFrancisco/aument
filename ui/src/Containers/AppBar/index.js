import { connect} from 'react-redux';
import AppBar from '../../Components/AppBar'
import { compose, bindActionCreators } from 'redux';

import {setAction} from '../../store/actions';


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
  
export default compose(connect(mapStateToProps, mapDispatchToProps))(AppBar)