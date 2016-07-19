import React, {Component} from "react";
import {AppRegistry, StyleSheet, Text, View, PixelRatio, Navigator, ScrollView} from "react-native";

class Main extends Component {
    render() {
        let defaultName = 'List';
        let defaultComponent = List;
        return (
            <Navigator
                initialRoute={{name:defaultName,component:defaultComponent}}
                configureScene={
                    (route)=>{
                        //node_modules/react-native/Libraries/CustomComponents/Navigator/NavigatorSceneConfigs.js
                        return Navigator.SceneConfigs.VerticalDownSwipeJump;
                    }
                }
                renderScene={
                    (route,navigator)=>{
                        let Component = route.component;
                        //return <Component navigator={navigator}/>
                        return <Component {...route.params} navigator={navigator}/>
                    }
                }
            />
        );
    }
}

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: 'admin'
        };
    }

    _pressButton() {
        //const {navigator} = this.props;
        const navigator = this.props.navigator;
        const self = this;
        if (navigator) {
            navigator.push({
                //下边这些属性都放在route里
                name: 'Detail',
                component: Detail,
                params: {
                    author: this.state.author,
                    getUser: function (user) {
                        self.setState({
                            user: user
                        })
                    }
                }
            })
        }
    }

    render() {
        if (this.state.user) {
            return (
                <View>
                    <Text style={styles.list_item}>
                        {JSON.stringify(this.state.user)}
                    </Text>
                </View>
            );
        } else {
            return (
                <ScrollView style={styles.flex}>
                    <Text style={styles.list_item}
                          onPress={this._pressButton.bind(this)}>
                        1111111111111111
                    </Text>
                    <Text style={styles.list_item}
                          onPress={this._pressButton.bind(this)}>
                        2222222222222222
                    </Text>
                    <Text style={styles.list_item}
                          onPress={this._pressButton.bind(this)}>
                        33333333333333333
                    </Text>
                </ScrollView>
            );
        }
    }
}

const USER_MODELS = {
    admin: {name: 'aaa', age: 23},
    admin2: {name: 'bbb', age: 25}
}

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {};//this.state 必须在这里初始化
    }

    componentDidMount() {
        this.setState({
            author: this.props.author
        })
    }

    _pressButton() {
        if (this.props.getUser) {
            let user = USER_MODELS[this.state.author]
            this.props.getUser(user)
        }


        const {navigator} = this.props;
        if (navigator) {
            navigator.pop();
        }
    }

    render() {
        return (
            <ScrollView style={styles.flex}>
                <Text style={styles.list_item}
                      onPress={this._pressButton.bind(this)}>
                    点我返回{this.state.author}
                </Text>
            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
    flex: {
        flex: 1
    },
    list_item: {
        height: 40,
        marginLeft: 10,
        marginRight: 10,
        fontSize: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        justifyContent: 'center'
    },
});

AppRegistry.registerComponent('AwesomeProject', () =>Main); 
