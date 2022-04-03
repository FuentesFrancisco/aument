import { connect} from 'react-redux';
import Home from '../../Components/Home'
import { compose, bindActionCreators } from 'redux';

import {postData, getPosts} from '../../store/actions'


const mapStateToProps = state => {
    return {
      posts: state.posts
    }
  }

  const mapDispatchToProps = (
    (dispatch) => bindActionCreators({
        postData: (data) => postData(data),
        getPosts: (data) => getPosts(data)
    }, dispatch)
  );
  
export default compose(connect(mapStateToProps, mapDispatchToProps))(Home)