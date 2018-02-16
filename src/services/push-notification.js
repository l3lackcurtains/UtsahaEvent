import { Permissions, Notifications } from 'expo';
import { AsyncStorage } from 'react-native';

export default async () => {
    const previousToken = await AsyncStorage.getItem('pushToken');

    if (previousToken) {
        console.log('Previous Token', previousToken);
        return;
    }

    try {
        const { status } = await Permissions.askAsync(Permissions.REMOTE_NOTIFICATIONS);

        if (status !== 'granted') {
            return;
        }
    } catch (err) {
        console.error('Couldnot ask for permission');
        console.error(err);
    }

    const token = await Notifications.getExpoPushTokenAsync();
    console.log('New Token', token);
    AsyncStorage.setItem('pushToken', token);
};
