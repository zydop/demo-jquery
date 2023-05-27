$(document).ready(function() {
  $('#myForm').submit(function(e) {
    e.preventDefault();

    var inputNumber = $('#inputNumber').val();
    var inputText = $('#inputText').val();

    var requestData = {
      inputNumber: inputNumber,
      inputText: inputText
    };

    $.ajax({
      url: 'B.php',
      type: 'POST',
      data: requestData,
      dataType: 'json',
      success: function(response) {
        displayTable(response);
      },
      error: function(xhr, status, error) {
        console.log(error);
      }
    });
  });

  function displayTable(data) {
    var tbody = $('#outputTable tbody');
    tbody.empty();

    $.each(data, function(index, item) {
      var row = $('<tr>').append(
        $('<td>').text(index),
        $('<td>').text(item)
      );
      tbody.append(row);
    });

    $('#outputTable').slideDown();
  }
});
