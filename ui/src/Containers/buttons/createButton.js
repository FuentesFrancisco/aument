import { connect} from 'react-redux';
import CreateButon from '../../Components/Buttons/createButton';
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
  
export default compose(connect(mapStateToProps, mapDispatchToProps))(CreateButon)