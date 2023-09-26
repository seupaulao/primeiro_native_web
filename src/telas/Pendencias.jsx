import { FlatList, StyleSheet, Text, View } from "react-native-web";

// eslint-disable-next-line react/prop-types
const Item = ({title, feito}) => {
    return (
      <View>
        <Text
        style={[styles.texto18, feito && styles.textoVermelho ]}
        >{title}</Text>
      </View>
    );
  }
  
  const ListaPendencias = () => {
    const pendencias = [
    {"id":1, "nome":"usando JSON interno", "feito":true},
    {"id":2, "nome":"sqlite", "feito":false},
    {"id":3, "nome":"navegando entre telas", "feito":false},
    {"id":4, "nome":"animação", "feito":false},
    {"id":5, "nome":"usando JSON arquivo externo ", "feito":false},
    {"id":6, "nome":"exibindo e escondendo", "feito":false},
    {"id":7, "nome":"arquivos locais", "feito":false}];
    return (
      <>
          <Text style={styles.size18}>Devo vencer alguns obstáculos - antes de passar para o programa definitivo:</Text>
          <View style={{marginVertical: "15px"}}>
            <FlatList
              style={{marginLeft: "100px"}}
              data={pendencias}
              renderItem={({item})=><Item title={item.nome} feito={item.feito} />}
              keyExtractor={item => item.id}
            />  
          </View>
      </>
    );
  }
  
  const Pendencias = () => {
    return <ListaPendencias />
  }

  const styles = StyleSheet.create({
    app: {
      marginHorizontal: "auto",
      maxWidth: 500,
      backgroundColor: "lightblue"
    },
    logo: {
      height: 80
    },
    header: {
      padding: 20
    },
    pressureButton: {
      backgroundColor: "blue", 
      marginVertical: "30px", 
      marginHorizontal: "50px", 
      paddingTop: "10px", 
      paddingBottom: "10px"
    },
    texto18: {
      fontSize: "18px",
    },
    textoVermelho: {
       color: "red"
    },
    title: {
      fontWeight: "bold",
      fontSize: "1.5rem",
      marginVertical: "1em",
      textAlign: "center"
    },
    size18: {
      fontSize: "24px"
    },
    text: {
      lineHeight: "1.5em",
      fontSize: "1.125rem",
      marginVertical: "1em",
      textAlign: "center"
    },
    link: {
      color: "#1B95E0",
    },
    code: {
      fontFamily: "monospace, monospace"
    }
  });

  export default Pendencias;