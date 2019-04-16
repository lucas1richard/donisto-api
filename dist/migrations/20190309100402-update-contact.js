"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([queryInterface.addColumn('contacts', 'facebook_id', {
      type: Sequelize.STRING
    })]).catch(err => {
      console.log(err);
    });
  },
  down: queryInterface => {
    return Promise.all([queryInterface.removeColumn('contacts', 'facebook_id')]).catch(err => console.log(err));
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taWdyYXRpb25zLzIwMTkwMzA5MTAwNDAyLXVwZGF0ZS1jb250YWN0LnRzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJ1cCIsInF1ZXJ5SW50ZXJmYWNlIiwiU2VxdWVsaXplIiwiUHJvbWlzZSIsImFsbCIsImFkZENvbHVtbiIsInR5cGUiLCJTVFJJTkciLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJkb3duIiwicmVtb3ZlQ29sdW1uIl0sIm1hcHBpbmdzIjoiOztBQUVBQSxNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDZkMsRUFBQUEsRUFBRSxFQUFFLENBQUNDLGNBQUQsRUFBaUNDLFNBQWpDLEtBQTBEO0FBQzVELFdBQU9DLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLENBQ2pCSCxjQUFjLENBQUNJLFNBQWYsQ0FBeUIsVUFBekIsRUFBcUMsYUFBckMsRUFBb0Q7QUFDbERDLE1BQUFBLElBQUksRUFBRUosU0FBUyxDQUFDSztBQURrQyxLQUFwRCxDQURpQixDQUFaLEVBSUpDLEtBSkksQ0FJR0MsR0FBRCxJQUFTO0FBQ2hCQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNELEtBTk0sQ0FBUDtBQU9ELEdBVGM7QUFVZkcsRUFBQUEsSUFBSSxFQUFHWCxjQUFELElBQW9DO0FBQ3hDLFdBQU9FLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLENBQ2pCSCxjQUFjLENBQUNZLFlBQWYsQ0FBNEIsVUFBNUIsRUFBd0MsYUFBeEMsQ0FEaUIsQ0FBWixFQUdOTCxLQUhNLENBR0FDLEdBQUcsSUFBSUMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVosQ0FIUCxDQUFQO0FBSUQ7QUFmYyxDQUFqQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFF1ZXJ5SW50ZXJmYWNlLCBEYXRhVHlwZXMgfSBmcm9tICdzZXF1ZWxpemUnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgdXA6IChxdWVyeUludGVyZmFjZTogUXVlcnlJbnRlcmZhY2UsIFNlcXVlbGl6ZTogRGF0YVR5cGVzKSA9PiB7XG4gICAgcmV0dXJuIFByb21pc2UuYWxsKFtcbiAgICAgIHF1ZXJ5SW50ZXJmYWNlLmFkZENvbHVtbignY29udGFjdHMnLCAnZmFjZWJvb2tfaWQnLCB7XG4gICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICAgIH0pXG4gICAgXSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9KTtcbiAgfSxcbiAgZG93bjogKHF1ZXJ5SW50ZXJmYWNlOiBRdWVyeUludGVyZmFjZSkgPT4ge1xuICAgIHJldHVybiBQcm9taXNlLmFsbChbXG4gICAgICBxdWVyeUludGVyZmFjZS5yZW1vdmVDb2x1bW4oJ2NvbnRhY3RzJywgJ2ZhY2Vib29rX2lkJylcbiAgICBdKVxuICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gIH1cbn07XG4iXX0=