export function createCalendarUrl(events: string[]) {
  const calendar = events.join("\r\n");
  return `data:text/calendar;charset=utf-8,${encodeURIComponent(calendar)}`;
}

export function createCalendarEvent({
  uid,
  start,
  end,
  summary,
  location,
  description,
}: {
  uid: string;
  start: string;
  end: string;
  summary: string;
  location?: string;
  description?: string;
}) {
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Invitation//Wedding Invitation//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    "DTSTAMP:20261016T000000Z",
    `DTSTART:${start}`,
    `DTEND:${end}`,
    `SUMMARY:${summary}`,
    ...(location ? [`LOCATION:${location}`] : []),
    ...(description ? [`DESCRIPTION:${description}`] : []),
    "END:VEVENT",
    "END:VCALENDAR",
  ];
}
