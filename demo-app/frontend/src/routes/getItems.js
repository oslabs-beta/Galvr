module.exports = async (req, res) => {
    const items = await fetch(`http://${process.env.BB_BACKEND_SERVICE_HOST}:${process.env.BB_BACKEND_SERVICE_PORT}/items`);
    const data = await items.json()
    res.send(data);
};
