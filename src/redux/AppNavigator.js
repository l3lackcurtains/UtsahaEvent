import { StackNavigator } from 'react-navigation'

import HomeScreen from '../screens/HomeScreen'
import Organizers from '../screens/Organizers'
import Partners from '../screens/Partners'
// import Supporters from '../screens/Supporters'
import Contact from '../screens/Contact'
import About from '../screens/About'

const AppNavigator = StackNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        Organizers: {
            screen: Organizers,
        },
        Partners: {
            screen: Partners,
        },
        // Supporters: {
        //     screen: Supporters,
        // },
        Contact: {
            screen: Contact,
        },
        About: {
            screen: About,
        },
    },
    {
        mode: 'modal',
        headerMode: 'none'
    }
);

export default AppNavigator
