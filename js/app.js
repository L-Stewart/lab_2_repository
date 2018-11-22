'use strict';

const allHorn = [];
const keys = [];

function Horn (obj){
  this.title = obj.title;
  this.image_url = obj.image_url;
  this.description = obj.description;
  this.keyword = obj.keyword;
  keys.push(this.keyword);

  allHorn.push(this);
}

Horn.prototype.render = function () {
  $('main').append('<section class="picture"></section>');
  let $picture = $('section[class="picture"]');
  let picTemplate = $('#photo-template').html();

  $picture.html(picTemplate);
  $picture.find('h2').text(this.title);
  $picture.find('img').attr('src',this.image_url);
  $picture.find('p').text(this.description);
  
  $picture.removeClass('picture');
  $picture.attr('class', this.title);

}

function readJson() {
  $.get('./data/page-1.json', 'json')
  .then(data =>{
    data.forEach(hornObj =>{
      new Horn(hornObj);
    })
  })
  .then(() => {allHorn.forEach(horn => {
    horn.render();
  })
})
}

$(() => readJson());
