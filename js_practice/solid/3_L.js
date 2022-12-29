// Liskow substitution principle

class Person {}

class Member extends Person {
  access() {
    console.log('You have access');
  }
}
class Guest extends Person {
  isGuest = true;
}

class Frontend extends Member {
  canCreateFrontend() {}
}
class Backend extends Member {
  canCreateBackend() {}
}
class PersonFromDifferentCompany extends Guest {
  access() {
    throw new Error('U havent access go to your company');
  }
}

function openSecretDoor(member) {
  member.access();
}

// openSecretDoor(new Frontend());
// openSecretDoor(new Backend());
// openSecretDoor(new PersonFromDifferentCompany());// There should be member

// ========================================
class Component {
  isComponent = true;
}

class ComponentWithTemplate {
  render() {
    return `<div>Component</div>`;
  }
}

class HigherOrderComponent extends Component {}

class HeaderComponent extends ComponentWithTemplate {
  onInit() {}
}
class FooterComponent extends ComponentWithTemplate {
  afterInit() {}
}

class HOC extends HigherOrderComponent {
  render() {
    throw new Error('Render is impossible here');
  }
  wrapComponent(component) {
    component.wrapped = true;
    return component;
  }
}

function renderComponent(component) {
  console.log(component.render());
}
renderComponent(new HeaderComponent());
renderComponent(new FooterComponent());
