// /**
//  * @flow
//  * @description 文件描述
//  * @author heykk
//  * @lastEditors heykk
//  * @lastEditTime 2020-02-04
//  */
//
// const path = require('path');
// const { override, addBabelPlugins, babelInclude,addWebpackAlias } = require('customize-cra');
//
// module.exports = override(
//     ...addBabelPlugins('@babel/plugin-proposal-class-properties'),
//     babelInclude([
//         path.resolve(__dirname, 'node_modules/react-native-elements'),
//         path.resolve(__dirname, 'node_modules/react-native-vector-icons'),
//         path.resolve(__dirname, 'node_modules/react-native-ratings'),
//         path.resolve(__dirname, 'src'),
//     ]),
//     addWebpackAlias({
//         ["react-native"]: "react-native-web",
//     })
// );

const path = require('path');
const { override, addBabelPlugins, babelInclude } = require('customize-cra');

module.exports = override(
    ...addBabelPlugins('@babel/plugin-proposal-class-properties'),
    babelInclude([
        path.resolve(__dirname, 'node_modules/react-native-elements'),
        path.resolve(__dirname, 'node_modules/react-native-vector-icons'),
        path.resolve(__dirname, 'node_modules/react-native-ratings'),
        path.resolve(__dirname, 'src'),
    ])
);
