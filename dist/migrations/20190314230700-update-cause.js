"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([queryInterface.addColumn('causes', 'suggested_donation_amount', {
      type: Sequelize.DECIMAL,
      allowNull: true
    })]).catch(err => {
      console.log(err);
    });
  },
  down: queryInterface => {
    return Promise.all([queryInterface.removeColumn('causes', 'suggested_donation_amount')]).catch(err => console.log(err));
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taWdyYXRpb25zLzIwMTkwMzE0MjMwNzAwLXVwZGF0ZS1jYXVzZS50cyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwidXAiLCJxdWVyeUludGVyZmFjZSIsIlNlcXVlbGl6ZSIsIlByb21pc2UiLCJhbGwiLCJhZGRDb2x1bW4iLCJ0eXBlIiwiREVDSU1BTCIsImFsbG93TnVsbCIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImRvd24iLCJyZW1vdmVDb2x1bW4iXSwibWFwcGluZ3MiOiI7O0FBRUFBLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNmQyxFQUFBQSxFQUFFLEVBQUUsQ0FBQ0MsY0FBRCxFQUFpQ0MsU0FBakMsS0FBMEQ7QUFDNUQsV0FBT0MsT0FBTyxDQUFDQyxHQUFSLENBQVksQ0FDakJILGNBQWMsQ0FBQ0ksU0FBZixDQUF5QixRQUF6QixFQUFtQywyQkFBbkMsRUFBZ0U7QUFDOURDLE1BQUFBLElBQUksRUFBRUosU0FBUyxDQUFDSyxPQUQ4QztBQUU5REMsTUFBQUEsU0FBUyxFQUFFO0FBRm1ELEtBQWhFLENBRGlCLENBQVosRUFLSkMsS0FMSSxDQUtHQyxHQUFELElBQVM7QUFDaEJDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQ0QsS0FQTSxDQUFQO0FBUUQsR0FWYztBQVdmRyxFQUFBQSxJQUFJLEVBQUdaLGNBQUQsSUFBb0M7QUFDeEMsV0FBT0UsT0FBTyxDQUFDQyxHQUFSLENBQVksQ0FDakJILGNBQWMsQ0FBQ2EsWUFBZixDQUE0QixRQUE1QixFQUFzQywyQkFBdEMsQ0FEaUIsQ0FBWixFQUdOTCxLQUhNLENBR0FDLEdBQUcsSUFBSUMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVosQ0FIUCxDQUFQO0FBSUQ7QUFoQmMsQ0FBakIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBRdWVyeUludGVyZmFjZSwgRGF0YVR5cGVzIH0gZnJvbSAnc2VxdWVsaXplJztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHVwOiAocXVlcnlJbnRlcmZhY2U6IFF1ZXJ5SW50ZXJmYWNlLCBTZXF1ZWxpemU6IERhdGFUeXBlcykgPT4ge1xuICAgIHJldHVybiBQcm9taXNlLmFsbChbXG4gICAgICBxdWVyeUludGVyZmFjZS5hZGRDb2x1bW4oJ2NhdXNlcycsICdzdWdnZXN0ZWRfZG9uYXRpb25fYW1vdW50Jywge1xuICAgICAgICB0eXBlOiBTZXF1ZWxpemUuREVDSU1BTCxcbiAgICAgICAgYWxsb3dOdWxsOiB0cnVlLFxuICAgICAgfSlcbiAgICBdKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH0pO1xuICB9LFxuICBkb3duOiAocXVlcnlJbnRlcmZhY2U6IFF1ZXJ5SW50ZXJmYWNlKSA9PiB7XG4gICAgcmV0dXJuIFByb21pc2UuYWxsKFtcbiAgICAgIHF1ZXJ5SW50ZXJmYWNlLnJlbW92ZUNvbHVtbignY2F1c2VzJywgJ3N1Z2dlc3RlZF9kb25hdGlvbl9hbW91bnQnKVxuICAgIF0pXG4gICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgfVxufTtcbiJdfQ==