module.exports = async (req, res) => {
  try {
  const item = await fetch(`http://${process.env.BB_BACKEND_SERVICE_HOST}:${process.env.BB_BACKEND_SERVICE_PORT}/items/${req.params.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                name: req.body.name,
                completed: req.body.completed,
            }),
            headers: { 'Content-Type': 'application/json' },
    })
    const data = await item.json();
    res.send(data); 
  } catch (err) {
    console.log(err)
    res.err(err)
  }
};
