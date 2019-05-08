import { State } from '../../redux/rootReducer';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import Admin from './Admin';
import { actionCreator } from '../../redux/admin';

const mapStateToProps = (state: State) => ({
  layoutInfo: state.admin
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  collapseTrigger: (e:React.MouseEvent) => dispatch(actionCreator.collapseTrigger())
});

export default connect(mapStateToProps, mapDispatchToProps)(Admin);