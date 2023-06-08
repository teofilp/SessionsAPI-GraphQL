const _ = require('lodash');

module.exports = {
  speakers: async (session, args, { dataSources }) => {
    const speakers = await await dataSources.SpeakerAPI.getSpeakers();
    return speakers.filter(sp => _.filter(session.speakers, { id: sp.id }).length > 0)
  }
}