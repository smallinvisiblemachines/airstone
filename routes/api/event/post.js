const keystone = require('keystone');
const Event = keystone.list('Event');

module.exports = function(req, res) {
  if (!req.body.name || !req.body.startTime || !req.body.endTime) {
    return res.sendError('incomplete data set');
  }

  const newEvent = new Event.model(req.body);

  Event.updateItem(newEvent, req.body, function(error) {

    res.locals.enquirySubmitted = true;
    if (error) {
      res.locals.saveError = true;
    }

    console.log(res);
    res.render('addEvent');
  });
};