import dev from './config/dev';
import prod from './config/prod';
let config;
if (process.env.REACT_APP_STAGE === 'dev') {
  config = dev;
} else {
  config = prod;
}
export default config;
