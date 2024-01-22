import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ImageViewer from 'react-native-image-zoom-viewer';
import Icon from 'react-native-vector-icons/Ionicons';
import { ScrollView, View, TouchableOpacity, Image, Modal } from 'react-native';
import Button from '../../components/Button';
import Title from '../../components/Title';
import Paragraph from '../../components/Paragraph';
import { ZoomBlock } from '../../components/ZoomBlock';
import Colors from '../../theme/index';
import styles from './styles';
import I18n from 'react-native-i18n';
import NumericInput from 'react-native-numeric-input'

function CatalogCard(props) {
  const { navigation, navigation: { state: { params: { name, discountPrice, originalPrice, gender, material, speed } } } } = props;
  const price = discountPrice || originalPrice;
  const image = JSON.stringify(navigation.getParam('image')).slice(1, -1);
  const [loaded, setLoadedStatus] = useState(false);
  const [oneHalfPressed, setOneHalfPressStatus] = useState(false);
  const [twoPressed, setTwoPressStatus] = useState(false);
  const [threePressed, setThreePressStatus] = useState(false);
  const [modalVisible, setModalStatus] = useState(false);

  const images = [{
    url: image,
    props: {
      width: '100%',
      height: 375
    }
  }];

  useEffect(() => {
    if (!loaded) {
      // call firebase loading by categoryId
      setTimeout(() => {
        setLoadedStatus(true);
      }, 500);
    }
  }, [loaded]);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.pageStyles}>
        <TouchableOpacity onPress={() => setModalStatus(true)}>
          <Image source={{ uri: image }} style={styles.imageStyles} resizeMode="stretch" />
        </TouchableOpacity>
        <Modal visible={modalVisible}>
          <View style={{ flex: 1, backgroundColor: '#F2F7F4' }} >
            <ImageViewer imageUrls={images} renderIndicator={() => null} backgroundColor='#F2F7F4' />
            <View style={{ position: 'absolute', right: 15, top: 55 }} >
              <TouchableOpacity onPress={() => setModalStatus(false)}>
                <Icon name="ios-close-circle-outline" size={32} color={Colors.activeIcon} />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <View style={styles.captionStyles}>
          <Title fontSize={19}>{name}</Title>
          <View style={styles.infoBlockStyles}>
            <View style={styles.infoBlockItemStyles}>
              <View style={styles.leftIconInfoBlockStyles}>
                <Icon name="ios-car" size={24} color={Colors.catalogInfoCardItemColor} />
              </View>
              <Paragraph fontSize={14} style={styles.textInfoBlockStyles}>Delivery free, tomorrow after 9:00 a.m.</Paragraph>
              <Icon name="ios-information-circle-outline" size={16} color={Colors.activeIcon} style={styles.rightIconInfoBlockStyles} />
            </View>

          </View>
          <View style={styles.bouquetInfoBlock}>
            <Paragraph>
              chickpeas, parsley, cilantro, dill, onion, garlic, cumin, garlic & onion powder, cayenne, lemon, and salt.            </Paragraph>
          </View>

        </View>
      </ScrollView>
      <View style={styles.zoomBuyBlock}>
        <View style={styles.enlargeBlockStyles}>
            <Title fontSize={16} style={styles.enlargeTextStyles}>{I18n.t("quantity")}</Title>
          <View style={styles.enlargeBlockValueStyles}>


            <NumericInput
              initValue={1}
              minValue={1}
              totalWidth={100}
              totalHeight={50}
              rounded
              editable={false}

              onChange={value => console.log(value)} />


          </View>
        </View>
        <Button style={styles.buyButtonStyles} fontSize={16} color={Colors.coloredButtonText}>
          {I18n.t("add_to_order")} ${price}.00
        </Button>
      </View>
    </View>
  );
}

CatalogCard.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
};

export default CatalogCard;
