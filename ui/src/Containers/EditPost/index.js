import { connect} from 'react-redux';
import EditPost from '../../Components/FormPost/index.js'
import { compose, bindActionCreators } from 'redux';

import {postData, setAction, editPost} from '../../store/actions'


const mapStateToProps = state => {
    return {
      post: state.postData,
      action: state.action
  }
}

  const mapDispatchToProps = (
    (dispatch) => bindActionCreators({
        postData: (data) => postData(data),
        setAction: (data) => setAction(data),
        request: (data) => editPost(data),
    }, dispatch)
  );
  
export default compose(connect(mapStateToProps, mapDispatchToProps))(EditPost)