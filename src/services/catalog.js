import firestore from '@react-native-firebase/firestore';
import isEmpty from 'lodash.isempty';

// import { getUser } from './user';

export const getFeed = async () => {
    const response = await firestore()
        .collection('catalog')
        .get();

    return response.data();
};

export const getItem = async (itemId) => {
    if (!itemId) {
        throw new Error('Item ID is required');
    }
    const response = await firestore()
        .collection('catalog')
        .doc(itemId)
        .get();

    return response.data();
};

export const setItem = async (item) => {
    if (!item || isEmpty(item)) {
        throw new Error('Item is required');
    }
    const response = await firestore()
        .collection('catalog')
        .doc()
        .set(item);

    return response.data();
};

export const getCartItems = async () => {
    const response = await firestore()
        .collection('cart')
        // .doc(getUser().uid)
        .get();

    return response.data();
};

export const setCartItem = async (items) => {
    const response = await firestore()
        .collection('cart')
        // .doc(getUser().uid)
        .set({ items: [...items] }, { merge: true });

    return response.data();
};

export const getDailyBouquet = async () => {
    const response = await firestore()
        .collection('daily_bouquet')
        .doc('daily_bouquet')
        .get();

    return response.data();
};

export const setDailyBouquet = async (dailyBouquet) => {
    if (!dailyBouquet || isEmpty(dailyBouquet) || !dailyBouquet.id) {
        throw new Error('dailyBouquet should be definied');
    }

    const response = await firestore()
        .collection('daily_bouquet')
        .doc('daily_bouquet')
        .set(dailyBouquet);

    return response.data();
};


export default null;