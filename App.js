import React, {useState} from 'react';
import {Alert, Button, NativeModules, View} from 'react-native';
import ButtonTouchable from './components/ButtonTouchable';
import QRCodeScanner from 'react-native-qrcode-scanner';

// import { Container } from './styles';

const App = () => {
  const {paymentModuleX4} = NativeModules;

  const [showCamera, setShowCamera] = useState(false);
  return (
    <>
      {showCamera ? (
        <QRCodeScanner
          cameraStyle={{
            height: '100%',
            width: '100%',
            flex: 1,
          }}
          reactivate={true}
          reactivateTimeout={5000}
          showMarker
          onRead={({data}) => {
            Alert.alert('QRCode', 'QRCode Lido com sucesso');
          }}
          bottomContent={
            <View
              style={{
                position: 'absolute',
                bottom: 50,
                justifyContent: 'center',
                alignItems: 'center',
                gap: 12,
              }}>
              <Button
                title="Fechar"
                color={'red'}
                onPress={() => setShowCamera(false)}
              />
            </View>
          }
        />
      ) : (
        <View style={{padding: 12, gap: 8}}>
          <ButtonTouchable
            text={'Iniciar a SDK'}
            color={'blue'}
            onPress={async () => {
              // let response = await paymentModuleX4.initSDKX4Fare(
              //    {{UUID}},
              //    {{KEY}},
              //    {{IMEI}},
              // );
              console.log('Iniciado');
              // console.log(response);
            }}
          />
          <ButtonTouchable
            text={'Iniciar Camera'}
            color={'red'}
            onPress={() => setShowCamera(true)}
          />
        </View>
      )}
    </>
  );
};

export default App;
