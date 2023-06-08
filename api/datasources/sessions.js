const sessions = require('../data/sessions.json');
const { DataSource } = require("apollo-datasource");
const _ = require('lodash');

class SessionAPI extends DataSource {
  constructor() {
    super();
  }

  initialize(config) {

  }

  getSessions(args) {
    return _.filter(sessions, {
      ...args,
      id: parseInt(args.id)
    });
  }

  getSessionById(id)  {
    return _.filter(sessions, { id: parseInt(id) })[0];
  }

  toggleFavoriteSession(id)  {
    const sessions = _.filter(sessions, { id: parseInt(id) })[0];
    sessions[0].favorite = !sessions[0].favorite;
    return sessions[0];
  }

  addSession(session) {
    session.id = Math.floor(Math.random() * 1000000);
    sessions.push(session);

    return session;
  }
};

module.exports = SessionAPI;