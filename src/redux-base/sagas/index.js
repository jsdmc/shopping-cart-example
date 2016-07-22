import { fork } from 'redux-saga/effects';

function* startup() {

}

export default function* root(getState) {
  yield fork(startup, getState);
}
