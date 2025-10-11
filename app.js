const user = {
    name: 'Paige',
    dayOfWeek: 'Saturday',
    schedule: ['wake up', 'get ready', 'clean house', 'eat', 'clean car'],
    dailySchedule: function() {
    return this.dayOfWeek + " " + this.schedule;
  }
};

user.schedule.push('go to store');

console.log(user.schedule);

console.log(user.schedule[4]);

console.log(user.schedule.indexOf('get ready'));

console.log(user.dailySchedule())