/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum WeekDays {
  Mon = 'Monday',
  Tue = 'Tuesday',
  Wed = 'Wednesday',
  Thu = 'Thursday',
  Fri = 'Friday',
}

enum WeekEnd {
  Sat = 'Saturday',
  Sun = 'Sunday',
}

const isWeekend = (day: WeekDays | WeekEnd): boolean => {
  return day === WeekEnd.Sat || day === WeekEnd.Sun;
};
