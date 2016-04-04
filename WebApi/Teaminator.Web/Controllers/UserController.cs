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
            //return new List<User>()
            //           {
            //               new User() {Id = 1, Username = "Erik Sundell" },
            //               new User() {Id = 2, Username = "Erik 2" },
            //               new User() {Id = 3, Username = "Sunker" },
            //               new User() {Id = 4, Username = "ersud" },
            //               new User() {Id = 5, Username = "Användare 2" },
            //           };
            return SettingsManager.Settings.Users;
        }

        [HttpGet]
        [Route("get/{id}")]
        public User Get(int id)
        {
            return SettingsManager.Settings.Users.FirstOrDefault(u => u.Id == id);
        }

        [HttpGet]
        [Route("add/{userName}")]
        public int Post(string userName)
        {
            if (SettingsManager.Settings.Users.Any(u => u.Username == userName)) return -1;
            var user = new User() { Username = userName, Id = SettingsManager.Settings.Users.Count };
            SettingsManager.Settings.Users.Add(user);
            SettingsManager.Save();
            return user.Id;
        }
    }
}
