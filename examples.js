// Basic state tracking
const user = Observable.state({ name: "Ali" });

user.name = "Ahmed";
user.name = "Sara";

console.log(user.history());


// Undo example
const doc = Observable.state({ text: "Hello" });

doc.text = "Hello World";
doc.undo();

console.log(doc.text);


// Deep tracking
const profile = Observable.state(
  { user: { name: "Ali" } },
  { deep: true }
);

profile.user.name = "Ahmed";

console.log(profile.history());
