// Configuration
import { rules, extensions, modules } from './configuration';

export default type => ({
  module: {
    rules: rules(type),
    exprContextRegExp: /$^/,
    exprContextCritical: false,
    loaders: [
      /*...*/
    ]
  },
  resolve: {
    extensions: extensions(),
    modules: modules()
  }
});
