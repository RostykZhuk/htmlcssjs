const fruits = [
  {
    id: 1,
    title: 'apples',
    price: 20,
    img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fapple&psig=AOvVaw0k_DU0uOGG2LQ5IXVAcidY&ust=1671437530230000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCLjbrJXcgvwCFQAAAAAdAAAAABAE',
  },
  {
    id: 2,
    title: 'Oranges',
    price: 30,
    img: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.britannica.com%2F24%2F174524-050-A851D3F2%2FOranges.jpg&imgrefurl=https%3A%2F%2Fwww.britannica.com%2Fplant%2Forange-fruit&tbnid=DNiiMzJasQssuM&vet=12ahUKEwj0g-qg3IL8AhXkAhAIHQulB5kQMygDegUIARDJAQ..i&docid=U86k1P7L5gTu1M&w=1600&h=1064&q=Oranges&ved=2ahUKEwj0g-qg3IL8AhXkAhAIHQulB5kQMygDegUIARDJAQ',
  },
  {
    id: 3,
    title: 'Bananas',
    price: 40,
    img: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn1.sph.harvard.edu%2Fwp-content%2Fuploads%2Fsites%2F30%2F2018%2F08%2Fbananas-1354785_1920.jpg&imgrefurl=https%3A%2F%2Fwww.hsph.harvard.edu%2Fnutritionsource%2Ffood-features%2Fbananas%2F&tbnid=l4oYCU5P4owiQM&vet=12ahUKEwiQ572n3IL8AhXhlIsKHRdACTsQMygEegUIARDTAQ..i&docid=1KLMbt3mG7jfkM&w=1920&h=1280&q=bananas&ved=2ahUKEwiQ572n3IL8AhXhlIsKHRdACTsQMygEegUIARDTAQ',
  },
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


function render(){
  
}