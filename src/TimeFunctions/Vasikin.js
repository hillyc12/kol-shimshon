import { DateTime } from "luxon";

const Vasikin = (sunrise) => {
  const brochos = new DateTime.fromISO(sunrise, {
    zone: "America/New_York",
  }).plus({ minutes: -29 });
  const brochosStr = brochos
    .toLocaleString(DateTime.TIME_SIMPLE)
    .substring(0, 4);

  const yeshtabach = new DateTime.fromISO(sunrise, {
    zone: "America/New_York",
  }).plus({ minutes: -10 });
  const yeshtabachStr = yeshtabach
    .toLocaleString(DateTime.TIME_SIMPLE)
    .substring(0, 4);
  const netz = new DateTime.fromISO(sunrise, {
    zone: "America/New_York",
  });
  const netzStr = netz.toLocaleString(DateTime.TIME_SIMPLE).substring(0, 4);

  const vasikin = {
    brochos: brochosStr,
    yeshtabach: yeshtabachStr,
    netz: netzStr,
  };
  return vasikin;
};
export default Vasikin;
