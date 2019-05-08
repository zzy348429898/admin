import { FSA } from '../FSA';

export const actionTypes = {
  COLLAPSE_TRIGGER: 'COLLAPSE_TRIGGER'
};

const initialState = {
  collapsed: false,
  menuList:{
    home: 'home',
    'animate':{
      basicAnimate: 'basicAnimate',
      animateCase: 'animateCase'
    },
    'UI': {
      button: 'button',
      icon:'icon',
      loading:'loading',
      alert: 'alert',
      tabs: 'tabs'
    },
    'form': {
      form: 'form'
    }
  }
};

export interface initialStateItf {
  collapsed: boolean,
  menuList: object
}

//actionCreator
export const actionCreator = {
  collapseTrigger: () => ({
    type: actionTypes.COLLAPSE_TRIGGER
  })
};

//Reducer
export default function reducer(state: initialStateItf = initialState, action: FSA){
  switch(action.type) {
    case actionTypes.COLLAPSE_TRIGGER:
      return {...state, collapsed: !state.collapsed};
    default:
      return state;
  }
}


