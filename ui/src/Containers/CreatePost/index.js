import { connect} from 'react-redux';
import Create from '../../Components/FormPost/index.js'
import { compose, bindActionCreators } from 'redux';

import {postData,setAction, createPost} from '../../store/actions'


const mapStateToProps = state => {
    return {
      post: state.postData,
      action: state.action
  }
}

  const mapDispatchToProps = (
    (dispatch) => bindActionCreators({
        setAction: (data) => setAction(data),
        postData: (data) => postData(data),
        request: (data) => createPost(data)
    }, dispatch)
  );
  
export default compose(connect(mapStateToProps, mapDispatchToProps))(Create)