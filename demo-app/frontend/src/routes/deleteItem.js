module.exports = async (req, res) => {
  try {
    await fetch(
      `http://${process.env.BB_BACKEND_SERVICE_HOST}:${process.env.BB_BACKEND_SERVICE_PORT}/items/${req.params.id}`,
      { method: 'DELETE' }
    );
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.err(err);
  }
};
