import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Paragraph from '../Paragraph';
import Colors from '../../theme';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    slide: {
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 12,
      shadowOffset: { width: 0, height: 2 }, 
      shadowRadius: 5,
      shadowOpacity: 1, 
      shadowColor: 'rgba(34, 38, 36, 0.15)',
    },
    imageStyles: {
      width: 88, 
      height: 88, 
      borderRadius: 16,
      marginBottom: 8
    },
    recommendedItemTitleStyles: {
      textAlign: 'center'
    },
    recommendedItemPriceStyles: {
      color: Colors.carouselPriceColor, 
      textAlign: 'center'
    },
});

export default class ImageCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [
        { 
          image: 'https://media.chainreactioncycles.com/is/image/ChainReactionCycles/template_sample?$detail$&$id=prod163615_Black_NE_01&$offerhide=1&$promoflag=aw19roadclothing&$promohide=0&locale=en',
          title: 'dhb Extreme Weather Neoprene Overshoe',
          price: '$30',
        },
        { 
          image: 'https://media.chainreactioncycles.com/is/image/ChainReactionCycles/template_sample?$detail$&$id=prod183251_Matte%20Gold_NE_01&$offerhide=1&$promoflag=foxracingaw19wk362019&$promohide=0&locale=en',
          title: 'Fox Racing Proframe Matte Helmet AW19',
          price: '$225'
        },
        {
          image: 'https://media.chainreactioncycles.com/is/image/ChainReactionCycles/template_sample?$detail$&$id=prod157000_Red_NE_01&$offerhide=1&$promoflag=aw19clothingwk402019&$promohide=0&locale=en',
          title: 'Fox Racing Launch Pro D3O Knee Guards',
          price: '$88'
        },
        {
          image: 'https://media.chainreactioncycles.com/is/image/ChainReactionCycles/template_sample?$detail$&$id=prod163615_Black_NE_01&$offerhide=1&$promoflag=aw19roadclothing&$promohide=0&locale=en',
          title: 'dhb Extreme Weather Neoprene Overshoe',
          price: '$30',
        },
        { 
          image: 'https://media.chainreactioncycles.com/is/image/ChainReactionCycles/template_sample?$detail$&$id=prod183251_Matte%20Gold_NE_01&$offerhide=1&$promoflag=foxracingaw19wk362019&$promohide=0&locale=en',
          title: 'Fox Racing Proframe Matte Helmet AW19',
          price: '$225'
        },
        {
          image: 'https://media.chainreactioncycles.com/is/image/ChainReactionCycles/template_sample?$detail$&$id=prod157000_Red_NE_01&$offerhide=1&$promoflag=aw19clothingwk402019&$promohide=0&locale=en',
          title: 'dhb Extreme Weather Neoprene Overshoe',
          price: '$88'
        },
      ],
    };
  }

  renderItem = ({ item }) => {
    const { image, title, price } = item;

    return (
      <View style={styles.slide}>
        <Image source={{ uri: image }} style={styles.imageStyles} />
        <Paragraph fontSize={14} style={styles.recommendedItemTitleStyles}>{title}</Paragraph>
        <Paragraph fontSize={14} style={styles.recommendedItemPriceStyles}>{price}</Paragraph>
      </View>
    );
  };

  render() {
    const { entries } = this.state;
    return (
      <Carousel 
        data={entries}
        renderItem={this.renderItem}
        sliderWidth={width}
        itemWidth={112}
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
        firstItem={0}
        activeSlideAlignment='start'
        contentContainerCustomStyle={{ overflow: 'hidden', width: 112 * (entries.length) }}
        />
    );
  }
}

