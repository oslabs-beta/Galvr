module.exports = async (req, res) => {
  const items = await fetch(
    `http://${process.env.BB_GETMIDSVC_SERVICE_HOST}:${process.env.BB_GETMIDSVC_SERVICE_PORT}`
  );
  const data = await items.json();
  res.send(data);
};
