﻿using System;
using System.Net;

namespace Teaminator.TeamcityService
{
    public class TeamcityClient
    {
        private const string builds = "httpAuth/app/rest/builds/";
        private readonly string host;
        public TeamcityClient(string host)
        {
            this.host = host;
        }

        public void GetBuilds()
        {

            var wc = new WebClient();
            wc.DownloadStringAsync(new Uri(host + builds));
            wc.DownloadStringCompleted += (sender, args) =>
            {

            };

        }

        public void GetBuild(int buildId)
        {
            
        }
    }
}
