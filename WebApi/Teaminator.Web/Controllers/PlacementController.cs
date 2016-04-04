using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace Teaminator.Web.Controllers
{
    using Teaminator.Domain.Models;
    using Teaminator.Settings;

    [RoutePrefix("Placement")]
    public class PlacementController : ApiController
    {
        [HttpGet]
        [Route("Get/{userId}")]
        public Position GetPosition(int userId)
        {
            var userMapping = SettingsManager.Settings.UserPositionMappings.SingleOrDefault(x => x.UserId == userId);
            return SettingsManager.Settings.Positions.SingleOrDefault(x => x.Id == userMapping.PositionId);
        }

        [HttpGet]
        [Route("Add/{x},{y}")]
        public int AddPosition(int x, int y)
        {
            var position = new Position() { Id = SettingsManager.Settings.Positions.Count, X = x, Y = y };
            SettingsManager.Settings.Positions.Add(position);
            SettingsManager.Save();
            return position.Id;
        }

        [HttpGet]
        [Route("Update/{pos}/{x},{y}")]
        public void UpdatePosition(int pos, int x, int y)
        {
            var position = SettingsManager.Settings.Positions.First(p => p.Id == pos);
            position.X = x;
            position.Y = y;
            SettingsManager.Save();
        }
        [HttpGet]
        [Route("Map/{user},{position}")]
        public bool MapPosition(int user, int position)
        {
            SettingsManager.Settings.UserPositionMappings.RemoveAll(p => p.UserId == user);
            SettingsManager.Settings.UserPositionMappings.Add(new UserPositionMapping() { PositionId = position, UserId = user });
            SettingsManager.Save();
            return true;
        }
        [HttpGet]
        [Route("List")]
        public List<Position> ListPositions()
        {
            return SettingsManager.Settings.Positions;
        }
    }
}
