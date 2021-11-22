import { DateTime } from "luxon";
const todayDt = new DateTime.now();
const todayDtLocal = new DateTime.local(
  todayDt.year,
  todayDt.month,
  todayDt.day,
  0,
  0
);
const minchaZemanin = () => {
  let minchaItems = [
    {
      time: todayDtLocal
        .plus({ hours: 12 })
        .plus({ minutes: 20 })
        .toLocaleString(DateTime.TIME_SIMPLE)
        .substring(0, 5),
      place: "אהל יעקב",
    },

    {
      time: todayDtLocal
        .plus({ hours: 12 })
        .plus({ minutes: 40 })
        .toLocaleString(DateTime.TIME_SIMPLE)
        .substring(0, 5),
      place: "Main בית מדרש",
    },
    {
      time: todayDtLocal
        .plus({ hours: 13 })
        .toLocaleString(DateTime.TIME_SIMPLE)
        .substring(0, 4),
      place: "אהל יעקב",
    },
    {
      time: todayDtLocal
        .plus({ hours: 13 })
        .plus({ minutes: 20 })
        .toLocaleString(DateTime.TIME_SIMPLE)
        .substring(0, 4),
      place: "אהל יעקב",
    },
    {
      time: todayDtLocal
        .plus({ hours: 13 })
        .plus({ minutes: 40 })
        .toLocaleString(DateTime.TIME_SIMPLE)
        .substring(0, 4),
      place: "אהל יעקב",
    },
    {
      time: todayDtLocal
        .plus({ hours: 14 })
        .toLocaleString(DateTime.TIME_SIMPLE)
        .substring(0, 4),
      place: "Main בית מדרש",
    },
    {
      time: todayDtLocal
        .plus({ hours: 13 })
        .plus({ minutes: 40 })
        .toLocaleString(DateTime.TIME_SIMPLE)
        .substring(0, 4),
      place: "אהל יעקב",
    },
    {
      time: todayDtLocal
        .plus({ hours: 14 })
        .plus({ minutes: 20 })
        .toLocaleString(DateTime.TIME_SIMPLE)
        .substring(0, 4),
      place: "אהל יעקב",
    },
    {
      time: todayDtLocal
        .plus({ hours: 14 })
        .plus({ minutes: 30 })
        .toLocaleString(DateTime.TIME_SIMPLE)
        .substring(0, 4),
      place: "בית ישראל",
    },
    {
      time: todayDtLocal
        .plus({ hours: 14 })
        .plus({ minutes: 45 })
        .toLocaleString(DateTime.TIME_SIMPLE)
        .substring(0, 4),
      place: "אהל יעקב",
    },
    {
      time: todayDtLocal
        .plus({ hours: 15 })
        .toLocaleString(DateTime.TIME_SIMPLE)
        .substring(0, 4),
      place: "בית ישראל",
    },
    {
      time: todayDtLocal
        .plus({ hours: 15 })
        .plus({ minutes: 15 })
        .toLocaleString(DateTime.TIME_SIMPLE)
        .substring(0, 4),
      place: "אהל יעקב",
    },
    {
      time: todayDtLocal
        .plus({ hours: 15 })
        .plus({ minutes: 30 })
        .toLocaleString(DateTime.TIME_SIMPLE)
        .substring(0, 4),
      place: "בית ישראל",
    },
    {
      time: todayDtLocal
        .plus({ hours: 15 })
        .plus({ minutes: 40 })
        .toLocaleString(DateTime.TIME_SIMPLE)
        .substring(0, 4),
      place: "אהל יעקב",
    },
    {
      time: todayDtLocal
        .plus({ hours: 15 })
        .plus({ minutes: 50 })
        .toLocaleString(DateTime.TIME_SIMPLE)
        .substring(0, 4),
      place: "בית ישראל",
    },
    {
      time: todayDtLocal
        .plus({ hours: 16 })
        .toLocaleString(DateTime.TIME_SIMPLE)
        .substring(0, 4),
      place: "אהל יעקב",
    },
    {
      time: todayDtLocal
        .plus({ hours: 16 })
        .plus({ minutes: 10 })
        .toLocaleString(DateTime.TIME_SIMPLE)
        .substring(0, 4),
      place: "בית ישראל",
    },
    {
      time: todayDtLocal
        .plus({ hours: 16 })
        .plus({ minutes: 23 })
        .toLocaleString(DateTime.TIME_SIMPLE)
        .substring(0, 4),
      place: "אהל יעקב",
    },
  ];
  return minchaItems;
  /* const dtStr240 =
    earliest.year + "-" + earliest.month + "-" + earliest.day + "T14:40:00";
  const dtStr120 =
    earliest.year + "-" + earliest.month + "-" + earliest.day + "T13:20:00";
  const dtStr300 =
    earliest.year + "-" + earliest.month + "-" + earliest.day + "T15:00:00";
  const time120 = new DateTime.fromISO(dtStr120, {
    zone: "America/New_York",
  });
  const time240 = new DateTime.fromISO(dtStr240, {
    zone: "America/New_York",
  });
  const time300 = new DateTime.fromISO(dtStr300, {
    zone: "America/New_York",
  });
  nextTime = time120; */
  /*   for (let x = 1; x < 10; x++) {
    if (nextTime < time240) {
      nextTime = nextTime.plus({ minutes: 20 });
    } else {
      nextTime = nextTime.plus({ minutes: 15 });
    }
    if (nextTime > latest) {
      x = 101;
    }
    console.log(nextTime.toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS));
  } */
};

export default minchaZemanin;
