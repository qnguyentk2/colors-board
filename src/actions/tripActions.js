import { TRIP_TYPE } from '@constType';
import { tripServices } from '@services';

const dataMock = {
    "trips": [
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10000
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10001
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10002
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10003
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10004
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10005
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10006
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10007
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10008
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10009
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10010
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10011
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10012
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10013
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10014
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10015
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10016
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10017
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10018
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10019
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10020
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10021
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10022
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10023
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10024
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10025
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10026
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10027
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10028
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10029
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10030
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10031
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10032
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10033
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10034
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10035
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10036
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10037
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10038
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10039
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10040
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10041
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10042
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10043
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10044
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10045
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10046
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10047
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10048
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10049
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10050
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10051
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10052
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10053
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10054
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10055
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10056
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10057
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10058
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10059
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10060
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10061
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10062
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10063
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10064
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10065
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10066
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10067
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10068
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10069
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10070
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10071
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10072
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10073
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10074
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10075
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10076
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10077
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10078
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10079
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10080
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10081
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10082
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10083
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10084
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10085
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10086
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10087
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10088
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10089
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10090
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10091
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10092
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10093
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10094
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10095
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10096
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10097
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10098
    },
    {
    "distance": 12,
    "duration": 3456,
    "start_time": "2000-11-22T03:44:55+0000",
    "end_time": "2000-11-22T03:55:66+0000",
    "trip_id": 10099
    }
    ],
    "totalPages": 100
};

export const getTripList = () => dispatch => {
  dispatch({
    type: TRIP_TYPE.GET_LIST_REQUEST
  });

  return tripServices.getList().then(res => {
    dispatch({
      type: TRIP_TYPE.GET_LIST_SUCCESS,
      payload: res.data,
    });
  }).catch(error => {
    dispatch({
      type: TRIP_TYPE.GET_LIST_FAILURE,
      payload: { error, data: dataMock },
    });
    throw error;
  })
}