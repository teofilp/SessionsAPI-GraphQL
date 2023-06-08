module.exports = {
  toggleFavoriteSession: (parent, { id }, { dataSources }, info) => {
    return dataSources.SessionAPI.toggleFavoriteSession(id);
  },
  addNewSession: (parent, args, { dataSources }, info) => {
    return dataSources.SessionAPI.addSession(args.session);
  }
};