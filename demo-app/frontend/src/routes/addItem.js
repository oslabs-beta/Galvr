module.exports = async (req, res) => {
  const item = await fetch(`http://${process.env.BB_BACKEND_SERVICE_HOST}:${process.env.BB_BACKEND_SERVICE_PORT}/items`, {
            method: 'POST',
            body: JSON.stringify({ name: req.body.name }),
            headers: { 'Content-Type': 'application/json' },
        })
  const data = await item.json();
  res.send(data); 
};
