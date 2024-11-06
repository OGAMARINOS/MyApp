const app = new Vue({
    el: '#app', // Vueが管理する一番外側のDOM要素
    data: {
      // Vue内部で使いたい変数は全てこの中に定義する
      fontSize:'50px',
      isActive: false,
      isDisplay: false,
      signal:'red',
      members: ['本田','香川','長友'],
      test: 'あああ <br> いいい',
      book: {
        title: 'タイトル',
        author: '著者名',
        url: 'http://google.com'
        },
      books: [
        {
          id:1,
          title: 'タイトル1',
          author: '著者名1',
          url: 'http://google.com'    
        },
        {
          id:2,
          title: 'タイトル2',
          author: '著者名2',
          url: 'http://google.com'       
        },
        {
        id:3,
          title: 'タイトル3',
          author: '著者名3',
          url: 'http://google.com'       
        },
      ]
      

    },
    methods:{
      btnClicked(){
        console.log('Vue クリックされた');
      }
    }
    
});

function btnClicked(){
  console.log('JS クリックされた');
}