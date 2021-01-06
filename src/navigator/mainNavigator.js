import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps190503Navigator from '../features/Maps190503/navigator';
import Additem190502Navigator from '../features/Additem190502/navigator';
import Maps190498Navigator from '../features/Maps190498/navigator';
import UserProfile190494Navigator from '../features/UserProfile190494/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps190503: { screen: Maps190503Navigator },
Additem190502: { screen: Additem190502Navigator },
Maps190498: { screen: Maps190498Navigator },
UserProfile190494: { screen: UserProfile190494Navigator },

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
