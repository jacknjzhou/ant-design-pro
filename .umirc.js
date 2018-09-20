export default {
  plugins: [
    ['umi-plugin-dll', {
      exclude: ["@babel/runtime"],
      include: ["dva/router", "dva/saga", "dva/fetch"],
    }],
     [
      'umi-plugin-react',
      {
        antd: true,
        dva: {
          hmr: true,
        },
        locale: {
          enable: false, // default false
          default: 'zh-CN', // default zh-CN
          baseNavigator: true, // default true, when it is true, will use `navigator.language` overwrite default
        },
        dynamicImport: {
          loadingComponent: './components/PageLoading/index',
        },
      },
    ],
  ],
};
