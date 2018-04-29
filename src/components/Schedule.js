import React, { Component } from 'react';
import { map } from 'lodash';

import { sched, days, times, schedByTime, schedMatrix } from '../db';

const Schedule = (props) => {
  console.log({ schedMatrix })
  return (
    <div id="calendar">
      <div className="text">
        <h1>DJ Schedule</h1>
        <p>Any DJ's who are interested in having a show, <a href="mailto:stationmanager@wvvy.org?Subject=I%20want%20to%20be%20a%20WVVY%20DJ">we want to hear from you</a>!</p>
      </div>
      <table className="hideMobile">
        <tbody>
          <tr>
            <th></th>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
          </tr>
          {
            map(times, (time, timeIndex) => {
              return (
                <tr key={`rows-${time}`}>
                  <th>{time <= 12 ? time : time - 12}{time >= 12 ? ` pm` : ' am'}</th>
                  {
                    map(schedMatrix[timeIndex], (show, showIndex) => {
                      if(!show) {
                        return (
                          <td key={`slots-${showIndex}`}></td>
                        )
                      }

                      const { start, end, label, rebroadcast, day, dayIndex } = show;
                      if (start === time) {
                        const length = end - start;
                        return (
                          <td key={`slots-${showIndex}`} /*rowSpan={length}*/ className="show">
                            "{label.name}"
                            <br />
                            DJ {label.dj}
                            <br />
                            {label.time}
                            <br />
                            {rebroadcast &&
                              <em>Re-broadcast</em>}
                          </td>
                        )
                      }                      
                    })
                  } 
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <ul className="hideDesktop">
        {
          map(days, day => {
            return (
              <li key={`mobile-${day}`}>
                <h2>{day}</h2>
                <ul>
                  {
                    map(sched[day], (each, i) => (
                      <li key={`mobile-show-${i}`}>{each.label.time}: <em>"{each.label.name}"{each.rebroadcast && ' (Re-broadcast)'} - DJ {each.label.dj}</em></li>
                    ))
                  }
                </ul>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Schedule;
