'use strict';

const allHorn = [];

function Horn (obj){
  this.title = obj.title;
  this.image_url = obj.image_url;
  this.description = obj.description;

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

//selecting box filtering
$('select'[name='horn_creatures']).on('change', function() {
  let $selection = $(this).val();
  $('img').hide();
  $(`img[data-]`)
})

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
