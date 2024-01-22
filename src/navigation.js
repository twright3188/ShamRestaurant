import React from 'react';
import { Platform, TouchableOpacity, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import I18n from 'react-native-i18n';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Catalog from './screens/Catalog';
import Settings from './screens/Settings';
import SpecialOffer from './screens/SpecialOffer';
import Signin from './screens/Signin';
import Signup from './screens/Signup';
import SignupNext from './screens/SignupNext';
import News from './screens/News';
import Cart from './screens/Cart';
import CategoryList from './screens/CategoryList';
import CatalogCardDetails from './screens/CatalogCardDetails';
import RecipientSplit from './screens/RecipientSplit';
import NewCustomer from './screens/NewCustomer';
import SMSCheck from './screens/SMSCheck';
import RecipientDetails from './screens/RecipientDetails';
import Delivery from './screens/Delivery';
import Confirmation from './screens/Confirmation';
import RecipientThirdPerson from './screens/RecipientThirdPerson';
import ShowCase from './screens/ShowCase';
import { PaymentDelivery } from './screens/PaymentDelivery';
import OrderPayment from './screens/OrderPayment';
import Colors from './theme';
import styles from './styles';

const ICON_SET = Platform.select({
  ios: {
    newsIconName: 'home',
    catalogIconName: 'th-list',
    specialOfferIconName: 'ios-gift',
    cartIconName: 'shopping-cart',
    settingsIconName: 'cog',
    backButtonIconName: 'ios-arrow-back',
    iconSize: 26,
    backButtonIconSize: 18
  },
  android: {
    newsIconName: 'newspaper-o',
    catalogIconName: 'th-list',
    specialOfferIconName: 'ios-gift',
    cartIconName: 'shopping-cart',
    settingsIconName: 'cog',
    backButtonIconName: 'ios-arrow-back',
    iconSize: 26,
    backButtonIconSize: 18
  }
});
I18n.fallbacks = true;

// Available languages
I18n.translations = {
  'en': require('./translations/en'),
  'fr': require('./translations/fr')
};

const CatalogStack = createStackNavigator({
    Catalog: {
      screen: Catalog,
      navigationOptions: {
        headerStyle: { backgroundColor: Colors.catalogBackground, borderBottomWidth: 0, height: 0 },
        headerBackTitleStyle: { color: Colors.greenText, fontSize: 16 },
      }
    },
    CategoryList: {
      screen: CategoryList,
      navigationOptions: ({ navigation }) => ({
        headerStyle: { backgroundColor: Colors.categoryListBackgroundColor, borderBottomWidth: 0 },
        headerLeft: () => (
          <TouchableOpacity style={styles.headerBlockStyles} onPress={() => navigation.navigate('Catalog')}>
            <Icon name={ICON_SET.backButtonIconName} size={ICON_SET.backButtonIconSize} color={Colors.activeIcon} style={Platform.OS === 'ios' ? styles.iosBackImageStyles : styles.androidBackImageStyles} />
            <Text style={styles.headerTextStyles}>{I18n.t("back")}</Text>
          </TouchableOpacity>
        )
      })
    },
    CatalogCardDetails: {
      screen: CatalogCardDetails,
      navigationOptions: ({ navigation }) => ({
        headerStyle: { backgroundColor: Colors.catalogBackground, borderBottomWidth: 0  },
        headerLeft: () => (
          <TouchableOpacity style={styles.headerBlockStyles} onPress={() => navigation.goBack(null)}>
            <Icon name={ICON_SET.backButtonIconName} size={ICON_SET.backButtonIconSize} color={Colors.activeIcon} style={Platform.OS === 'ios' ? styles.iosBackImageStyles : styles.androidBackImageStyles} />
            <Text style={styles.headerTextStyles}>{I18n.t("back")}</Text>
          </TouchableOpacity>
        ),
        headerRight: <Icon name="ios-chatbubbles" size={30} color={Colors.activeIcon} style={{ marginRight: 15 }}/>,
      })
    },
}, { initialRoute: 'Catalog' });

const SettingsStack = createStackNavigator({
    Settings: {
      screen: Settings,
      navigationOptions: {
        headerStyle: { backgroundColor: Colors.settingBackgroundColor, borderBottomWidth: 0, height: 0 },
      }
    },
    ShowCase: {
      screen: ShowCase,
      navigationOptions: ({ navigation }) => ({
        headerStyle: { backgroundColor: Colors.catalogBackground, borderBottomWidth: 0  },
        headerLeft: () => (
          <TouchableOpacity style={styles.headerBlockStyles} onPress={() => navigation.goBack(null)}>
            <Icon name={ICON_SET.backButtonIconName} size={ICON_SET.backButtonIconSize} color={Colors.activeIcon} style={Platform.OS === 'ios' ? styles.iosBackImageStyles : styles.androidBackImageStyles} />
            <Text style={styles.headerTextStyles}>{I18n.t("back")}</Text>
          </TouchableOpacity>
        ),
      })
    },
    PaymentDelivery: {
      screen: PaymentDelivery,
      navigationOptions: ({ navigation }) => ({
        headerStyle: { backgroundColor: Colors.background, borderBottomWidth: 0  },
        headerLeft: () => (
          <TouchableOpacity style={styles.headerBlockStyles} onPress={() => navigation.goBack(null)}>
            <Icon name={ICON_SET.backButtonIconName} size={ICON_SET.backButtonIconSize} color={Colors.activeIcon} style={Platform.OS === 'ios' ? styles.iosBackImageStyles : styles.androidBackImageStyles} />
            <Text style={styles.headerTextStyles}>{I18n.t("back")}</Text>
          </TouchableOpacity>
        ),
      })
    }
}, { initialRoute: 'Settings' });

const SpecialOfferStack = createStackNavigator({
    SpecialOffer: {
      screen: SpecialOffer,
      navigationOptions: {
        headerStyle: { backgroundColor: Colors.specialOfferBackgroundColor, borderBottomWidth: 0, height: 0 },
        mode: 'card'
      }
    },
}, { initialRoute: 'SpecialOffer' });


const NewsStack = createStackNavigator({
  News: {
      screen: News,
      navigationOptions: {
        headerStyle: { backgroundColor: Colors.newsBackgroundColor, borderBottomWidth: 0, height: 0 },
      }
  },
}, { initialRoute: 'News', mode: 'modal'});

const CartStack = createStackNavigator({
    Cart: {
      screen: Cart,
      navigationOptions: {
        headerStyle: { backgroundColor: Colors.cartBackgroundColor, borderBottomWidth: 0, height: 0 },
      },
    },
    RecipientSplit: {
      screen: RecipientSplit,
      navigationOptions: ({ navigation }) => ({
        headerStyle: { backgroundColor: Colors.cartBackgroundColor, borderBottomWidth: 0, },
        headerLeft: () => (
          <TouchableOpacity style={styles.headerBlockStyles} onPress={() => navigation.navigate('Cart')}>
            <Icon name={ICON_SET.backButtonIconName} size={ICON_SET.backButtonIconSize} color={Colors.activeIcon} style={Platform.OS === 'ios' ? styles.iosBackImageStyles : styles.androidBackImageStyles} />
            <Text style={styles.headerTextStyles}>{I18n.t("back")}</Text>
          </TouchableOpacity>
        ),
      })
    },
    NewCustomer: {
      screen: NewCustomer,
      navigationOptions: ({ navigation }) => ({
        headerStyle: { backgroundColor: Colors.cartBackgroundColor, borderBottomWidth: 0, },
        headerLeft: () => (
          <TouchableOpacity style={styles.headerBlockStyles} onPress={() => navigation.navigate('RecipientSplit')}>
            <Icon name={ICON_SET.backButtonIconName} size={ICON_SET.backButtonIconSize} color={Colors.activeIcon} style={Platform.OS === 'ios' ? styles.iosBackImageStyles : styles.androidBackImageStyles} />
            <Text style={styles.headerTextStyles}>{I18n.t("back")}</Text>
          </TouchableOpacity>
        ),
      })
    },
    SMSCheck: {
      screen: SMSCheck,
      navigationOptions: ({ navigation }) => ({
        headerStyle: { backgroundColor: Colors.smsCheckBackgroundColor, borderBottomWidth: 0, },
        headerLeft: () => (
          <TouchableOpacity style={styles.headerBlockStyles} onPress={() => navigation.navigate('NewCustomer')}>
            <Icon name={ICON_SET.backButtonIconName} size={ICON_SET.backButtonIconSize} color={Colors.activeIcon} style={Platform.OS === 'ios' ? styles.iosBackImageStyles : styles.androidBackImageStyles} />
            <Text style={styles.headerTextStyles}>{I18n.t("back")}</Text>
          </TouchableOpacity>
        ),
      })
    },
    RecipientDetails: {
      screen: RecipientDetails,
      navigationOptions: ({ navigation }) => ({
        headerStyle: { backgroundColor: Colors.smsCheckBackgroundColor, borderBottomWidth: 0, },
        headerLeft: () => (
          <TouchableOpacity style={styles.headerBlockStyles} onPress={() => navigation.navigate('SMSCheck')}>
            <Icon name={ICON_SET.backButtonIconName} size={ICON_SET.backButtonIconSize} color={Colors.activeIcon} style={Platform.OS === 'ios' ? styles.iosBackImageStyles : styles.androidBackImageStyles} />
            <Text style={styles.headerTextStyles}>{I18n.t("back")}</Text>
          </TouchableOpacity>
        ),
      })
    },
    RecipientThirdPerson: {
      screen: RecipientThirdPerson,
      navigationOptions: ({ navigation }) => ({
        headerStyle: { backgroundColor: Colors.deliveryBackgroundColor, borderBottomWidth: 0, },
        headerLeft: () => (
          <TouchableOpacity style={styles.headerBlockStyles} onPress={() => navigation.navigate('RecipientSplit')}>
            <Icon name={ICON_SET.backButtonIconName} size={ICON_SET.backButtonIconSize} color={Colors.activeIcon} style={Platform.OS === 'ios' ? styles.iosBackImageStyles : styles.androidBackImageStyles} />
            <Text style={styles.headerTextStyles}>{I18n.t("back")}</Text>
          </TouchableOpacity>
        ),
      })
    },
    Delivery: {
      screen: Delivery,
      navigationOptions: ({ navigation }) => ({
        headerStyle: { backgroundColor: Colors.deliveryBackgroundColor, borderBottomWidth: 0, },
        headerLeft: () => (
          <TouchableOpacity style={styles.headerBlockStyles} onPress={() => navigation.goBack()}>
            <Icon name={ICON_SET.backButtonIconName} size={ICON_SET.backButtonIconSize} color={Colors.activeIcon} style={Platform.OS === 'ios' ? styles.iosBackImageStyles : styles.androidBackImageStyles} />
            <Text style={styles.headerTextStyles}>{I18n.t("back")}</Text>
          </TouchableOpacity>
        ),
      })
    },
    Confirmation: {
      screen: Confirmation,
      navigationOptions: ({
        headerStyle: { backgroundColor: Colors.deliveryBackgroundColor, borderBottomWidth: 0, height: 0 },
        headerLeft: () => (
          <TouchableOpacity style={styles.headerBlockStyles} onPress={() => navigation.goBack()}>
            <Icon name={ICON_SET.backButtonIconName} size={ICON_SET.backButtonIconSize} color={Colors.activeIcon} style={Platform.OS === 'ios' ? styles.iosBackImageStyles : styles.androidBackImageStyles} />
            <Text style={styles.headerTextStyles}>{I18n.t("back")}</Text>
          </TouchableOpacity>
        ),
      })
    },
    OrderPayment: {
      screen: OrderPayment,
      navigationOptions: ({ navigation }) => ({
        headerStyle: { backgroundColor: Colors.deliveryBackgroundColor, borderBottomWidth: 0, },
        headerLeft: () => (
          <TouchableOpacity style={styles.headerBlockStyles} onPress={() => navigation.navigate("Delivery")}>
            <Icon name={ICON_SET.backButtonIconName} size={ICON_SET.backButtonIconSize} color={Colors.activeIcon} style={Platform.OS === 'ios' ? styles.iosBackImageStyles : styles.androidBackImageStyles} />
            <Text style={styles.headerTextStyles}>{I18n.t("back")}</Text>
          </TouchableOpacity>
        ),
      })
    }
}, { initialRoute: 'Cart' });

const renderTabBarIcon = (name, icon, Component) => ({ tintColor }) => (
  <Component name={name} color={tintColor} size={icon} />
);
const TabNav =  createBottomTabNavigator(
  {
    News: {
      screen: NewsStack,
      navigationOptions: {
        tabBarLabel:I18n.t("Home"),
        tabBarIcon: renderTabBarIcon(ICON_SET.newsIconName ,ICON_SET.iconSize, FontAwesome),
      }
    },
    Catalog: {
      screen: CatalogStack,
      navigationOptions: {
        tabBarLabel:I18n.t("Menu"),
        tabBarIcon: renderTabBarIcon(ICON_SET.catalogIconName ,ICON_SET.iconSize, FontAwesome),
      },
    },
     SpecialOffer: {
       screen: SpecialOfferStack,
       navigationOptions: {
         tabBarLabel: I18n.t("Offers"),
         tabBarIcon: renderTabBarIcon(ICON_SET.specialOfferIconName ,ICON_SET.iconSize, Icon),
       }
     },
     Cart: {
      screen: CartStack,
      navigationOptions: {
        tabBarLabel:I18n.t("Cart"),
        tabBarIcon: renderTabBarIcon(ICON_SET.cartIconName ,ICON_SET.iconSize, FontAwesome),
      }
    },
    Settings: {
      screen: SettingsStack,
      navigationOptions: {
        tabBarLabel:I18n.t("Setting"),
        tabBarIcon: renderTabBarIcon(ICON_SET.settingsIconName ,ICON_SET.iconSize, FontAwesome),
      }
    },
  },
  {
    /* Other configuration remains unchanged */
    tabBarOptions: {
      activeTintColor: Colors.activeIcon,
      inactiveTintColor: Colors.inactiveIcon
    },
  }
)

const AuthStack = createStackNavigator({
  Signin:{screen:Signin,
    navigationOptions: {
    headerStyle: { backgroundColor: Colors.newsBackgroundColor, borderBottomWidth: 0, height: 0 },
  }
  },
  Signup:{screen:Signup,
    navigationOptions: {
    headerStyle: { backgroundColor: Colors.newsBackgroundColor, borderBottomWidth: 0, height: 0 },
  }},
  SignupNext:{screen:SignupNext,
    navigationOptions: {
    headerStyle: { backgroundColor: Colors.newsBackgroundColor, borderBottomWidth: 0, height: 0 },
  }},
  // Home:{screen:TabNav, navigationOptions: {
  //   header:null
  // }}
  News: {
    screen: NewsStack,
    navigationOptions: {
      headerStyle: { backgroundColor: Colors.newsBackgroundColor, borderBottomWidth: 0, height: 0 },
    }
  },
  Catalog: {
    screen: CatalogStack,
    navigationOptions: {
      headerStyle: { backgroundColor: Colors.newsBackgroundColor, borderBottomWidth: 0, height: 0 },
    }
  },
   SpecialOffer: {
     screen: SpecialOfferStack,
     navigationOptions: {
      headerStyle: { backgroundColor: Colors.newsBackgroundColor, borderBottomWidth: 0, height: 0 },
    }
   },
   Cart: {
    screen: CartStack,
    navigationOptions: {
      headerStyle: { backgroundColor: Colors.newsBackgroundColor, borderBottomWidth: 0, height: 0 },
    }
  },
  Settings: {
    screen: SettingsStack,
    navigationOptions: {
      headerStyle: { backgroundColor: Colors.newsBackgroundColor, borderBottomWidth: 0, height: 0 },
    }
    
  }
}, { 
  initialRoute: 'Signin', 
  headerMode:'none',
  mode: 'modal',
  transitionConfig : () => ({
    transitionSpec: {
        duration: 0,
    },
    defaultNavigationOptions: {
        gesturesEnabled: false
      }
   })
  });
export default createAppContainer(AuthStack);
