require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.8',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/g8ksFucbq7CmUzKLtWgVPctHlhHrOQ8j',
      accounts: [ '508fb174afed466616e7467b1f51546be3949870e227a04dfebb5c4299ad4c99' ]
    }
  }
}