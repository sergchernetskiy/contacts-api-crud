const LS_KEY = 'form-data';

export function load() {
  try {
    const serializedData = localStorage.getItem(LS_KEY);
    serializedData ? JSON.parse(serializedData) : {};
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
}

export function save(value) {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(LS_KEY, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
}

export function removeLS() {
  try {
    localStorage.removeItem(LS_KEY);
  } catch (error) {
    console.error('Remove key from state error: ', error.message);
  }
}
