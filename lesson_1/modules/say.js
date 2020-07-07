const say = {
  hi(name = 'stranger') {
    console.log(`hi ${name}`);
  },
  bye(name = 'stranger') {
    console.log(`bye ${name}`)
  }
};

module.exports = say;