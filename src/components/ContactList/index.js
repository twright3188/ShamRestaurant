import React, { Component } from 'react';
import {
  PermissionsAndroid,
  Platform,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';
import Contacts from 'react-native-contacts';
import ListItem from './ListItem';
import Avatar from './Avatar';
import styles from './styles';

const getAvatarInitials = textString => {
  if (!textString) return '';

  const text = textString.trim();

  const textSplit = text.split(' ');

  if (textSplit.length <= 1) return text.charAt(0);

  const initials =
    textSplit[0].charAt(0) + textSplit[textSplit.length - 1].charAt(0);

  return initials;
};

export default class ContactList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [],
    };
  }

  async componentDidMount() {
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
        title: 'Contacts',
        message: 'This app would like to view your contacts.'
      }).then(() => {
        this.loadContacts();
      });
    } else {
      this.loadContacts();
    }
  }

  loadContacts() {
    Contacts.getAll((err, contacts) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.log('Permission to access contacts was denied', err);
      } else {
        this.setState({ contacts });
      }
    });
  }


  render() {
    const { isModalOpen, setModalStatus, setPhoneValue } = this.props;
    const { contacts } = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollViewStyles}>
          {contacts.map(contact => {
            return (
              <ListItem 
                leftElement={
                  <Avatar
                    img={
                      contact.hasThumbnail 
                      ? { uri: contact.thumbnailPath }
                      : undefined
                    }
                    placeholder={getAvatarInitials(
                      `${contact.givenName} ${contact.familyName}`
                    )}
                    width={40}
                    height={40}
                  />
                }
                key={contact.recordID}
                title={`${contact.givenName} ${contact.familyName}`}
                description={`${contact.phoneNumbers[0].number}`}
                onPress={() => { setModalStatus(!isModalOpen); setPhoneValue(contact.phoneNumbers[0].number);}}
              />
            );
          })}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

ContactList.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  setModalStatus: PropTypes.func.isRequired,
  setPhoneValue: PropTypes.func.isRequired
};