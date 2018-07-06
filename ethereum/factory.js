import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xF3512bEC929296674087e0864fE620097E1C52d8'
);

export default instance;