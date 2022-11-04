import { useState } from "react";
import { View, StyleSheet, Image, TextInput, Text, TouchableOpacity,ScrollView } from "react-native";
import { Svg } from "react-native-svg";

export const Myapp = () => {
    const [cuenta, setcuenta] = useState("");
    const [quince, setquince] = useState("");

    const resultado  = () => {
        const cantidadcuenta: number = parseFloat(cuenta)
        if (cantidadcuenta === cantidadcuenta) {
            cantidadcuenta / 100
            console.log(cantidadcuenta)

        } else {

        }

    }


    return (

        <View style={estilazos.container}>
            {/* <Image  
                source={require("./assets/icon.png")}
                /> */}
            <View style={estilazos.subcontenedor}>
                <ScrollView>
                <View>
                    <Text style={estilazos.texto}>Bill</Text>
                    <TextInput
                        placeholder="$"
                        onChangeText={(texto) => setcuenta(texto)}
                        style={estilazos.inputdecuenta}
                    />
                    <Text style={estilazos.texto}>Select Tip%</Text>
                    <View style={estilazos.porcentages}>
                    <View style={estilazos.contenedorizquierdo}>

                        <TouchableOpacity style={estilazos.botonesdeporcentages}>
                            <Text style={estilazos.nombreBoton}>5%</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={estilazos.botonesdeporcentage15} onPress={() => resultado()}>
                            <Text style={estilazos.nombreBoton}>15%</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={estilazos.botonesdeporcentages}>
                            <Text style={estilazos.nombreBoton}>50%</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={estilazos.contenedorderecho}>

                        <TouchableOpacity style={estilazos.botonesdeporcentages}>
                            <Text style={estilazos.nombreBoton}>10%</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={estilazos.botonesdeporcentages}>
                            <Text style={estilazos.nombreBoton}>25%</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={estilazos.botoncustom}>
                            <Text style={estilazos.nombrecustom}>Custom</Text>
                        </TouchableOpacity>

                    </View>
                    </View>
                    <View style={estilazos.numerodepersonas}>
                    <Text style={estilazos.texto}>Number of People</Text>
                    <TextInput
                        placeholder="$"
                        style={estilazos.inputdecuenta}
                    />
                    
                    </View>
                    
                </View>
                <View style={estilazos.resultados}>
                    <View style={estilazos. contenedoresultimos}>
                        <Text style={estilazos.textosfinales}>Tip Amound</Text>
                        <Text style={estilazos.minitexto}>/    person</Text>
                    </View>
                    <View style={estilazos. contenedoresultimos}>
                        <Text style={estilazos.textosfinales}>Total</Text>
                        <Text style={estilazos.minitexto}>/    person</Text>
                        <TouchableOpacity style={estilazos.botonreset}>
                            <Text style={estilazos.nombrereset}>RESET</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={estilazos.conteneResultado}>
                    </View>
                    <View style={estilazos.conteneResultadodos}></View>
                </View>
                </ScrollView>
            </View>
            
            </View>
    )
};

const estilazos = StyleSheet.create({
    container: {
        display:"flex",
        backgroundColor: ' Light grayish cyan: hsl(185, 41%, 84%)',
        width: "100%",
        height: "100%",
        
    },
    constainertitulo: {
        width: "90%",
        height: "95%",
        marginTop: 100,
    },
    subcontenedor: {
        flex:1,
        borderRadius: 35,
        marginTop: 120,
        backgroundColor: "white",
        width: "100%",
        
    },
    texto: {
        color: "Very dark cyan: hsl(183, 100%, 15%)",
        marginHorizontal: 28,
        marginBottom: 14,
        marginTop: 5,
        fontSize: 20,
    },
    inputdecuenta: {
        fontSize: 30,
        color: "Very dark cyan: hsl(183, 100%, 15%)",
        marginHorizontal: 23,
        marginTop: -12,
        width: "87%",
        height: 62,
        borderRadius: 5,
        backgroundColor: "Very light grayish cyan: hsl(189, 41%, 97%)",
    },
    porcentages:{
        alignSelf: 'center',
        flex:1,
        flexDirection: "row",
        marginTop:-5,
        width: "80%",
        height: "41%",
        backgroundColor:"white",
    },
    botonesdeporcentages: {
        alignItems:'center',
        marginHorizontal: "5%",
        marginBottom:"3%",
        width: "83%",
        height: 62,
        borderRadius: 5,
        backgroundColor: "Very dark cyan: hsl(183, 100%, 15%)",
    },
    botonesdeporcentage15: {
        alignItems:'center',
        marginHorizontal: "5%",
        marginBottom:"3%",
        width: "83%",
        height: 62,
        borderRadius: 5,
        backgroundColor: "Strong cyan: hsl(172, 67%, 45%)",
    },
    botoncustom: {
        marginHorizontal: "5%",
        marginBottom:"3%",
        width: "83%",
        height: 62,
        borderRadius: 5,
        backgroundColor: "Very light grayish cyan: hsl(189, 41%, 97%)",
    },
    nombrecustom: {
        marginHorizontal: 18,
        fontSize: 23,
        color: "Very dark cyan: hsl(183, 100%, 15%)",
    },
    nombreBoton: {
        justifyContent: 'space-between',
        marginHorizontal: 48,
        fontSize: 20,
        color: "white",
    },
    
    contenedorizquierdo: {
        width: "50%",
        height: "30%",
        flexDirection: "column",

    },
    contenedorderecho: {
        width: "50%",
        height: "30%",
        flexDirection: "column",
    },
    numerodepersonas:{
        alignSelf:'center',
        flexDirection: "column",
        marginTop:6,
        width: "100%",
        height: 90,
        backgroundColor:"",
        
    },
    resultados:{
        marginTop:22,
        alignSelf:'flex-end',
        borderRadius:23,
        marginHorizontal:"4%",
        width: "90%",
        height: 280,
        backgroundColor: "Very dark cyan: hsl(183, 100%, 15%)",
    },
    contenedoresultimos:{
        marginTop:20,
        marginHorizontal:23,
        width:"33%",
        height:"20%",
        flexDirection: "column",
        
    },
    textosfinales:{
        fontSize:20,
        color:"white"
    },
    minitexto:{
        fontSize:15,
        color:"Strong cyan: hsl(172, 67%, 45%)",
    },
    conteneResultado:{
        textAlign:'end',
        marginTop:-114,
        marginEnd:12,
        alignSelf:'flex-end',
        backgroundColor:'',
        width:'40%',
        height:52,
    },
    conteneResultadodos:{
        textAlign:'end',
        color:"Strong cyan: hsl(172, 67%, 45%)",
        marginTop:9,
        marginEnd:12,
        alignSelf:'flex-end',
        backgroundColor:'',
        width:'40%',
        height:52,
    },
    botonreset:{
        alignContent:"center",
        alignItems:"center",
        marginHorizontal:2,
        marginTop:33,
        backgroundColor:"Strong cyan: hsl(172, 67%, 45%)",
        width:"270%",
        height:52,
        borderRadius:8,
    },
    nombrereset:{
        marginTop:8,
        fontSize:15,
    }

})