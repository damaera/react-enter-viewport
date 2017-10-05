import React from 'react';
import { storiesOf } from '@storybook/react';
import InView from '../src/InView';

storiesOf('In View', module)
  .add('hello', () => {
    return (
      <div>
        { [0,1,2,3,4,5,6,7,8,9,10,11,12].map((i) => {
          return <InView
            key={i}
            style={{
              transition: 'all .4s',
              position: 'relative',
              left: -200,
              background: '#444',
              width: 200,
              height: 100,
              marginTop: 100,
              opacity: 1,
            }}
            onEnter={(el) => {
              el.style.left = i * 50 + 'px'
              el.style.opacity = 1
            }}
            onExit={(el) => {
              el.style.left = '-200px'
              el.style.opacity = 0.2
            }}
          />
        }) }
      </div>
    )
  })