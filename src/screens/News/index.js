import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import { ScrollView,StatusBar, TouchableOpacity, LayoutAnimation, View, BackHandler } from 'react-native';
import Button from '../../components/Button';
import Title from '../../components/Title';
import Paragraph from '../../components/Paragraph';
import { NewsItem } from '../../components/News';
import  CatalogCardsItem from '../../components/CatalogCards';
import Header from '../../components/Header';
import Colors from '../../theme';
import NewsSkeleton from './NewsSkeleton';
import { NoNewsScreen } from './NoNewsScreen';
import NetworkError from './NetworkError';
import { Offline } from '../Offline';
import styles from './styles';
import { BuyButton, DetailsButton } from '../../components/CatalogCardButtons';
import I18n from 'react-native-i18n';
import { ActivePrice, OldPrice } from '../../components/Price';
import FastImage from 'react-native-fast-image'
import  FooterBottom from '../../components/Footer';
import { SliderBox } from "react-native-image-slider-box";
import Constant from '../../Constant'
import {GetMenuAPI,GetPlatesAPI} from '../../services/APIs'
import Language from '../../Language';
import Global from '../../Global';

const news = [
  {
    id: 1,
    image: 'https://media.chainreactioncycles.com/is/image/ChainReactionCycles/prod170251_Petrol%20Blue%20-%20Green_NE_01?wid=960&hei=498',
    title: 'BLACK FRIDAY FLASH DEALS',
    text: 'Congratulations to your partners, colleagues and loved ones. Compositions of Dutch spruce for home and office: smell New Year and give a festive mood.'
  },
  {
    id: 2,
    image: 'https://media.chainreactioncycles.com/is/image/ChainReactionCycles/prod170239_Concrete%20Grey%20-%20Black_NE_01?wid=960&hei=498',
    title: 'NUKEPROOF CLOTHING SAVE UP TO 60%',
    text: 'Congratulations to your partners, colleagues and loved ones. Compositions of Dutch spruce for home and office: smell New Year and give a festive mood.'
  },
  {
    id: 3,
    image: 'https://media.chainreactioncycles.com/is/image/ChainReactionCycles/prod170238_Midnight%20-%20Yellow_NE_01?wid=960&hei=498',
    title: 'OAKLEY SUNGLASSES SAVE UP TO 50%',
    text: 'Congratulations to your partners, colleagues and loved ones. Compositions of Dutch spruce for home and office: smell New Year and give a festive mood.'
  },
];


class NewsContainer extends React.Component { // eslint-disable-line
  state = {
    loading: false,
    error: false,
    offline: false,
    images: [
      "https://assets.bonappetit.com/photos/57ad266cf1c801a1038bc9d8/master/w_2000,h_1781,c_limit/roasted-and-charred-broccoli-with-peanuts.jpg",
      "https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg",
      "https://c7.uihere.com/files/791/124/1019/organic-food-cocoa-bean-cuisine-recipe-shawarma.jpg",
      "https://assets.bonappetit.com/photos/57ad266cf1c801a1038bc9d8/master/w_2000,h_1781,c_limit/roasted-and-charred-broccoli-with-peanuts.jpg",// Network image
    ],
    items:[]
  };
  componentWillMount()
  {
   
  }
  componentDidMount()
  {
    this.props.navigation.addListener('didFocus', (playload)=>{
      this.setState({isReloading:!this.state.isReloading})
   });
   GetMenuAPI({}, (result)=>{
     if(result.success)
     {
       Global.categories = result.data
       this.setState({items:result.data})
     }
   })
  }
  componentDidUpdate() {
    LayoutAnimation.easeInEaseOut();
  }

  render() {
    const { navigation } = this.props;
    const { loading, error, offline } = this.state;

    if (loading === true) {
      return <NewsSkeleton />;
    }
    if (news.length === 0) {
      return <NoNewsScreen />;
    }
    if (error) {
      return <NetworkError />;
    }
    if (offline) {
      return <Offline />;
    }

    return (
      <View style={{width:'100%', height:'100%'}}>
        <StatusBar translucent={false} backgroundColor='gray' barStyle='light-content'/>
      <ScrollView style={styles.pageStyles}>
       

        <SliderBox
          images={this.state.images}
          sliderBoxHeight={300}
          onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
          dotColor="#FFEE58"
          inactiveDotColor="#90A4AE"
        />

        <View style={{ flexDirection: 'row' }}>
        <Title style={styles.titleStyles} fontSize={20}>{I18n.t("Menu")}</Title>
          {/* <Title style={styles.titleStylesRight} fontSize={15}>full Meneu</Title> */}
        </View>
        <ScrollView style={styles.menueStyles} horizontal={true}>

        {

          this.state.items.map(item => (
            <TouchableOpacity key={item.id}   
            onPress={() =>
              GetPlatesAPI(item.id, {}, (result)=>{
                this.props.navigation.navigate('CategoryList', {...item, items:result });
              })}>
              <CatalogCardsItem image={Constant.base_url + item.image_url}>
                <View style={styles.titleBlockStyles}>
                  <Title fontSize={14} style={styles.titleStyles}>{item.name}</Title>
                </View>
              </CatalogCardsItem>
            </TouchableOpacity>
          ))
        }
        </ScrollView>

        <View style={{ flexDirection: 'row' }}>
          <Title style={styles.titleStyles} fontSize={20}>{I18n.t("Offers")}</Title>
          {/* <Title style={styles.titleStylesRight} fontSize={15}>All Offers</Title> */}
        </View>
        <ScrollView style={styles.menueStyles} horizontal={true}>

        {

          this.state.items.map(item => (
            <CatalogCardsItem key={item.id} image={Constant.base_url + item.image_url}>
              <View style={styles.titleBlockStyles}>
                <Title fontSize={14} style={styles.titleStyles}>{item.name}</Title>
              </View>
           
            </CatalogCardsItem>
          ))
        }
        </ScrollView>
      </ScrollView>
      <FooterBottom 
       nav={this.props.navigation}
       screen={"News"}
      />
      </View>
    );
  }
}

NewsContainer.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
};

export default NewsContainer;
