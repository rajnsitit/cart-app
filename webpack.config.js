const path=require('path');

module.exports={
    entry:'./src/index.js',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname,'dist'),
        publicPath: "/"
    }
,
    module :
        {
            rules: [
                {
                    test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }
            ]

        }
};
