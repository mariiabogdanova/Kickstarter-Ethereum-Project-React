import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x90084dCDbc63A2Ac0c33B9d222f103dC7D31D5DE'
);

export default instance;