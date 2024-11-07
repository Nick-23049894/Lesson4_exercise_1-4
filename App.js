
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.h2}>Exercise 1</Text>
      <Text style={{fontSize:24}}>RP Values</Text>
      <Text style={{color:"green"}}>Excellence</Text>
      <Text style={{backgroundColor:"yellow"}}>Customer-Centric</Text>
      <Text style={{fontStyle: "italic"}}>Integrity</Text>
      <Text style={{textAlign:"center"}}>Teamwork</Text>
      <Text style={{color:"white", backgroundColor:"black"}}>Enterprising</Text>

      <Text style={styles.h2}>Exercise 2</Text>
      <Text style={[styles.greenBox, styles.boxText, styles.title]}>Who We Are</Text>
      <Text style={[styles.greenBox, styles.boxText]}>Our People</Text>
      <Text style={[styles.greenBox, styles.boxText]}>Our Campus</Text>

      <Text style={styles.h2}>Exercise 3A</Text>
      <View style={styles.parent}>
        <Text style={[styles.child, styles.powderblue]}>Child 1</Text>
        <Text style={[styles.child, styles.skyblue]}>Child 2</Text>
        <Text style={[styles.child, styles.steelblue]}>Child 3</Text>
      </View>

      <Text style={styles.h2}>Exercise 3B</Text>
      <View style={styles.parent2}>
        <Text style={[styles.child2, styles.powderblue]}>Child 1</Text>
        <Text style={[styles.child2, styles.skyblue]}>Child 2</Text>
        <Text style={[styles.child2, styles.steelblue]}>Child 3</Text>
      </View>

      <Text style={styles.h2}>Exercise 3C</Text>
      <View style={styles.parent3}>
        <Text style={[styles.child3, styles.child3_1, styles.powderblue]}>Child 1</Text>
        <Text style={[styles.child3, styles.skyblue]}>Child 2</Text>
        <Text style={[styles.child3, styles.child3_2, styles.steelblue]}>Child 3</Text>
      </View>

      <Text style={styles.h2}>Exercise 3D</Text>
      <View style={styles.parent}>
        <Text style={[styles.child, styles.childD_1, styles.powderblue]}>Child 1</Text>
        <Text style={[styles.child, styles.childD_2, styles.skyblue]}>Child 2</Text>
        <Text style={[styles.child, styles.childD_3, styles.steelblue]}>Child 3</Text>
      </View>

      <Text style={styles.h2}>Exercise 3E</Text>
      <View style={[styles.parent5, styles.E3]}>
        <Text style={[styles.child5, styles.powderblue]}>Child 1</Text>
        <Text style={[styles.child5, styles.skyblue]}>Child 2</Text>
        <Text style={[styles.child5, styles.steelblue]}>Child 3</Text>
      </View>

      <Text style={styles.h2}>Exercise 4</Text>
      <View style={[styles.parentE4, styles.four]}>
        <Text style={[styles.childE4, styles.blue]}>Child 1</Text>
        <Text style={[styles.childE4, styles.green]}>Child 2</Text>
        <Text style={[styles.childE4, styles.red]}>Child 3</Text>
      </View>
    </ScrollView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  h2: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },

  // Exercise 2
  greenBox: {
    width: 100,
    height: 100,
    marginTop: 30,
    backgroundColor: "green",
    borderWidth: 1,
    borderColor: "black",
    borderStyle: "solid",
  },

  boxText: {
    textAlign: "center",
    color: "white",
  },
  title: {
    fontWeight: 'bold',
  },

  // Exercise 3A
  parent: {
    flexDirection: 'row',
    backgroundColor: "#F5fcff",
    borderColor: "#0099AA",
    borderWidth: 5,
  },
  child: {
    flex: 1,
    borderWidth: 2,
    textAlign: 'center',
    padding: 20,
  },
  powderblue: {
    backgroundColor: "powderblue",
  },
  skyblue: {
    backgroundColor: "skyblue",
  },
  steelblue: {
    backgroundColor: "steelblue",
  },

  // Exercise 3B
  parent2: {
    flexDirection: 'column',
    backgroundColor: "#F5fcff",
    borderColor: "#0099AA",
    borderWidth: 5,
  },
  child2: {
    flex: 1,
    borderWidth: 2,
    textAlign: 'center',
    padding: 20,
    paddingVertical: 40,
  },

  // Exercise 3C
  parent3: {
    flexDirection: 'column',
    backgroundColor: "#F5fcff",
    borderColor: "#0099AA",
    borderWidth: 5,
  },
  child3: {
    flex: 1,
    borderWidth: 2,
    textAlign: 'center',
    padding: 20,
    paddingVertical: 40,
  },
  child3_1: {
    maxWidth: 90,
  },
  child3_2: {
    maxHeight: 120,
  },

  // Exercise 3D
  childD_1: {
    flex: 1,
  },
  childD_2: {
    flex: 2,
  },
  childD_3: {
    flex: 3,
  },

  // Exercise 3E
  E3:{
    height: 500,
  },
  parent5: {
    flexDirection: 'column',
    backgroundColor: "#F5fcff",
    borderColor: "#0099AA",
    borderWidth: 5,
    // justifyContent: 'flex-start',
    // justifyContent: 'flex-end',
    justifyContent: 'space-around',
    // justifyContent: 'space-between',
  },
  child5: {
    borderWidth: 2,
    textAlign: 'center',
    padding: 20,
  },

  four: {
    height: 800,
    justifyContent: 'center',
    alignItems: 'center',
  },
  parentE4: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: "whitesmoke",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  childE4: {
    width: 80,
    height: 80,
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 80,
    margin:20,
  },

  blue: {
    backgroundColor: "blue",
  },
  green: {
      backgroundColor: "green",
  },
  red: {
      backgroundColor: "red",
  },
});
