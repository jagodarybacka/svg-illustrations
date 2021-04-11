import React from 'react';
import { ReactComponent as BirdSvg } from './bird.svg';
import { ReactComponent as CosmosSvg } from './cosmos.svg';
import { ReactComponent as AirplaneSvg } from './airplane.svg';
import { ReactComponent as BrainSvg } from './brain.svg';
import { ReactComponent as RingsSvg } from './rings.svg';
import { ReactComponent as GandalfSvg } from './gandalf.svg';
import { ReactComponent as SauronSvg } from './sauron.svg';

const list = [
  {
    svg: CosmosSvg,
    title: 'Cosmos'
  },
  {
    svg: RingsSvg,
    title: 'Rings'
  },
  {
    svg: BirdSvg,
    title: 'Bird'
  },
  {
    svg: AirplaneSvg,
    title: 'Airplane'
  },
  {
    svg: BrainSvg,
    title: 'Brain'
  },
  {
    svg: GandalfSvg,
    title: 'Gandalf'
  },
  {
    svg: SauronSvg,
    title: 'Sauron'
  }
];

export function getSvgs() {
  return list.map(item => (
    <div className="svg-tile" key={item.title}>
      <item.svg />
      <p>{item.title}</p>
    </div>
  ));
}
