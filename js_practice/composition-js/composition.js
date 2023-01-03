function createProgrammer(name) {
  const programmer = { name };
  return {
    ...programmer,
    ...canCode(programmer),
  };
}

function canCode({ name }) {
  return {
    code: () => console.log(`${name} is coding...`),
  };
}

function canAngular({ name }) {
  return {
    angular: () => console.log(`${name} is creating Angular app...`),
  };
}

function canNodejs({ name }) {
  return {
    nodejs: () => console.log(`${name} is programming on Node JS...`),
  };
}

function createFrontend(name) {
  const programmer = createProgrammer(name);

  return {
    ...programmer,
    ...canAngular(programmer),
    ...canReactAndVue(programmer),
  };
}

function createBackend(name) {
  const programmer = createProgrammer(name);

  return {
    ...programmer,
    ...canNodejs(programmer),
  };
}

function createFullstack(name) {
  const programmer = createProgrammer(name);

  return {
    ...programmer,
    ...canNodejs(programmer),
    ...canAngular(programmer),
  };
}

function canReactAndVue({ name }) {
  return {
    react: () => console.log(`${name} is creating React app...`),
    vue: () => console.log(`${name} is creating Vue app...`),
  };
}

const programmer = createProgrammer('Oleg');
programmer.code();

const frontend = createFrontend('Frontend');
frontend.code();
frontend.angular();
frontend.react();
frontend.vue();

const backend = createBackend('Max');
backend.code();
backend.nodejs();

const fullstack = createFullstack('Elena');
fullstack.angular();
fullstack.nodejs();
fullstack.code();
