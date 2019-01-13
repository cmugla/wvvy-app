import React, { Fragment } from 'react';

import Header from './Header';
import Thumbs from './Thumbs';
import Schedule from './Schedule';
import Footer from './Footer';
import ListenButton from './ListenButton';
import Contact from './Contact';
import NowPlaying from './NowPlaying';
import Boombox from './Boombox';
import Featured from './Featured';

import { weeksBetween } from '../util';

const Home = props => {
  return (
    <Fragment>
      <Header />
      <Featured renderFeatured={
        ({
          epNumber,
          shouldShowFeaturedShow,
          Config,
          podcast,
          showDownloadMessage,
          setPlay,
          showDownloads
        }) => {
          const diff = weeksBetween()
          const shouldShowPauseMsg = diff === 15 || diff === 16;
          return (
            <section className="gradiant-background">
              <div className="text">
                <p>Featured Show:</p>
                {shouldShowPauseMsg && <p>Al Kooper's Sunday morning 11AM show (with rebroadcast the following Wednesday) will not be airing January 6th and 13th, but shall return on January 20.</p>}
                <h2>
                  DJ Al Kooper <br />
                  (musician, producer, <a href="https://en.wikipedia.org/wiki/Al_Kooper" target="_blank" rel="noopener noreferrer">and more</a>)<br />
                  "New Music for Old People" (Episode {epNumber})
                  </h2><p><span style={{ paddingRight: '5px' }} role="img" aria-label="satellite">📡</span> Sundays at 11AM & Wednesdays at 11PM <span style={{ paddingLeft: '5px' }} role="img" aria-label="satellite">📡</span></p>
                  <p>
                  {shouldShowFeaturedShow &&
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={setPlay}
                    >
                      Play now
                    </a>
                  }
                  {shouldShowFeaturedShow && !Config.IS_IOS &&
                    <React.Fragment>
                      <span style={{ padding: '0 1em' }}>|</span>
                      <a
                        download
                        href={podcast}
                        onClick={showDownloadMessage}
                        target="_blank"
                      >
                        Download
                      </a>
                    </React.Fragment>
                  }
                  <span style={{ padding: '0 1em' }}>|</span>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={showDownloads}
                  >
                    Listen to past shows
                  </a>
                </p>
              </div>
            </section>
          )
        }
      } />
      <Thumbs />
      <ListenButton />
      <Schedule />
      <div id="listen">
        <div className="text">
          <p>All yet-to-be-filled slots are manned by DJ Auto, our radio robot.</p>
        </div>
        <NowPlaying />
        <p className="text">
          <em>**disclaimer: Song meta-data is not always accurate - specifically when a show goes live - but we are always working to improve :)</em>
        </p>
      </div>
      <Boombox />
      <Contact />
      <Footer />
      <Thumbs />
    </Fragment>
  )
}

export default Home;
