﻿
//angular.module('Teaminator', []).
app.factory("restResourceFactory", ["$resource", "formatPropertyService",
    function ($resource, formatPropertyService) {
        return function (restUrl, ignoreId, actionOverrides) {
            return $resource(restUrl + (ignoreId ? "" : ":id"), {}, $.extend({}, {
                "update": {
                    method: "PUT",
                    transformResponse: function (data) {
                        return formatPropertyService.formatSingleObjectResponse(data);
                    },
                    transformRequest: function (data) {
                        return JSON.stringify(data);
                    }
                },
                "query": {
                    method: "GET",
                    transformResponse: function (data, headers) {
                        return formatPropertyService.formatArrayResponse(data);
                    },
                    isArray: true
                },
                "get": {
                    method: "GET",
                    params: { id: "@id" },
                    transformResponse: function (data, headers) {
                        return formatPropertyService.formatSingleObjectResponse(data);
                    }
                },
                "exist": {
                    method: "GET",
                    params: { id: "@id" },
                    transformResponse: function (data, headers) {
                        return { data: formatPropertyService.formatSingleObjectResponse(data) };
                    }
                },
                "save": {
                    method: "POST",
                    transformResponse: function (data, headers) {
                        return formatPropertyService.formatSingleObjectResponse(data);
                    },
                    transformRequest: function (data) {
                        return JSON.stringify(data);
                    }
                },
                "remove": {
                    method: "DELETE",
                    params: { id: "@id", seasonId: "@seasonId", departmentId: "@departmentId", channelId: "@channelId" },
                    transformResponse: function (data, headers) {
                        return formatPropertyService.formatSingleObjectResponse(data);
                    },
                    transformRequest: function (data) {
                        return JSON.stringify(data);
                    }
                }
            }, actionOverrides));
        };
    }
]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNlbGxQcmljZS5XZWIvUHJlc2VudGF0aW9uL3NjcmlwdHMvcmVzdFJlc291cmNlRmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxHQUFHLENBQUMsT0FBTyxDQUFDLHFCQUFxQixFQUFFO0lBQy9CLFdBQVcsRUFBRSx1QkFBdUIsRUFBRSx5QkFBeUI7SUFDL0QsVUFBUyxTQUF1QyxFQUFFLHFCQUFxQixFQUFFLHVCQUF1QjtRQUM1RixNQUFNLENBQUMsVUFBUyxPQUFPLEVBQUUsUUFBaUIsRUFBRSxlQUFnQjtZQUN4RCxNQUFNLENBQUMsU0FBUyxDQUNaLE9BQU8sR0FBRyxDQUFDLFFBQVEsR0FBRyxFQUFFLEdBQUcsS0FBSyxDQUFDLEVBQ2pDLEVBQUUsRUFDRixDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFDWDtnQkFDSSxRQUFRLEVBQUU7b0JBQ04sTUFBTSxFQUFFLEtBQUs7b0JBQ2IsaUJBQWlCLEVBQUUsVUFBVSxJQUFJO3dCQUM3QixNQUFNLENBQUMscUJBQXFCLENBQUMsMEJBQTBCLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ2xFLENBQUM7b0JBQ0QsZ0JBQWdCLEVBQUUsVUFBVSxJQUFJO3dCQUM1QixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDaEMsQ0FBQztpQkFDSjtnQkFDRCxPQUFPLEVBQUU7b0JBQ0wsTUFBTSxFQUFFLEtBQUs7b0JBQ2IsaUJBQWlCLEVBQUUsVUFBUyxJQUFJLEVBQUUsT0FBTzt3QkFDckMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDO29CQUMzRCxDQUFDO29CQUNELE9BQU8sRUFBRSxJQUFJO2lCQUNoQjtnQkFDRCxLQUFLLEVBQUU7b0JBQ0gsTUFBTSxFQUFFLEtBQUs7b0JBQ2IsTUFBTSxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRTtvQkFDckIsaUJBQWlCLEVBQUUsVUFBUyxJQUFJLEVBQUUsT0FBTzt3QkFDckMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLDBCQUEwQixDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNsRSxDQUFDO2lCQUNKO2dCQUNELE1BQU0sRUFBRTtvQkFDSixNQUFNLEVBQUUsTUFBTTtvQkFDZCxpQkFBaUIsRUFBRSxVQUFVLElBQUksRUFBRSxPQUFPO3dCQUN0QyxNQUFNLENBQUMscUJBQXFCLENBQUMsMEJBQTBCLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ2xFLENBQUM7b0JBQ0QsZ0JBQWdCLEVBQUUsVUFBUyxJQUFJO3dCQUMzQixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDaEMsQ0FBQztpQkFDSjtnQkFDRCxRQUFRLEVBQUU7b0JBQ04sTUFBTSxFQUFFLFFBQVE7b0JBQ2hCLE1BQU0sRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUU7b0JBQ3BHLGlCQUFpQixFQUFFLFVBQVMsSUFBSSxFQUFFLE9BQU87d0JBQ3JDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDbEUsQ0FBQztvQkFDRCxnQkFBZ0IsRUFBRSxVQUFTLElBQUk7d0JBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNoQyxDQUFDO2lCQUNKO2FBQ0osRUFBRSxlQUFlLENBQUMsQ0FDdEIsQ0FBQztRQUNOLENBQUMsQ0FBQztJQUNOLENBQUM7Q0FDSixDQUFDLENBQUMiLCJmaWxlIjoiU2VsbFByaWNlLldlYi9QcmVzZW50YXRpb24vc2NyaXB0cy9yZXN0UmVzb3VyY2VGYWN0b3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLmZhY3RvcnkoXCJyZXN0UmVzb3VyY2VGYWN0b3J5XCIsIFtcclxuICAgIFwiJHJlc291cmNlXCIsIFwiZm9ybWF0UHJvcGVydHlTZXJ2aWNlXCIsIFwicmVxdWVzdFRyYW5zZm9ybVNlcnZpY2VcIixcclxuICAgIGZ1bmN0aW9uKCRyZXNvdXJjZTogbmcucmVzb3VyY2UuSVJlc291cmNlU2VydmljZSwgZm9ybWF0UHJvcGVydHlTZXJ2aWNlLCByZXF1ZXN0VHJhbnNmb3JtU2VydmljZSkge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbihyZXN0VXJsLCBpZ25vcmVJZDogYm9vbGVhbiwgYWN0aW9uT3ZlcnJpZGVzPyk6IG5nLnJlc291cmNlLklSZXNvdXJjZUNsYXNzPGFueT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gJHJlc291cmNlPGFueT4oXHJcbiAgICAgICAgICAgICAgICByZXN0VXJsICsgKGlnbm9yZUlkID8gXCJcIiA6IFwiOmlkXCIpLFxyXG4gICAgICAgICAgICAgICAge30sXHJcbiAgICAgICAgICAgICAgICAkLmV4dGVuZCh7fSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcInVwZGF0ZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtUmVzcG9uc2U6IGZ1bmN0aW9uIChkYXRhKTogT2JqZWN0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmb3JtYXRQcm9wZXJ0eVNlcnZpY2UuZm9ybWF0U2luZ2xlT2JqZWN0UmVzcG9uc2UoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybVJlcXVlc3Q6IGZ1bmN0aW9uIChkYXRhKTogc3RyaW5nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJxdWVyeVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtUmVzcG9uc2U6IGZ1bmN0aW9uKGRhdGEsIGhlYWRlcnMpOiBhbnlbXSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZm9ybWF0UHJvcGVydHlTZXJ2aWNlLmZvcm1hdEFycmF5UmVzcG9uc2UoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzQXJyYXk6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZ2V0XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHsgaWQ6IFwiQGlkXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtUmVzcG9uc2U6IGZ1bmN0aW9uKGRhdGEsIGhlYWRlcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmb3JtYXRQcm9wZXJ0eVNlcnZpY2UuZm9ybWF0U2luZ2xlT2JqZWN0UmVzcG9uc2UoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFwic2F2ZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybVJlc3BvbnNlOiBmdW5jdGlvbiAoZGF0YSwgaGVhZGVycyk6IE9iamVjdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZm9ybWF0UHJvcGVydHlTZXJ2aWNlLmZvcm1hdFNpbmdsZU9iamVjdFJlc3BvbnNlKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1SZXF1ZXN0OiBmdW5jdGlvbihkYXRhKTogc3RyaW5nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJyZW1vdmVcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczogeyBpZDogXCJAaWRcIiwgc2Vhc29uSWQ6IFwiQHNlYXNvbklkXCIsIGRlcGFydG1lbnRJZDogXCJAZGVwYXJ0bWVudElkXCIsIGNoYW5uZWxJZDogXCJAY2hhbm5lbElkXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtUmVzcG9uc2U6IGZ1bmN0aW9uKGRhdGEsIGhlYWRlcnMpOiBPYmplY3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZvcm1hdFByb3BlcnR5U2VydmljZS5mb3JtYXRTaW5nbGVPYmplY3RSZXNwb25zZShkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtUmVxdWVzdDogZnVuY3Rpb24oZGF0YSk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LCBhY3Rpb25PdmVycmlkZXMpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXSk7Il0sInNvdXJjZVJvb3QiOiIuLyJ9
