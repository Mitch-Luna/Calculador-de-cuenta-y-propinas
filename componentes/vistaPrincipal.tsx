import { useState } from "react";
import { View, StyleSheet, Image, TextInput, Text, TouchableOpacity,ScrollView } from "react-native";
import { Svg } from "react-native-svg";

export const Myapp = () => {
    const [mensaje, setMensaje] = useState("");
    const [actividad, setactividad] = useState("");
    const [nuevaslinea, setNuevalinea] = useState({
        lines: [{

        }]
    });

    const miActividad = (texto: string) => {
        setactividad(texto)
    }

    const addLine = () => {

        if (actividad === "") {
            setMensaje("No escribiste actividad para hoy!!");

        } else {
            setMensaje("Agregaste una nueva actividad a tu dia!!");

            const { lines } = nuevaslinea
            lines.push({

            });
            setNuevalinea({
                ...nuevaslinea,
                lines
            });

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
                        style={estilazos.inputdecuenta}
                    />
                    <Text style={estilazos.texto}>Select Tip%</Text>
                    <View style={estilazos.porcentages}>
                    <View style={estilazos.contenedorizquierdo}>

                        <TouchableOpacity style={estilazos.botonesdeporcentages}>
                            <Text style={estilazos.nombreBoton}>5%</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={estilazos.botonesdeporcentage15}>
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
                <View style={estilazos.resultados}></View>
                </ScrollView>
            </View>
            
            </View>
    )
};

const estilazos = StyleSheet.create({
    container: {
        backgroundColor: ' Light grayish cyan: hsl(185, 41%, 84%)',
        width: "100%",
        height: "115%",
        
    },
    constainertitulo: {
        width: "90%",
        height: "95%",
        marginTop: 100,
    },
    subcontenedor: {
        borderRadius: 35,
        marginTop: 120,
        backgroundColor: "white",
        width: "100%",
        height: "205%",
    },
    texto: {
        color: "Very dark cyan: hsl(183, 100%, 15%)",
        marginHorizontal: 28,
        marginBottom: 14,
        marginTop: 23,
        fontSize: 25,
        fontFamily: "calibri"

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
        flexDirection: "row",
        marginTop:-5,
        width: "100%",
        height: "40%",
        alignContent:"center",
        backgroundColor:"white",
    },
    botonesdeporcentages: {
        marginHorizontal: "5%",
        marginBottom:"3%",
        width: "83%",
        height: 62,
        borderRadius: 5,
        backgroundColor: "Very dark cyan: hsl(183, 100%, 15%)",
    },
    botonesdeporcentage15: {
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
        fontSize: 33,
        color: "Very dark cyan: hsl(183, 100%, 15%)",
    },
    nombreBoton: {
        marginHorizontal: 48,
        fontSize: 33,
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
        alignItems:"flex-start",
        flexDirection: "column",
        marginTop:-3,
        width: "100%",
        height: 130,
        backgroundColor:"white",
        
    },
    resultados:{
        marginTop:-35,
        borderRadius:23,
        marginHorizontal:"4%",
        width: "90%",
        height: 230,
        alignContent:"center",
        backgroundColor: "Very dark cyan: hsl(183, 100%, 15%)",
    }

})