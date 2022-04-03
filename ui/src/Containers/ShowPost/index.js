import { connect} from 'react-redux';
import ShowPost from '../../Components/showPost/index.js.js'
import { compose, bindActionCreators } from 'redux';
import {postData} from '../../store/actions'


const mapStateToProps = state => {
    return {
      post: state.postData
  }
}

  const mapDispatchToProps = (
    (dispatch) => bindActionCreators({
        postData: (data) => postData(data)
    }, dispatch)
  );
  
export default compose(connect(mapStateToProps, mapDispatchToProps))(ShowPost)