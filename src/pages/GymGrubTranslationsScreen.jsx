import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import GymGrubHeader from '../components/GymGrubHeader';
import BackgroundImage from '../assets/background.png';

export default function () {
  const renderBroadcast = (league, time, teams) => (
    <View style={styles.broadcast}>
      <View style={styles.leagueContainer}>
        <Text style={styles.league}>{league}</Text>
      </View>
      <Text style={styles.matchTime}>{time}</Text>
      <View style={styles.teamsContainer}>
        <Text style={styles.teams}>{teams}</Text>
      </View>
    </View>
  );

  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <GymGrubHeader />

      <Text style={styles.title}>Трансляции</Text>

      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{paddingBottom: 100, marginTop: 15}}>
        {renderBroadcast('UFC', '01.08 22:00', 'Jon Jones \n' + 'Tom Aspinall')}
        {renderBroadcast('Boxing', '03.08 21:30', 'Tyson Fury \n' + 'Oleksandr Usyk')}
        {renderBroadcast('ONE Champ', '05.08 18:15', 'Rodtang Jitmuangnon \n' + 'Superlek')}
        {renderBroadcast('Bellator', '07.08 19:00', 'AJ McKee \n' + 'Patricio Pitbull')}
        {renderBroadcast('Kickboxing', '09.08 20:45', 'Rico Verhoeven \n' + 'Jamal Ben Saddik')}
        {renderBroadcast('PFL', '11.08 17:00', 'Kayla Harrison \n' + 'Larissa Pacheco')}
        {renderBroadcast('K-1', '13.08 18:30', 'Takeru Segawa \n' + 'Tenshin Nasukawa')}
        {renderBroadcast('Judo Grand Slam', '15.08 14:00', 'Teddy Riner \n' + 'Lukas Krpalek')}
        {renderBroadcast('Wrestling', '17.08 16:15', 'USA \n' + 'Iran')}
        {renderBroadcast('Taekwondo', '19.08 15:45', 'Korea \n' + 'Mexico')}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    width,
    backgroundColor: COLORS.white,
  },
  broadcast: {
    width: width * 0.9,
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: COLORS.main,
    paddingLeft: 20,
    borderRadius: 12,
  },
  league: {
    fontSize: 24,
    fontFamily: FONTS.black,
    color: COLORS.white,
    paddingVertical: 8,
  },
  leagueContainer: {
    width: '100%',
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },
  teamsContainer: {
    width: '100%',
    paddingBottom: 10,
  },
  matchTime: {
    fontSize: 14,
    fontFamily: FONTS.bold,
    color: COLORS.black,
    width: '60%',
  },
  teams: {
    textAlign: 'right',
    fontFamily: FONTS.bold,
    fontSize: 20,
    color: COLORS.white,
    marginTop: 5,
    marginRight: 15,
  },
  title: {
    fontSize: 30,
    fontFamily: FONTS.bold,
    color: COLORS.white,
    margin: 20,
    textAlign: 'center',
  },
});
