import Web3 from 'web3';

// const web3 = new Web3(window.web3.currentProvider);

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    // we are in the browser
    web3 = new Web3(window.web3.currentProvider);
} else {
    //we're on the server OR the user is not running the metamask
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/orDImgKRzwNrVCDrAk5Q'
    );
    web3 = new Web3(provider);
}

export default web3;

