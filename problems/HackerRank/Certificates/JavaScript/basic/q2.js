class NotesStore {
  constructor() {
    this.states = {
      active: [],
      completed: [],
      others: []
    }
  }

  addNote(state, name) {
    if (!name) throw ('Error: Name cannot be empty');
    if (!this.states[state]) throw (`Error: Invalid state ${state}`);
    this.states[state].push(name);
  }

  getNotes(state) {
    if (!this.states[state]) throw (`Error: Invalid state ${state}`);
    return this.states[state];
  }
}

const test = new NotesStore();

test.addNote('active', 'casa');
test.addNote('active', 'casa2');

console.log(test.getNotes('active'));
console.log(test.getNotes('completed'));
console.log(test.getNotes('wrongState'));
