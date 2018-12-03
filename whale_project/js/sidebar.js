

function initialize(){

  country = $('#selectCur').val()
  wantRate = $('#wantKRW').val()
  period = $('pdate').val()
  term = $('alarmterm').val()

  var id = reservlist.length + 1;
  var info = [country, wantRate, period, term];
  var jsonfile = JSON.stringify(info);
  var jsonverb =  {};
  jsonverb[id] = info;

  chrome.storage.sync.set(jsonverb, function(){
    alert('success');
  });

  chrome.storage.sync.set({ 'id' : info}, function() {
            console.log('Value is set to ' + info);
  });

  chrome.storage.sync.get(['id'], function(result) {
    console.log('Value currently is ' + result.id);
  });
}
