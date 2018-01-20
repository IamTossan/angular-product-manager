const PROXY_CONFIG = [
    {
        context: [
            "/products",
            "/product",
        ],
        target: "http://localhost:8080",
        secure: false
    }
]

module.exports = PROXY_CONFIG;