import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setWelcome } from '../state/actions';

export function App(props) {
  const dispatch = useDispatch()
  const welcome = useSelector(state => state.welcome)
  return (
    <div>
      <h1>{welcome}</h1>
      <button onClick={() => dispatch(setWelcome('bonjour'))}>Click</button>
    </div>
  )
}
