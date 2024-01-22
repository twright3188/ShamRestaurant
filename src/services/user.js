/* eslint-disable import/prefer-default-export */
import auth from '@react-native-firebase/auth';

export const useUser = (defaultValue) => {
    let userData = defaultValue;
    try {
        auth().onAuthStateChanged((user) => {
            if (user) {
                // User logged in already or has just logged in.
                userData = user;
            } else {
                userData = defaultValue;
            }
        });

        return userData;
    } catch (error) {
        // eslint-disable-next-line no-console
        console.warn('Authentication error', error);
        return userData;
    }
};

export const authenticateUser = () => {
    try {
        if (!auth().currentUser) {
            auth().signInAnonymously();
        }
    } catch (signInAnonymouslyError) {
        // eslint-disable-next-line no-console
        console.warn('Sign anonymously error', signInAnonymouslyError);
    }
};

export const deleteUser = async () => {
    try {
        const user = auth().currentUser;
        try {
            if (user) {
                await user.delete();
            } else {
                throw new Error('User not found');
            }
            return ({ success: true, error: false });
        } catch (deletionError) {
            // eslint-disable-next-line no-console
            console.warn('Deletion error', deletionError);
            return Promise.resolve(({ success: false, error: true, ...deletionError }));
        }
    } catch (error) {
        // eslint-disable-next-line no-console
        console.warn('Instance deletion error', error);
        return Promise.resolve(({ ...error, success: false, error: true }));
    }
};