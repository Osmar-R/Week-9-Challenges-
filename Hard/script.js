function sharePizza(shares) {
    function cutPIzzaslices(slices) {
        return slices
    }
    var sharePizza = cutPIzzaslices(8);
    return `Each person gets ${Number(sharePizza / shars).toFixed(2)} slices of Pizza`;
}

console.log(sharePizza(2));
console.log(sharePizza(3));