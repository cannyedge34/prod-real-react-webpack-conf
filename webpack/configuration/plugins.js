import CompressionPlugin from 'compression-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

// Environment
const isDevelopment = process.env.NODE_ENV !== 'production';

const isAnalyzer = process.env.ANALYZER === 'true';

export default type => {
  const plugins = [
    new ExtractTextPlugin({
      filename: '../../public/css/style.css'
    })
  ];

  if (isAnalyzer) {
    plugins.push(
      new BundleAnalyzerPlugin({
        analyzerMode: 'static'
      })
    );
  }

  if (type === 'client') {
    plugins.push(
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: m => /node_modules/.test(m.context)
      })
    );
  }

  if (isDevelopment) {
    plugins.push(
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
    );
  }

  return plugins;
};
