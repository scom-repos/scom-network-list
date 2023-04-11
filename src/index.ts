import { } from '@ijstech/eth-contract';
import { INetwork } from "@ijstech/eth-wallet"
import { application } from '@ijstech/components';
let moduleDir = application.currentModuleDir;

function fullPath(path: string): string {
    if (path.indexOf('://') > 0)
        return path
    return `${moduleDir}/${path}`
}

export default function getNetworkList(): INetwork[] {
    return [
        {
            chainId: 1,
            chainName: "Ethereum Mainnet",
            rpcUrls: ['https://mainnet.infura.io/v3/{INFURA_ID}'],
            blockExplorerUrls: ['https://etherscan.io/'],
            nativeCurrency: {
                decimals: 18,
                name: 'ETH',
                symbol: 'ETH'
            },
            image: fullPath('img/ethereumNetwork.svg')
        },
        {
            chainId: 56,
            chainName: 'Binance Mainnet',
            rpcUrls: ['https://bsc-dataseed.binance.org'],
            blockExplorerUrls: ['https://bscscan.com'],
            nativeCurrency: {
                decimals: 18,
                name: 'BNB',
                symbol: 'BNB'
            },
            image: fullPath('img/bscMainnet.svg')
        },
        {
            chainId: 97,
            chainName: 'Binance Testnet',
            rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545'],
            blockExplorerUrls: ['https://testnet.bscscan.com'],
            nativeCurrency: {
                decimals: 18,
                name: 'BNB',
                symbol: 'BNB'
            },
            image: fullPath('img/bscMainnet.svg')
        },
        {
            chainId: 137,
            chainName: "Polygon",
            rpcUrls: ['https://polygon-rpc.com'],
            blockExplorerUrls: ['https://polygonscan.com/'],
            nativeCurrency: {
                decimals: 18,
                name: 'MATIC',
                symbol: 'MATIC'
            },
            image: fullPath('img/polygon.svg')
        },
        {
            chainId: 1287,
            chainName: 'Moonbeam Testnet',
            rpcUrls: ['https://rpc.testnet.moonbeam.network'],
            blockExplorerUrls: ['https://moonbase-blockscout.testnet.moonbeam.network'],
            nativeCurrency: {
                decimals: 18,
                name: 'MOON',
                symbol: 'MOON'
            }
        },
        {
            chainId: 80001,
            chainName: "Mumbai",
            rpcUrls: ['https://matic-mumbai.chainstacklabs.com'],
            blockExplorerUrls: ['https://mumbai.polygonscan.com/'],
            nativeCurrency: {
                decimals: 18,
                name: 'MATIC',
                symbol: 'MATIC'
            },
            image: fullPath('img/polygon.svg')
        },
        {
            chainId: 43113,
            chainName: "Avalanche FUJI C-Chain",
            rpcUrls: ['https://api.avax-test.network/ext/bc/C/rpc'],
            blockExplorerUrls: ['https://testnet.snowtrace.io/'],
            nativeCurrency: {
                decimals: 18,
                name: 'AVAX',
                symbol: 'AVAX'
            },
            image: fullPath('img/avax.svg')
        },
        {
            chainId: 43114,
            chainName: "Avalanche Mainnet C-Chain",
            rpcUrls: ['https://api.avax.network/ext/bc/C/rpc'],
            blockExplorerUrls: ['https://snowtrace.io/'],
            nativeCurrency: {
                decimals: 18,
                name: 'AVAX',
                symbol: 'AVAX'
            },
            image: fullPath('img/avax.svg')
        },
        {
            chainId: 4002,
            chainName: "Fantom Testnet",
            rpcUrls: ['https://rpc.testnet.fantom.network/'],
            blockExplorerUrls: ['https://testnet.ftmscan.com/', 'https://explorer.testnet.fantom.network/'],
            nativeCurrency: {
                decimals: 18,
                name: 'FTM',
                symbol: 'FTM'
            },
            image: fullPath('img/fantom-ftm-logo.svg')
        },
        {
            chainId: 250,
            chainName: "Fantom Opera",
            rpcUrls: ['https://rpc.ftm.tools/'],
            blockExplorerUrls: ['https://ftmscan.com/', 'https://explorer.fantom.network/'],
            nativeCurrency: {
                decimals: 18,
                name: 'FTM',
                symbol: 'FTM'
            },
            image: fullPath('img/avax.svg')
        },
        {
            chainId: 13370,
            chainName: "AminoX Testnet",
            rpcUrls: ['https://aminoxtestnet.node.alphacarbon.network'],
            blockExplorerUrls: ['https://aminoxtestnet.blockscout.alphacarbon.network/'],
            nativeCurrency: {
                decimals: 18,
                name: 'TACT',
                symbol: 'TACT'
            },
            image: fullPath('img/aminoXTestnet.svg')
        },
        {
            chainId: 421613,
            chainName: "Arbitrum Goerli Testnet",
            rpcUrls: ['https://goerli-rollup.arbitrum.io/rpc'],
            blockExplorerUrls: ['https://goerli.arbiscan.io/tx/'],
            nativeCurrency: {
                decimals: 18,
                name: 'ETH',
                symbol: 'ETH'
            },
            image: fullPath('img/arbitrum.svg')
        },
        {
            chainId: 42161,
            chainName: "Arbitrum One",
            rpcUrls: ['https://arb1.arbitrum.io/rpc'],
            blockExplorerUrls: ['https://arbiscan.io/tx/'],
            nativeCurrency: {
                decimals: 18,
                name: 'ETH',
                symbol: 'ETH'
            },
            image: fullPath('img/arbitrum.svg')
        }
    ]
}
