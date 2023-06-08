module.exports = {
  sessions: (parent, args, { dataSources }, info) =>
    dataSources.SessionAPI.getSessions(args),
  sessionById: (parent, { id }, { dataSources }, info) => {
    return dataSources.SessionAPI.getSessionById(id);
  },
  speakers: (parent, args, { dataSources }, info) =>
    dataSources.SpeakerAPI.getSpeakers(),
  speakerById: (parent, { id }, { dataSources }, info) => {
    return dataSources.SpeakerAPI.getSpeakerById(id);
  },
}