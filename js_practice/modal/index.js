const fruits = [
  { id: 1, title: 'apples', price: 20 },
  { id: 2, title: 'Oranges', price: 30 },
  { id: 3, title: 'Bananas', price: 40 },
];

const modal = $.modal({
  title: "Rostyk's Modal",
  closable: true,
  content: `  <p>Lorem ipsum dolor sir</p>
  <p>Lorem ipsum dolor sir</p>`,
  width: '400px',
  footerButtons: [
    {
      text: 'Okey',
      type: 'primary',
      handler() {
        console.log('Primaty btn clicked');
        modal.close();
      },
    },
    {
      text: 'Cancel',
      type: 'danger',
      handler() {
        console.log('Danger btn clicked');
        modal.close();
      },
    },
  ],
});
// all this paramethers are stored in options
