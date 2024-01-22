// @flow
import React from 'react';
import { StyleSheet, View } from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import theme from '../theme';

const styles = StyleSheet.create({
    wrapper: { flex: 1, position: 'relative' },
    actionButtonWrapper: {
        bottom: 190,
        right: -15,
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
});

type ActionMenuType = {
    children: any
};

function ActionMenu({ children }: ActionMenuType): React$Element<*> {
    return (
        <View style={styles.wrapper}>
            {children}
            <View style={styles.actionButtonWrapper}>
                <ActionButton buttonColor={theme.deleteInfoColor} acitve>
                    <ActionButton.Item buttonColor={theme.active} title="Add new category" onPress={() => null}>
                        <FontAwesome name="th-list" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor={theme.active} title="Add new bouquet" onPress={() => null}>
                        <Icon name="md-flower" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                </ActionButton>
            </View>
            
        </View>
    );
}

export default ActionMenu;
