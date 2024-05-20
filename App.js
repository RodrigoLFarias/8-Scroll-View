import { StyleSheet,  View, FlatList, Text, ScrollView} from 'react-native'
import React from 'react';

const lista = [
  {id: "1", nome: "Nivaldo", email: "kaku@gmail.com"},
  {id: "2", nome: "Sergio", email: "serginho@gmail.com"},
  {id: "3", nome: "Eunico", email: "Eunico@gmail.com"},
  {id: "4", nome: "Kaku", email: "kaku@gmail.com"}
]

export default function App() {
  return (
    <View style={styles.container}>
   {/* Permite que voce crie uma barra de rolagem responsiva na página */}
   {/* <ScrollView showsVerticalScrollIndicator={true}>

     <View style={styles.box1}></View>
     <View style={styles.box2}></View>
     <View style={styles.box3}></View>
     <View style={styles.box4}></View>

    </ScrollView> */}
    {/* FlatList */}
    <FlatList 
    data={lista}
    renderItem={({item}) => <Pessoa data={item}/>}
    
    />

    </View>

  );
}
function Pessoa({data}){
return(

  <View style={styles.containerPessoa}>

    <Text style={styles.textoPessoa}>id: {data.id}</Text>
    <Text style={styles.textoPessoa}>Nome: {data.nome}</Text>
    <Text style={styles.textoPessoa}>Email: {data.email}</Text>

  </View>
)

}

const styles = StyleSheet.create({

container:{
  flex:1,

},

containerPessoa:{
  backgroundColor: '#222',
  height: 250

},

textoPessoa:{
  color: 'white',
  fontSize:26

},

});

  // container:{
  //   flex: 1,
 
  // },

  // box1:{
  //   backgroundColor:'red',
  //   height: 350

  // },

  // box2:{
  //   backgroundColor:'green',
  //   height: 350

  // },

  // box3:{
  //   backgroundColor:'yellow',
  //   height: 350

  // },

  // box4:{
  //   backgroundColor:'blue',
  //   height: 350

  // },


