import {Address, TonClient} from "ton"
import {getHttpEndpoint} from "@orbs-network/ton-access";
async function main () {
    const wallet = Address.parse("UQAGdoCWkMM2xAHy6YtFLDxuBUN91GyGq1LfCumXNs5hZKVf")
    const collection = Address.parse("EQDk8N7xM5D669LC2YACrseBJtDyFqwtSPCNhRWXU7kjEptX")

    const endpoint = await gethttpEndpoint({
        network: "testnet,"
    });
    const miningData = await client.callGetmethod(collection, 'get_mining_data')
    console.log(miningData)
}
main()
