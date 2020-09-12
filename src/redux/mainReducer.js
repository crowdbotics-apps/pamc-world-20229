import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import Dashboard13100782Reducer from '../features/Dashboard13100782/redux/reducers'
import CalendarView4100781Reducer from '../features/CalendarView4100781/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
Dashboard13100782: Dashboard13100782Reducer,
CalendarView4100781: CalendarView4100781Reducer,

});