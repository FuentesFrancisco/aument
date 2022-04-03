import { connect} from 'react-redux';
import DeleteButton from '../../Components/Buttons/deleteButton';
import { compose, bindActionCreators } from 'redux';

import {setAction, deletePost} from '../../store/actions'


const mapStateToProps = state => {
    return {
      action: state.action,
      post: state.postData
  }
}

  const mapDispatchToProps = (
    (dispatch) => bindActionCreators({
        setAction: (data) => setAction(data),
        deleteAction: (id) => deletePost(id)
    }, dispatch)
  );
  
export default compose(connect(mapStateToProps, mapDispatchToProps))(DeleteButton)