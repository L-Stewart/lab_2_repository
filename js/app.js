'use strict';

const allHorn = [];
const keys = [];

function Horn (obj){
  this.title = obj.title;
  this.image_url = obj.image_url;
  this.description = obj.description;
<<<<<<< HEAD
  this.keyword = obj.keyword;
  keys.push(this.keyword);
=======
  this.horns = obj.horns;
  this.keyword = obj.keyword;
>>>>>>> 2f7bf51fa3f6dc34a77cb606451db86a1f1035ac

  allHorn.push(this);
}

Horn.prototype.render = function () {
  $('main').append('<section id="picture"></section>');
  let $picture = $('section[id="picture"]');
  let picTemplate = $('#photo-template').html();

  $picture.html(picTemplate);
  $picture.find('h2').text(this.title);
  $picture.find('img').attr({
    src: this.image_url,
    id: this.keyword
});
  $picture.find('p').text(this.description);
  
  $picture.removeClass('picture');
  $picture.attr('id', this.title);

}

//selecting box filtering
$('select[name="horn_creatures"]').on('change', function() {
  let $selection = $(this).val();
  $('h2').hide()
  $('img').hide()
  $('p').hide()
  $(`img[id="${$selection}"]`).show()
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
