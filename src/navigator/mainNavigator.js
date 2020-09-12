import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings6100787Navigator from '../features/Settings6100787/navigator';
import ArticleList7100786Navigator from '../features/ArticleList7100786/navigator';
import ArticleList8100785Navigator from '../features/ArticleList8100785/navigator';
import Dashboard13100782Navigator from '../features/Dashboard13100782/navigator';
import CalendarView4100781Navigator from '../features/CalendarView4100781/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings6100787: { screen: Settings6100787Navigator },
ArticleList7100786: { screen: ArticleList7100786Navigator },
ArticleList8100785: { screen: ArticleList8100785Navigator },
Dashboard13100782: { screen: Dashboard13100782Navigator },
CalendarView4100781: { screen: CalendarView4100781Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
