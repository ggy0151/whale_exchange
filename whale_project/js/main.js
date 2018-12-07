(function () {

  $('#pdate').on('change', (event) => {
    countCheck();
  })
  $('#pdate').on('click', (event) => {
    blockCal();
  })
  $('#id_reserv').on('click', (event) => {
    event.preventDefault();
    window.location.href = "index.html";
  })
  $('#id_check').on('click', (event) => {
    event.preventDefault();
    window.location.href = "check.html";
  })
  $('#conf').on('click', (event) => {
    event.preventDefault();
    window.location.href = "index.html";
  })
  $('#checkinfo').on('click', (event) => {
    event.preventDefault();
    window.location.href = "check.html";
  })

  var callSelectCur = document.getElementById("selectCur");
  if(callSelectCur) {
    callSelectCur.addEventListener('click', function(evt) {
      evt.preventDefault();
      selectCur();
    });
  }

  var toConfirmPage = document.getElementById("reservform");
  if(toConfirmPage) {
    toConfirmPage.addEventListener('submit', function(evt) {
      //var formCheck = $("#reservform");
        evt.preventDefault();
        window.location.href= "confirm.html";
    })
  }
})()


function selectCur() {
  var USD = "USD", _USD = "1 달러", JPY = "JPY", _JPY = "1 엔", EUR = "EUR",
      _EUR = "1 유로", CNY = "CNY", _CNY = "1 위안";
  var option = document.getElementById("selectCur").value;
  if(option == "USD") {
    document.getElementById("ForeignCur").value = USD + "  " + _USD;
    document.getElementById("ForeignCur1").value = USD + "  " + _USD;
    $.get("http://api.kimtree.net/exchange/", setData1);
  } else if (option == "JPY") {
    document.getElementById("ForeignCur").value = JPY + "  " + _JPY;
    document.getElementById("ForeignCur1").value = JPY + "  " + _JPY;
    $.get("http://api.kimtree.net/exchange/", setData2);
  } else if (option == "EUR") {
    document.getElementById("ForeignCur").value = EUR + "  " + _EUR;
    document.getElementById("ForeignCur1").value = EUR + "  " + _EUR;
    $.get("http://api.kimtree.net/exchange/", setData3);
  } else if (option == "CNY") {
    document.getElementById("ForeignCur").value = CNY + "  " + _CNY;
    document.getElementById("ForeignCur1").value = CNY + "  " + _CNY;
    $.get("http://api.kimtree.net/exchange/", setData4);
  }
}

function notifyMe(){
  var option1 = {
    type: 'basic',
    title: "목표 환율 달성!!!",
    message: "설정하신 환율값에 도달했습니다. 예약 내역을 확인해주세요.",
    iconUrl: "img/logo.png"
    };
  whale.notifications.create('success', option1);
}

function blockCal (){
  var tmp = new Date();
  var day = tmp.getDate();
  var month = tmp.getMonth() + 1;
  var year = tmp.getFullYear();
  if(day < 10) {
    day = '0'+day;
  }
  if(month<10) {
    month = '0'+month;
  }
  tmp = year+ '-' + month + '-' + day;
  document.getElementById('pdate').min = tmp;
}

function setData1(data, status){
  var test = $("#exchangeKRW"),
      curstr = data["USD"];
  test.html(curstr);
}
function setData2(data, status){
  var test = $("#exchangeKRW"),
      curstr = data["JPY"];
  test.html(curstr);
}

function setData3(data, status){
  var test = $("#exchangeKRW"),
      curstr = data["EUR"];
  test.html(curstr);
}
function setData4(data, status){
  var test = $("#exchangeKRW"),
      curstr = data["CNY"];
  test.html(curstr);
}
