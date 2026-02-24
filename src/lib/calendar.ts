import { enUS } from "date-fns/locale";
import { dateFnsLocalizer } from "react-big-calendar";

const locales = {
  "en-US": enUS,
};

export const localizer = dateFnsLocalizer({
  format: (date, format, options) =>
    new Date(date).toLocaleDateString("en-US", options),
  parse: (dateString, format, options) =>
    new Date(dateString),
  startOfWeek: () => 1, // Monday
  getDay: (date) => new Date(date).getDay(),
  locales,
});
