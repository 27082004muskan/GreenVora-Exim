const Service = require('../models/Services');

exports.getServices = async (req, res) => {
//   console.log("get services called");
  try {
    let services = await Service.find();
    if (services.length === 0) {  // ✅ services (lowercase)
      services = await Service.insertMany([
        {
          title: 'Exporter Services',
          description: 'We help businesses access global markets...',
          icon: 'TrendingUp'
        },
        {
          title: 'Sourcing Agent Services',
          description: 'We act as your on-ground sourcing partner...',
          icon: 'Users'
        }
      ]);
      console.log('Default services created!');
    }
    res.json(services);
  } catch (error) {
    res.status(500).json({ error: error.message });  // ✅ error (consistent)
  }
};
