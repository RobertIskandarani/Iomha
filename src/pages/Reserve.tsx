// ReservePDF.js
import React from 'react';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  PDFViewer,
} from '@react-pdf/renderer';
import logo from './../assets/logomakeblanco.png';

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#001227',
  },

  reserveInfo: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    color: 'white',
  },

  reserveTitle: {
    fontFamily: 'Helvetica-Bold',
    textAlign: 'center',
    fontSize: '5vw',
    marginTop: '5%',
    fontWeight: 'extrabold',
  },

  grid: {
    marginTop: '2.5%',
    width: '90%',
    height: '70vh',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  info: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },

  reserveFrame1: {
    width: '40vw',
    height: '23vh',
    border: '2.5px solid #0158bb',
    color: '#0158bb',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '4vw',
    borderRadius: '25px',
    margin: '2vw',
  },

  reserveFrame2: {
    width: '40vw',
    height: '23vh',
    border: '2.5px solid #00aeea',
    color: '#00aeea',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '4vw',
    borderRadius: '25px',
    margin: '2vw',
  },

  reserveFrame3: {
    width: '40vw',
    height: '23vh',
    border: '2.5px solid #e71d73',
    color: '#e71d73',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '4vw',
    borderRadius: '25px',
    margin: '2vw',
  },

  subtitle: {
    fontFamily: 'Helvetica-Bold',
    fontSize: '4vw',
  },

  data: {
    fontFamily: 'Helvetica',
    marginTop: '5%',
    fontSize: '3vw',
  },

  iomha: {
    marginTop: '12.5%',
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    fontSize: '2vw',
    fontWeight: 'extrabold',
  },
});

interface ReserveProps {
  name: string;
  artist: string;
  place: string;
  food: string;
}

const ReservePDF = ({ name, artist, place, food }: ReserveProps) => {
  return (
    <Document>
      <Page size='A4' style={styles.page}>
        <View style={styles.reserveInfo}>
          <Text style={styles.reserveTitle}>INFORMACIÓN DE TU RESERVA</Text>
          <View style={styles.grid}>
            <View style={styles.info}>
              <View style={styles.reserveFrame1}>
                <Text style={styles.subtitle}>Nombre</Text>
                <Text style={styles.data}>{name}</Text>
              </View>
              <View style={styles.reserveFrame1}>
                <Text style={styles.subtitle}>Artista</Text>
                <Text style={styles.data}>{artist}</Text>
              </View>
              <View style={styles.reserveFrame2}>
                <Text style={styles.subtitle}>Lugar</Text>
                <Text style={styles.data}>{place}</Text>
              </View>
              <View style={styles.reserveFrame2}>
                <Text style={styles.subtitle}>Comida</Text>
                <Text style={styles.data}>{food}</Text>
              </View>
              <View style={styles.reserveFrame3}>
                <Text style={styles.subtitle}>Cantidad</Text>
                <Text style={styles.data}>1</Text>
              </View>
              <View style={styles.reserveFrame3}>
                <Text style={styles.subtitle}>Fecha</Text>
                <Text style={styles.data}>12/10/2023</Text>
              </View>
            </View>
          </View>
          <View style={styles.iomha}>
            <Image src={logo} style={{ width: '10%' }} />
            <Text>IOM HA MADRIJ/A, DÍA DEL LÍDER MACABEO</Text>
            <Image src={logo} style={{ width: '10%' }} />
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default ReservePDF;
