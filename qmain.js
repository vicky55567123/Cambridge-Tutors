/* MAKING THE QUOTES PAGE RESPONSIVE*/ 

/* ORGANISING SUBJECTS LIST (HIDE OR SHOW) */

  $(function () {
    $('#alevelsubjects').hide();
    $('#ks3subjects').hide();
    $('#gcsesubjects').hide();
    $('#elevenplussubjects').hide();


    $('#a-level').click(function() {
    $('#alevelsubjects').show();
    $('#ks3subjects').hide();
    $('#gcsesubjects').hide();
    $('#elevenplussubjects').hide();
    console.log("alevel clicked");
  });
    $('#gcse').click(function() {
    $('#alevelsubjects').hide();
    $('#ks3subjects').hide();
    $('#gcsesubjects').show();
    $('#elevenplussubjects').hide();
    console.log("gcse clicked");
  });
  $('#ks3').click(function() {
    $('#alevelsubjects').hide();
    $('#ks3subjects').show();
    $('#gcsesubjects').hide();
    $('#elevenplussubjects').hide();
    console.log("ks3 clicked");
  });
  $('#elevenplus').click(function() {
    $('#alevelsubjects').hide();
    $('#ks3subjects').hide();
    $('#gcsesubjects').hide();
    $('#elevenplussubjects').show();
    console.log("elevenplus clicked");
  });


  $('#generate-quote').click(function() {
    var quote = getQuote();
    $('#quote-result').text("The quote is £" + quote);
  })
});

function getALevelQuote() {
  var feePerHour = 0;

  if($('#a-level-biology:checked').length > 0) {
    console.log('a level biology clicked');
    feePerHour += 15;
  }
    if($('#a-level-chemistry:checked').length > 0) {
    console.log('a level chemistry clicked');
    feePerHour += 15;
  }
    if($('#a-level-geography:checked').length > 0) {
    console.log('a level geography clicked');
    feePerHour += 15;
  }
  if($('#a-level-maths:checked').length > 0) {
    console.log('a level maths clicked');
    feePerHour += 15;
  }
  var hours = parseInt($('#hours').val(), 10);

  console.log('calculation is', feePerHour, hours, feePerHour * hours);
 return feePerHour * hours
}

function getGCSEQuote(){
  var feePerHour = 0;

  if($('#gcse-biology:checked').length > 0) {
    console.log('gcse biology clicked');
    feePerHour += 15;
  }
  if($('#gcse-chemistry:checked').length > 0) {
    console.log('gcse chemistry clicked');
    feePerHour += 15;
  }
  if($('#gcse-english:checked').length > 0) {
    console.log('gcse english clicked');
    feePerHour += 15;
  }
  if($('#gcse-geography:checked').length > 0) {
    console.log('gcse geography clicked');
    feePerHour += 15;
  }
  if($('#gcse-french:checked').length > 0) {
    console.log('gcse french clicked');
    feePerHour += 15;
  }
  if($('#gcse-maths:checked').length > 0) {
    console.log('gcse maths clicked');
    feePerHour += 15;
  }
    if($('#gcse-physics:checked').length > 0) {
    console.log('gcse physics clicked');
    feePerHour += 15;
  }
  var hours = parseInt($('#hours').val(), 10);

  console.log('calculation is', feePerHour, hours, feePerHour * hours);
 return feePerHour * hours
}

function getKS3Quote(){
  var feePerHour = 0;
    if($('#ks3-french:checked').length > 0) {
    console.log('ks3 french clicked');
    feePerHour += 12;
  }
    if($('#ks3-english:checked').length > 0) {
    console.log('ks3 english clicked');
    feePerHour += 12;
  }
    if($('#ks3-maths:checked').length > 0) {
    console.log('ks3 maths clicked');
    feePerHour += 12;
  }
  var hours = parseInt($('#hours').val(), 10);

  console.log('calculation is', feePerHour, hours, feePerHour * hours);
  return feePerHour * hours
}


function getElevenPlusQuote(){
  var feePerHour = 0;
    if($('#elevenplus-primary:checked').length > 0) {
    console.log('elevenplus primary clicked');
    feePerHour += 12;
}
  var hours = parseInt($('#hours').val(), 10);

  console.log('calculation is', feePerHour, hours, feePerHour * hours);

  return feePerHour * hours
}

function getQuote() {

  var level = $('input[name=level]:checked').val();

  if (level === 'A-Level') {
    return getALevelQuote();
  }
  else if (level === 'GCSE') {
    return getGCSEQuote();
  }
  else if (level === 'KS3') {
    return getKS3Quote();
  }
  else if(level === 'ElevenPlus') {
    return getElevenPlusQuote();
  }

  return 30;
  }
