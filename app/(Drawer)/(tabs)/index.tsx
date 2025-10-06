import {StyleSheet, View, Text, TouchableOpacity, SafeAreaViewBase, TextInput, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {SearchBar} from "react-native-screens";
import {SafeAreaView} from "react-native-safe-area-context";

export default function HomeScreen() {
    const tab = [
        {contact: 'jules', message: 'test de message 1'},
        {contact: 'max', message: 'test de message 2'},
        {contact: 'yann', message: 'test de message 3'},
        {contact: 'alice', message: 'test de message 4'},
        {contact: 'bob', message: 'test de message 5'},
        {contact: 'charlie', message: 'test de message 6'},
        {contact: 'diane', message: 'test de message 7'},
        {contact: 'eve', message: 'test de message 8'},
        {contact: 'frank', message: 'test de message 9'},
        {contact: 'grace', message: 'test de message 10'},
        {contact: 'heidi', message: 'test de message 11'},
        {contact: 'ivan', message: 'test de message 12'},
        {contact: 'judy', message: 'test de message 13'},
        {contact: 'kim', message: 'test de message 14'},
        {contact: 'leo', message: 'test de message 15'},
        {contact: 'mary', message: 'test de message 16'},
        {contact: 'nick', message: 'test de message 17'},
        {contact: 'olivia', message: 'test de message 18'},
        {contact: 'paul', message: 'test de message 19'},
        {contact: 'quincy', message: 'test de message 20'}
    ]

    return (
        <SafeAreaView style={styles.intro}>
            <View style={styles.header}>
                <View>
                    <Text style={styles.more}>...</Text>
                </View>
                <View style={styles.header2}>
                    <Icon name="camera" size={15} color="#fff"/>
                    <Icon name="plus-circle" size={25} color="green"/>
                </View>
            </View>
            <Text style={styles.h1}>
                Chats
            </Text>
            <View style={styles.searchBar}>
                <Icon name="search" size={20} color="#000"/>
                <TextInput style={styles.searchBar} placeholder="Search" placeholderTextColor="black"/>
            </View>
            <ScrollView style={styles.contentView}>
                {tab.map((item, index) => (
                    <TouchableOpacity key={index}>
                        <View style={styles.content}>
                            <Icon name="user" size={50} color="#fff" />
                            <View>
                                <Text style={styles.contactContent}>{item.contact}</Text>
                                <Text style={styles.messageContent}>{item.message}</Text>
                            </View>
                        </View>
                        {index < tab.length - 1 && (
                            <View style={styles.separator} />
                        )}
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    intro: {
        paddingTop: 35,
        backgroundColor: '#101010',
        display: 'flex',
        paddingHorizontal: 50,
        width: '100%',
        height: '100%',
    },
    btn: {
        backgroundColor: 'black',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 20,
    },
    btnTxt: {
        color: 'white',
    },
    h1: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
    },
    plus: {
        height: '100%',
        color: 'green',
    },
    header: {
        height: 40,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    more: {
        color: 'white',
        fontSize: 20,
    },
    header2: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
    },
    searchBar: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        gap: 5,
        backgroundColor: 'white',
        borderRadius: 50,
        paddingHorizontal: 10,
    },
    contentView: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        marginVertical: 30,
    },
    messageContent: {
        color: 'green',
    },
    contactContent: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        borderBottomColor: 'gray',
    },
    separator: {
        width: '100%',
        backgroundColor: 'white',
        height: '1%',
    }
});
