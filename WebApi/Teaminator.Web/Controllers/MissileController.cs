﻿using System;
using System.Linq;
using System.Web.Http;
using Teaminator.WebApi;
using Microsoft.Owin;

namespace Teaminator.Web.Controllers
{
    public class MissileController : ApiController
    {
        private static readonly UserMissileService MissileService = new UserMissileService();

        [HttpGet]
        [Route("missile/current")]
        public int[] Current()
        {
            return MissileService.GetCurrentDirection();
        }

        [HttpGet]
        [Route("missile/reset")]
        public bool Reset()
        {
            MissileService.Reset();
            return true;
        }

        [HttpGet]
        [Route("missile/aim/{x},{y}")]
        public bool Aim(int x, int y)
        {
            MissileService.Aim(x, y);
            return true;
        }

        [HttpGet]
        [Route("missile/aim/{pos}")]
        public bool Aim(int pos)
        {
            MissileService.Aim(pos);
            return true;
        }

        [HttpGet]
        [Route("missile/threat/{username}")]
        public bool Threat(string username)
        {
            return MissileService.AimAtUser(username);
        }

        [HttpGet]
        [Route("missile/attack/{username}")]
        public bool Fire(string username)
        {
            var requestInfo = ((OwinContext)Request.Properties["MS_OwinContext"]).Request;
            Console.WriteLine("ATTACK " + username);
            Console.WriteLine(requestInfo.RemoteIpAddress);

            return MissileService.AttackUser(username);
        }

        [HttpGet]
        [Route("missile/fire")]
        public bool Fire()
        {
            MissileService.Fire();
            return true;
        }

        [HttpGet]
        [Route("missile/attack/random")]
        public bool RandomFire()
        {
            var userName = Settings.SettingsManager.Settings.Users.OrderBy(x => Guid.NewGuid()).FirstOrDefault();
            if (userName == null) return false;

            Console.WriteLine("ATTACK " + userName.Username);
            MissileService.Reset();
            return MissileService.AttackUser(userName.Username);
        }

        [HttpGet]
        [Route("missile/nod")]
        public bool Nod()
        {
            MissileService.Nod();
            return true;
        }

        [HttpGet]
        [Route("missile/shake")]
        public bool Shake()
        {
            MissileService.Shake();
            return true;
        }
    }
}
