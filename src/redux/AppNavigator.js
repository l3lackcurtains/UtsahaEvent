import { StackNavigator } from 'react-navigation'
import HomeScreen from '../screens/HomeScreen'

const AppNavigator = StackNavigator({
    Home: {
        screen: HomeScreen,
    },
});

export default AppNavigator
