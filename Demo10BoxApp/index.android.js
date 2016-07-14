import React, {Component} from "react";
import {AppRegistry, StyleSheet, Text, View} from "react-native";

class Box extends Component {
    render() {
        return (
            <View style={[BoxStyles.box,
                            BoxStyles[this.props.width],
                            BoxStyles[this.props.height],
                            BoxStyles[this.props.classBg]]}>

                <View style={[BoxStyles.contentCenter,
                                BoxStyles.height50]}>
                    <Text>top</Text>
                </View>

                <View style={[BoxStyles.boxCenter]}>

                    <View style={[BoxStyles.contentCenter,
                                BoxStyles.width50]}>
                        <Text>left</Text>
                    </View>

                    {this.props.children}

                    <View style={[BoxStyles.contentCenter,
                                BoxStyles.width50]}>
                        <Text>right</Text>
                    </View>
                </View>

                <View
                    style={[BoxStyles.contentCenter,
                              BoxStyles.height50]}>
                    <Text>bottom</Text>
                </View>

                <View style={[BoxStyles.label]}>
                    <Text>{this.props.boxName}</Text>
                </View>
            </View>
        )
    }
}

class RedBox extends Component {
    render() {
        return (
            <View style={[BoxStyles.redBox]}
                /* 注释1 */
            >
                {/* 注释2 child comment, put {} around */}
                <Box height="height300" width="width300" boxName="红色"
                     classBg="bgred">
                    {this.props.children}
                </Box>
            </View>
        )
    }

}

class YellowBox extends Component {
    render() {
        return (
            <Box height="height200" width="width200" boxName="黄色"
                 classBg="bgyellow">{this.props.children}</Box>
        )
    }
}


class GreenBox extends Component {
    render() {
        return (
            <View style={[BoxStyles.box,
                            BoxStyles.height100,
                            BoxStyles.bggreen]}>

                <View style={[BoxStyles.measureBox]}>
                    <View>
                        <Text>height</Text>
                    </View>
                </View>

                <View style={[BoxStyles.contentCenter,
                                BoxStyles.height50]}>
                    <Text>width</Text>
                </View>

                <View style={[BoxStyles.label]}>
                    <Text>绿色</Text>
                </View>

                <View style={[BoxStyles.widthdashed]}></View>
                <View style={[BoxStyles.heightdashed]}></View>
            </View>
        )
    }
}


class Main extends Component {
    render() {
        return (
            <RedBox>
                <YellowBox>
                    <GreenBox>

                    </GreenBox>
                </YellowBox>
            </RedBox>
        )
    }
}

const BoxStyles = StyleSheet.create({
    height50: {
        height: 50,
    },
    width50: {
        width: 50,
    },
    height300: {
        height: 300,
    },
    height200: {
        height: 200,
    },
    height100: {
        height: 100,
    },
    width300: {
        width: 300,
    },
    width200: {
        width: 200,
    },
    width100: {
        width: 100,
    },
    bgred: {
        backgroundColor: '#DC143C',
    },
    bggreen: {
        backgroundColor: '#32CD32',
    },
    bgyellow: {
        backgroundColor: '#FFD700',
    },
    box: {
        flexDirection: 'column',
        flex: 1, //表示该元素是可伸缩的,数值是指在父view中的weight
        position: 'relative', //positon : ‘absolute’定位方式是相对于父级元素
    },
    label: {
        top: 0,
        left: 0,
        paddingTop: 3,
        paddingRight: 3,
        paddingBottom: 3,
        paddingLeft: 3,
        position: 'absolute',
        backgroundColor: '#00CED1',
    },
    contentCenter: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    heightdashed: {
        bottom: 0,
        top: 0,
        right: 20,
        borderLeftWidth: 1,
        position: 'absolute',
        borderLeftColor: '#FDC72F',
    },
    widthdashed: {
        bottom: 25,
        left: 0,
        right: 0,
        top: 74,
        position: 'absolute',
        backgroundColor: '#FDC72F'
    },
    redBox: {
        position: 'absolute',
        top: 100,
        paddingLeft: 5,
        paddingRight: 5,
    },
    boxCenter: {
        flex: 1,
        justifyContent: 'space-between',//首个元素放置于起点，末尾元素放置于终点
        flexDirection: 'row',
    },
    measureBox: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
});

AppRegistry.registerComponent('AwesomeProject', () => Main);
