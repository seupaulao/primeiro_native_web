import { Button, Pressable, StyleSheet, Text } from "react-native-web";

function Link(props) {
    return <Text {...props} role="link" style={[styles.link, props.style]} />;
  }
  
  const SessaoLinks = () => {
    return(
      <>
          <Text style={styles.title}>Minha primeira app web</Text>
          <Text style={styles.text}>
          <Link href="https://github.com/facebook/create-react-app">
            Create React App
          </Link>{" "}
          and{" "}
          <Link href="https://github.com/necolas/react-native-web">
            React Native for Web
          </Link>
          </Text>
      </>
    );
  } 
  
  const SessaoBotoes = () => {
     return (
      <>
        <Button
          title="Botão Com Estilo Básico"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
          onPress={() => alert('Simple Button pressed')}
        />
        <Pressable onPress={() => {alert("funciona")}} style={styles.pressureButton}>
          <Text style={{color: "white", textAlign: "center"}}>Botão com estilo personalizado</Text>
        </Pressable>
      </>
     );
  }
  
const BemVindo = () => {
    return (
        <>
        <SessaoLinks />
        <SessaoBotoes />
        </>
    );
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
  

export default BemVindo;