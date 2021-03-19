import React from 'react';
import IMG_PLACEHOLDER from '../../imag/not-found.png';
import { CastList } from './Cast.styled';

const Cast = ({ cast }) => (
  <CastList>
    {cast.map(({ person, character, voice }, key) => (
      <div className="cast-item" key={key}>
        <div className="pic-wrapper">
          <img
            src={person.image ? person.image.medium : IMG_PLACEHOLDER}
            alt="cast-person"
          />
        </div>
        <div className="actor">
          <span>
            <spanc className="bold">{person.name}</spanc> | {character.name}{' '}
            {voice ? '| Voice' : ''}
          </span>
        </div>
      </div>
    ))}
  </CastList>
);
export default Cast;
