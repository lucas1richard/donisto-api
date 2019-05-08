"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([queryInterface.addColumn('organizations', 'city', {
      type: Sequelize.STRING
    }), queryInterface.addColumn('organizations', 'state', {
      type: Sequelize.STRING
    }), queryInterface.addColumn('organizations', 'mission', {
      type: Sequelize.TEXT
    }), queryInterface.addColumn('organizations', 'zip', {
      type: Sequelize.TEXT
    })]).catch(err => {
      console.log(err);
    });
  },
  down: queryInterface => {
    return Promise.all([queryInterface.removeColumn('organizations', 'city'), queryInterface.removeColumn('organizations', 'state'), queryInterface.removeColumn('organizations', 'mission'), queryInterface.removeColumn('organizations', 'zip')]).catch(err => console.log(err));
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taWdyYXRpb25zLzIwMTkwNTA3MDAzOTMzLXVwZGF0ZS1vcmdhbml6YXRpb25zLnRzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJ1cCIsInF1ZXJ5SW50ZXJmYWNlIiwiU2VxdWVsaXplIiwiUHJvbWlzZSIsImFsbCIsImFkZENvbHVtbiIsInR5cGUiLCJTVFJJTkciLCJURVhUIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZG93biIsInJlbW92ZUNvbHVtbiJdLCJtYXBwaW5ncyI6Ijs7QUFFQUEsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2ZDLEVBQUFBLEVBQUUsRUFBRSxDQUFDQyxjQUFELEVBQWlDQyxTQUFqQyxLQUEwRDtBQUM1RCxXQUFPQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxDQUNqQkgsY0FBYyxDQUFDSSxTQUFmLENBQXlCLGVBQXpCLEVBQTBDLE1BQTFDLEVBQWtEO0FBQ2hEQyxNQUFBQSxJQUFJLEVBQUVKLFNBQVMsQ0FBQ0s7QUFEZ0MsS0FBbEQsQ0FEaUIsRUFJakJOLGNBQWMsQ0FBQ0ksU0FBZixDQUF5QixlQUF6QixFQUEwQyxPQUExQyxFQUFtRDtBQUNqREMsTUFBQUEsSUFBSSxFQUFFSixTQUFTLENBQUNLO0FBRGlDLEtBQW5ELENBSmlCLEVBT2pCTixjQUFjLENBQUNJLFNBQWYsQ0FBeUIsZUFBekIsRUFBMEMsU0FBMUMsRUFBcUQ7QUFDbkRDLE1BQUFBLElBQUksRUFBRUosU0FBUyxDQUFDTTtBQURtQyxLQUFyRCxDQVBpQixFQVVqQlAsY0FBYyxDQUFDSSxTQUFmLENBQXlCLGVBQXpCLEVBQTBDLEtBQTFDLEVBQWlEO0FBQy9DQyxNQUFBQSxJQUFJLEVBQUVKLFNBQVMsQ0FBQ007QUFEK0IsS0FBakQsQ0FWaUIsQ0FBWixFQWFKQyxLQWJJLENBYUdDLEdBQUQsSUFBUztBQUNoQkMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7QUFDRCxLQWZNLENBQVA7QUFnQkQsR0FsQmM7QUFtQmZHLEVBQUFBLElBQUksRUFBR1osY0FBRCxJQUFvQztBQUN4QyxXQUFPRSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxDQUNqQkgsY0FBYyxDQUFDYSxZQUFmLENBQTRCLGVBQTVCLEVBQTZDLE1BQTdDLENBRGlCLEVBRWpCYixjQUFjLENBQUNhLFlBQWYsQ0FBNEIsZUFBNUIsRUFBNkMsT0FBN0MsQ0FGaUIsRUFHakJiLGNBQWMsQ0FBQ2EsWUFBZixDQUE0QixlQUE1QixFQUE2QyxTQUE3QyxDQUhpQixFQUlqQmIsY0FBYyxDQUFDYSxZQUFmLENBQTRCLGVBQTVCLEVBQTZDLEtBQTdDLENBSmlCLENBQVosRUFNTkwsS0FOTSxDQU1BQyxHQUFHLElBQUlDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaLENBTlAsQ0FBUDtBQU9EO0FBM0JjLENBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUXVlcnlJbnRlcmZhY2UsIERhdGFUeXBlcyB9IGZyb20gJ3NlcXVlbGl6ZSc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICB1cDogKHF1ZXJ5SW50ZXJmYWNlOiBRdWVyeUludGVyZmFjZSwgU2VxdWVsaXplOiBEYXRhVHlwZXMpID0+IHtcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwoW1xuICAgICAgcXVlcnlJbnRlcmZhY2UuYWRkQ29sdW1uKCdvcmdhbml6YXRpb25zJywgJ2NpdHknLCB7XG4gICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICAgIH0pLFxuICAgICAgcXVlcnlJbnRlcmZhY2UuYWRkQ29sdW1uKCdvcmdhbml6YXRpb25zJywgJ3N0YXRlJywge1xuICAgICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXG4gICAgICB9KSxcbiAgICAgIHF1ZXJ5SW50ZXJmYWNlLmFkZENvbHVtbignb3JnYW5pemF0aW9ucycsICdtaXNzaW9uJywge1xuICAgICAgICB0eXBlOiBTZXF1ZWxpemUuVEVYVFxuICAgICAgfSksXG4gICAgICBxdWVyeUludGVyZmFjZS5hZGRDb2x1bW4oJ29yZ2FuaXphdGlvbnMnLCAnemlwJywge1xuICAgICAgICB0eXBlOiBTZXF1ZWxpemUuVEVYVFxuICAgICAgfSksXG4gICAgXSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9KTtcbiAgfSxcbiAgZG93bjogKHF1ZXJ5SW50ZXJmYWNlOiBRdWVyeUludGVyZmFjZSkgPT4ge1xuICAgIHJldHVybiBQcm9taXNlLmFsbChbXG4gICAgICBxdWVyeUludGVyZmFjZS5yZW1vdmVDb2x1bW4oJ29yZ2FuaXphdGlvbnMnLCAnY2l0eScpLFxuICAgICAgcXVlcnlJbnRlcmZhY2UucmVtb3ZlQ29sdW1uKCdvcmdhbml6YXRpb25zJywgJ3N0YXRlJyksXG4gICAgICBxdWVyeUludGVyZmFjZS5yZW1vdmVDb2x1bW4oJ29yZ2FuaXphdGlvbnMnLCAnbWlzc2lvbicpLFxuICAgICAgcXVlcnlJbnRlcmZhY2UucmVtb3ZlQ29sdW1uKCdvcmdhbml6YXRpb25zJywgJ3ppcCcpLFxuICAgIF0pXG4gICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgfVxufTtcbiJdfQ==