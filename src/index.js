// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if(currency > 10000)
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    return {};
}
