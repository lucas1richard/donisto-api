"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([queryInterface.addColumn('newsfeedcauses', 'cause_uuid', {
      type: Sequelize.STRING
    }), queryInterface.addColumn('newsfeedcauses', 'newsfeed_uuid', {
      type: Sequelize.STRING
    })]).catch(err => {
      console.log(err);
    });
  },
  down: queryInterface => {
    return Promise.all([queryInterface.removeColumn('contacts', 'facebook_id')]).catch(err => console.log(err));
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taWdyYXRpb25zLzIwMTkwNDEyMTI0ODAxLXVwZGF0ZS1uZXdzZmVlZGNhdXNlcy50cyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwidXAiLCJxdWVyeUludGVyZmFjZSIsIlNlcXVlbGl6ZSIsIlByb21pc2UiLCJhbGwiLCJhZGRDb2x1bW4iLCJ0eXBlIiwiU1RSSU5HIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZG93biIsInJlbW92ZUNvbHVtbiJdLCJtYXBwaW5ncyI6Ijs7QUFFQUEsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2ZDLEVBQUFBLEVBQUUsRUFBRSxDQUFDQyxjQUFELEVBQWlDQyxTQUFqQyxLQUEwRDtBQUM1RCxXQUFPQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxDQUNqQkgsY0FBYyxDQUFDSSxTQUFmLENBQXlCLGdCQUF6QixFQUEyQyxZQUEzQyxFQUF5RDtBQUN2REMsTUFBQUEsSUFBSSxFQUFFSixTQUFTLENBQUNLO0FBRHVDLEtBQXpELENBRGlCLEVBSWpCTixjQUFjLENBQUNJLFNBQWYsQ0FBeUIsZ0JBQXpCLEVBQTJDLGVBQTNDLEVBQTREO0FBQzFEQyxNQUFBQSxJQUFJLEVBQUVKLFNBQVMsQ0FBQ0s7QUFEMEMsS0FBNUQsQ0FKaUIsQ0FBWixFQU9KQyxLQVBJLENBT0dDLEdBQUQsSUFBUztBQUNoQkMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7QUFDRCxLQVRNLENBQVA7QUFVRCxHQVpjO0FBYWZHLEVBQUFBLElBQUksRUFBR1gsY0FBRCxJQUFvQztBQUN4QyxXQUFPRSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxDQUNqQkgsY0FBYyxDQUFDWSxZQUFmLENBQTRCLFVBQTVCLEVBQXdDLGFBQXhDLENBRGlCLENBQVosRUFHTkwsS0FITSxDQUdBQyxHQUFHLElBQUlDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaLENBSFAsQ0FBUDtBQUlEO0FBbEJjLENBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUXVlcnlJbnRlcmZhY2UsIERhdGFUeXBlcyB9IGZyb20gJ3NlcXVlbGl6ZSc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICB1cDogKHF1ZXJ5SW50ZXJmYWNlOiBRdWVyeUludGVyZmFjZSwgU2VxdWVsaXplOiBEYXRhVHlwZXMpID0+IHtcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwoW1xuICAgICAgcXVlcnlJbnRlcmZhY2UuYWRkQ29sdW1uKCduZXdzZmVlZGNhdXNlcycsICdjYXVzZV91dWlkJywge1xuICAgICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXG4gICAgICB9KSxcbiAgICAgIHF1ZXJ5SW50ZXJmYWNlLmFkZENvbHVtbignbmV3c2ZlZWRjYXVzZXMnLCAnbmV3c2ZlZWRfdXVpZCcsIHtcbiAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xuICAgICAgfSksXG4gICAgXSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9KTtcbiAgfSxcbiAgZG93bjogKHF1ZXJ5SW50ZXJmYWNlOiBRdWVyeUludGVyZmFjZSkgPT4ge1xuICAgIHJldHVybiBQcm9taXNlLmFsbChbXG4gICAgICBxdWVyeUludGVyZmFjZS5yZW1vdmVDb2x1bW4oJ2NvbnRhY3RzJywgJ2ZhY2Vib29rX2lkJylcbiAgICBdKVxuICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gIH1cbn07XG4iXX0=