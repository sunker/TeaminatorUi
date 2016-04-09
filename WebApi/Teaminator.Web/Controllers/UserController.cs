using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace Teaminator.Web.Controllers
{
using Teaminator.Domain.Models;
using Teaminator.Settings;

    [RoutePrefix("user")]
    public class UserController : ApiController
    {
        public UserController()
        {
            SettingsManager.Init();
        }

        [HttpGet]
        [Route("list")]
        public IEnumerable<User> Get()
        {
            return SettingsManager.Settings.Users;
        }

        [HttpGet]
        [Route("get/{id}")]
        public User Get(int id)
        {
            return SettingsManager.Settings.Users.FirstOrDefault(u => u.Id == id);
        }

        [HttpGet]
        [Route("update/{id},{username}")]
        public User Get(int id, string username)
        {
            var user = SettingsManager.Settings.Users.FirstOrDefault(u => u.Id == id);
            if (user != null) user.Username = username;
            SettingsManager.Save();
            return user;
        }

        [HttpGet]
        [Route("delete/{id}")]
        public bool Delete(int id)
        {
            var user = SettingsManager.Settings.Users.SingleOrDefault(u => u.Id == id);
            if (user == null) return false;
            SettingsManager.Settings.Users.Remove(user);
            SettingsManager.Save();
            return true;
        }


        [HttpGet]
        [Route("add/{userName}")]
        public User Post(string userName)
        {
            if (SettingsManager.Settings.Users.Any(u => u.Username == userName)) return null;
            var user = new User() { Username = userName, Id = SettingsManager.Settings.Users.Count };
            SettingsManager.Settings.Users.Add(user);
            SettingsManager.Save();
            return user;
        }

        [HttpGet]
        [Route("exist/{userName}")]
        public int Exist(string userName)
        {
            return SettingsManager.Settings.Users.Any(u => u.Username == userName) ? 1 : 0;
        }
    }
}
