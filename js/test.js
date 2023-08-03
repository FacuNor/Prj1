function test() {
    var url = "https://prod-245.westeurope.logic.azure.com:443/workflows/cc2c2f1d3e9849f989e37c40500198b5/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=oeW_EGtQKaIBXA9oAn_V8BUriQ_w4JqRxSxjgNTFtj4"
    var data = {ciao:'test',halo:"test 2"}
/*
    fetch(url,{
        method: 'PUT',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    });*/
}

function checkAll() {
    const checkAllBox = document.getElementById("check-all");
    const checkboxes = document.querySelectorAll('input[type="checkbox"][data-check-all="check-all"]');

    for (const checkbox of checkboxes) {
        checkbox.checked = checkAllBox.checked;
    }
}

function checkCheckAll() {
    const checkAllBox = document.getElementById("check-all");
    const checkboxes = document.querySelectorAll('input[type="checkbox"][data-check-all="check-all"]');
    let allChecked = true;

    for (const checkbox of checkboxes) {
        if (!checkbox.checked) {
            allChecked = false;
            break;
        }
    }

    checkAllBox.checked = allChecked;
}