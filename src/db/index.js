import { map } from 'lodash';
 
export const SUNDAY = 'Sunday';
const MONDAY = 'Monday';
const TUESDAY = 'Tuesday';
const WEDNESDAY = 'Wednesday';
const THURSDAY = 'Thursday';
const FRIDAY = 'Friday';
const SATURDAY = 'Saturday';

export const sched = {
  /* Sunday */
  [SUNDAY]: [
    {
      label: {
        dj: 'Allanardo',
        time: '9 pm - 10 pm',
        name: `It's A Big World, Open Your Ears`,
      },
      start: 21,
      end: 22,
      rebroadcast: true,
      day: 'Sunday',
      dayIndex: 0
    }
  ], 

  /* Monday */
  [MONDAY]: [
    {
      label: {
        dj: `Rock 'n Roll Rick`,
        time: '10 am - 12pm',
        name: `The Rock 'N Roll Rick Double Hour`,
      },
      start: 10,
      end: 12,
      rebroadcast: true,
      day: 'Monday',
      dayIndex: 1
    },
    {
      label: {
        dj: `Les More`,
        time: '2 pm - 4 pm',
        name: `Lost Treasures`,
      },
      start: 14,
      end: 16,
      rebroadcast: true,
      day: 'Monday',
      dayIndex: 1
    },
    {
      label: {
        dj: `Josh`,
        time: '6 pm - 8 pm',
        name: `Broken Record`,
      },
      start: 18,
      end: 20,
      rebroadcast: false,
      day: 'Monday',
      dayIndex: 1
    },
    {
      label: {
        dj: `Molly`,
        time: '8 pm - 10 pm',
        name: `Glacial Erratic C-Side Rock Show`,
      },
      start: 20,
      end: 22,
      rebroadcast: false,
      day: 'Monday',
      dayIndex: 1
    },
  ], 

  [TUESDAY]: [
    {
      label: {
        dj: `Gimili`,
        time: '5 pm - 7 pm',
        name: `The G G Spot`,
      },
      start: 17,
      end: 19,
      rebroadcast: false,
      day: 'Tuesday',
      dayIndex: 2
    },
    {
      label: {
        dj: `Constant Smiles`,
        time: '7 pm - 8 pm',
        name: `The Constant Smiles Hour`,
      },
      start: 19,
      end: 20,
      rebroadcast: false,
      day: 'Tuesday',
      dayIndex: 2
    },
    {
      label: {
        dj: `Gregory`,
        time: '8 pm - 11 pm',
        name: `Kitchen Table`,
      },
      start: 20,
      end: 23,
      rebroadcast: false,
      day: 'Tuesday',
      dayIndex: 2
    },
  ], 

  [WEDNESDAY]: [
    {
      label: {
        dj: `Papa Wolf`,
        time: '1 pm - 3 pm',
        name: `Papa Wolf's Picks`,
      },
      start: 13,
      end: 15,
      rebroadcast: true,
      day: 'Wednesday',
      dayIndex: 3
    },
    {
      label: {
        dj: `Rock 'n Roll Rick`,
        time: '5 pm - 7 pm',
        name: `The Rock 'N Roll Rick Double Hour`,
      },
      start: 17,
      end: 19,
      rebroadcast: false,
      day: 'Wednesday',
      dayIndex: 3
    },
    {
      label: {
        dj: `Frater Agiel`,
        time: '7 pm - 9 pm',
        name: `Black Cube Magic Circle`,
      },
      start: 19,
      end: 21,
      rebroadcast: false,
      day: 'Wednesday',
      dayIndex: 3
    },
  ], 

  [THURSDAY]: [
    {
      label: {
        dj: `Stavros`,
        time: '10 am - noon',
        name: `The Cosmic Chicken Coop`,
      },
      start: 10,
      end: 12,
      rebroadcast: true,
      day: 'Thursday',
      dayIndex: 4
    },
    {
      label: {
        dj: `Lelaini`,
        time: '7 pm - 9 pm',
        name: `Under My Bed`,
      },
      start: 19,
      end: 21,
      rebroadcast: false,
      day: 'Thursday',
      dayIndex: 4
    },
    {
      label: {
        dj: `Les More`,
        time: '9 pm - 11 pm',
        name: `Lost Treasures`,
      },
      start: 21,
      end: 23,
      rebroadcast: false,
      day: 'Thursday',
      dayIndex: 4
    },
  ], 

  [FRIDAY]: [
    {
      label: {
        dj: `Toby Codding`,
        time: '10 am - noon',
        name: `The Mix-Up`,
      },
      start: 10,
      end: 12,
      rebroadcast: false,
      day: 'Friday',
      dayIndex: 5
    },
    {
      label: {
        dj: `Stavros`,
        time: '4 pm - 6 pm',
        name: `The Cosmic Chicken Coop`,
      },
      start: 16,
      end: 18,
      rebroadcast: false,
      day: 'Friday',
      dayIndex: 5
    },
    {
      label: {
        dj: `Your Friend Caspian`,
        time: '7 pm - 9 pm',
        name: `Music My Brother Hates`,
      },
      start: 19,
      end: 21,
      rebroadcast: false,
      day: 'Friday',
      dayIndex: 5
    },
  ], 

  [SATURDAY]: [
    {
      label: {
        dj: `Papa Wolf`,
        time: '2 pm - 4 pm',
        name: `Papa Wolf's Picks`,
      },
      start: 14,
      end: 16,
      rebroadcast: false,
      day: 'Saturday',
      dayIndex: 6
    },
    {
      label: {
        dj: `Toby Codding`,
        time: '6 pm - 8 pm',
        name: `The Mix-Up`,
      },
      start: 18,
      end: 20,
      rebroadcast: true,
      day: 'Saturday',
      dayIndex: 6
    },
    {
      label: {
        dj: `Farls`,
        time: '8 pm - 10 pm',
        name: `Two farlours`,
      },
      start: 20,
      end: 22,
      rebroadcast: false,
      day: 'Saturday',
      dayIndex: 6
    }
  ], 
};

export const days = [
  SUNDAY,
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
]

export const earliestTime = 9;

const getTimes = (startTime) => {
  let times = []

  for(let i = startTime; i < 24; i++) {
    times.push(`${i <= 12 ? i : i - 12} ${i >= 12 ? 'pm' : ' am'}`)
  }

  return times;
}

export const times = getTimes(earliestTime);

const buildWeekFromTime = time => {
  let finalArray = [];

  days.forEach((day, dayColIndex) => {
    finalArray.push(null);
    sched[day].forEach(show => {
      if(show.start === time) {
        finalArray[show.dayIndex] = show
      } else if(show.start < time && show.end > time) {
        finalArray[show.dayIndex] = "X"
      }
    })
  })

  return finalArray;
}

const buildMatrix = () => {
  return map(times, (time, timeIndex) => buildWeekFromTime(timeIndex + earliestTime))
}

export const schedMatrix = buildMatrix();
