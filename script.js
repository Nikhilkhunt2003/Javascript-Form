let isError = true;

// None Checkbox Checked So Add Extrahobbies Button Hide And All Checkbox Is Disabled
function Reassign() {
  var a = document.getElementsByName("hobbies");
  var b = document.getElementById("none");
  if (b.checked == true) {
    for (var i = 1; i < a.length; i++) {
      a[i].disabled = true;
    }
    let newhbbtn = document.getElementById("newhbbtn");
    newhbbtn.style.visibility = "hidden";
  }
  if (b.checked == false) {
    for (var i = 1; i < a.length; i++) {
      a[i].disabled = false;
    }
    let newhbbtn = document.getElementById("newhbbtn");
    newhbbtn.style.visibility = "visible";
  }
}

// This Function Is Applied For Validation
function validateForm() {
  let fname = document.getElementById("fname").value;
  let mname = document.getElementById("mname").value;
  let lname = document.getElementById("lname").value;
  let mobileno = document.getElementById("mobno").value;
  let email = document.getElementById("emailid").value;
  let address = document.getElementById("address").value;
  let city = document.getElementById("city").value;
  let state = document.getElementById("state").value;
  let country = document.getElementById("country").value;
  let pincode = document.getElementById("pincode").value;
  let male = document.querySelector(".male");
  let female = document.querySelector(".female");
  let other = document.querySelector(".other");
  let password = document.getElementById("pass").value;
  let conpassword = document.getElementById("conpass").value;

  // Error Message Printing
  function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
  }

  let errmessagefname = true;
  let errmessagemname = true;
  let errmessagelname = true;
  let errmessagemobile = true;
  let errmessageemail = true;
  let errmessageaddress = true;
  let errmessagecity = true;
  let errmessagestate = true;
  let errmessagecountry = true;
  let errmessagepincode = true;
  let errmessagegender = true;
  let errmesghobby = true;
  let errmessagepass = true;
  let errmessageconpass = true;

  let hobbies = [];
  let checkboxes = document.getElementsByName("hobbies");
  let nonechk = document.getElementById("none");

  // Hobbies Validation
  function atLeastOneCheckboxChecked(checkboxes) {
    return Array.from(checkboxes).some((chkbox) => chkbox.checked);
  }
  var hbb = "";

  if (!atLeastOneCheckboxChecked(checkboxes)) {
    printError("errmesghobby", "Please Select Atlist One Hobbie");
  } else {
    if (nonechk.checked) {
      for (let i = 1; i < checkboxes.length; i++) {
        checkboxes[i].disabled = true;
      }
      hbb = "No Any Hobbies";
    } else {
      for (let i = 1; i < checkboxes.length; i++) {
        checkboxes[i].disabled = false;
        if (checkboxes[i].checked) {
          hobbies.push(checkboxes[i].value);
        }
      }
    }
    printError("errmesghobby", "");
    errmesghobby = false;
  }

  if (hobbies.length) {
    hbb = hobbies.join(", ");
  }

  // FirstName Validation
  if (fname == "") {
    printError("errmessagefname", "Enter First Name");
  } else {
    let regex = /^[a-zA-Z]{2,10}$/gm;
    if (regex.test(fname) === false) {
      printError("errmessagefname", "Enter Properly First Name");
    } else {
      printError("errmessagefname", "");
      //console.log(fname);
      errmessagefname = false;
    }
  }

  // MiddleName Validation
  if (mname == "") {
    printError("errmessagemname", "Enter Middle Name");
  } else {
    let regex = /^[a-zA-Z]{2,15}$/gm;
    if (regex.test(mname) === false) {
      printError("errmessagemname", "Enter Properly Middle Name");
    } else {
      printError("errmessagemname", "");
      //console.log(mname);
      errmessagemname = false;
    }
  }

  // LastName Validation
  if (lname == "") {
    printError("errmessagelname", "Enter Last Name");
  } else {
    let regex = /^[a-zA-Z]{2,10}$/gm;
    if (regex.test(lname) === false) {
      printError("errmessagelname", "Enter Properly Last Name");
    } else {
      printError("errmessagelname", "");
      //console.log(lname);
      errmessagelname = false;
    }
  }

  // MobileNumber Validation
  if (mobileno == "") {
    printError("errmessagemobile", "Enter Mobile Number");
  } else {
    let regex = /^(\+\d{1,3}[- ]?)?\d{10}$/gm;
    if (regex.test(mobileno) === false) {
      printError("errmessagemobile", "Enter Properly Mobile Number");
    } else {
      printError("errmessagemobile", "");
      //console.log(mobileno);
      errmessagemobile = false;
    }
  }

  

  // Email Validation
  if (email == "") {
    printError("errmessageemail", "Enter Email");
  } else {
    let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gm;
    if (regex.test(email) === false) {
      printError("errmessageemail", "Enter Properly Email");
    } else {
      printError("errmessageemail", "");
      // console.log(email);
      errmessageemail = false;
    }
  }

  // Address Validation
  if (address == "") {
    printError("errmessageaddress", "Enter Address");
  } else {
    printError("errmessageaddress", "");
    // console.log(address);
    errmessageaddress = false;
  }

  // City Validation
  if (city == "select") {
    document.getElementById("city").style.outlineColor = "Red";
    document.getElementById("city").style.borderColor = "Red";
  } else {
    document.getElementById("city").style.outlineColor = "Black";
    document.getElementById("city").style.borderColor = "Black";
    // console.log(city);
    errmessagecity = false;
  }

  // State Validation
  if (state == "select") {
    document.getElementById("state").style.outlineColor = "Red";
    document.getElementById("state").style.borderColor = "Red";
  } else {
    document.getElementById("state").style.outlineColor = "Black";
    document.getElementById("state").style.borderColor = "Black";
    // console.log(state);
    errmessagestate = false;
  }

  // Country Validation
  if (country == "select") {
    document.getElementById("country").style.outlineColor = "Red";
    document.getElementById("country").style.borderColor = "Red";
  } else {
    document.getElementById("country").style.outlineColor = "Black";
    document.getElementById("country").style.borderColor = "Black";
    // console.log(country);
    errmessagecountry = false;
  }

  // Pincode Validation
  if (pincode == "") {
    document.getElementById("pincode").style.outlineColor = "Red";
    document.getElementById("pincode").style.borderColor = "Red";
  } else {
    let regex = /^[1-9][0-9]{5}$/gm;
    if (regex.test(pincode) === false) {
      document.getElementById("pincode").style.outlineColor = "Red";
      document.getElementById("pincode").style.borderColor = "Red";
    } else {
      document.getElementById("pincode").style.outlineColor = "Black";
      document.getElementById("pincode").style.borderColor = "Black";
      // console.log(pincode);
      errmessagepincode = false;
    }
  }

  // Gender Validation
  var genderselect = "";
  if (!male.checked && !female.checked && !other.checked) {
    printError("errmessagegender", "Please Select Gender");
  } else {
    if (male.checked) {
      genderselect = "Male";
    } else if (female.checked) {
      genderselect = "Female";
    } else {
      genderselect = "Other";
    }
    printError("errmessagegender", "");
    errmessagegender = false;
  }

  var formData = [];
  var rows = document
    .getElementById("myTable")
    .getElementsByTagName("tbody")[0] 
    .getElementsByTagName("tr");

  for (var i = 0; i < rows.length; i++) {
    var selectValue = rows[i].querySelector(
      'select[name="selectOption"]'
    ).value;
    var textInput1Value = rows[i].querySelector(
      'input[name="textInput1"]'
    ).value;
    var textInput2Value = rows[i].querySelector(
      'input[name="textInput2"]'
    ).value;

    // Education Validation
    if (selectValue === "") {
      isError = true;
      rows[i].querySelector('select[name="selectOption"]').style.outlineColor =
        "Red";
      rows[i].querySelector('select[name="selectOption"]').style.borderColor =
        "Red";
    } else {
      rows[i].querySelector('select[name="selectOption"]').style.outlineColor =
        "Black";
      rows[i].querySelector('select[name="selectOption"]').style.borderColor =
        "Black";
      // errmessageedu = false;
      isError = false;
    }

    if (textInput1Value.trim() === "") {
      isError = true;
      rows[i].querySelector('input[name="textInput1"]').style.outlineColor =
        "Red";
      rows[i].querySelector('input[name="textInput1"]').style.borderColor =
        "Red";
    } else {
      let regex = /^[0-9]{4}$/gm;
      if (regex.test(textInput1Value.trim()) === false) {
        isError = true;
        rows[i].querySelector('input[name="textInput1"]').style.outlineColor =
          "Red";
        rows[i].querySelector('input[name="textInput1"]').style.borderColor =
          "Red";
      } else {
        rows[i].querySelector('input[name="textInput1"]').style.outlineColor =
          "Black";
        rows[i].querySelector('input[name="textInput1"]').style.borderColor =
          "Black";
        // errmessageyear = false;
        isError = false;
      }
    }

    if (textInput2Value.trim() === "") {
      isError = true;
      rows[i].querySelector('input[name="textInput2"]').style.outlineColor =
        "Red";
      rows[i].querySelector('input[name="textInput2"]').style.borderColor =
        "Red";
    } else {
      let regex = /^[0-9]{2}.[0-9]{2}$/gm;
      if (regex.test(textInput2Value.trim()) === false) {
        isError = true;
        rows[i].querySelector('input[name="textInput2"]').style.outlineColor =
          "Red";
        rows[i].querySelector('input[name="textInput2"]').style.borderColor =
          "Red";
      } else {
        rows[i].querySelector('input[name="textInput2"]').style.outlineColor =
          "Black";
        rows[i].querySelector('input[name="textInput2"]').style.borderColor =
          "Black";
        // errmessageper = false;
        isError = false;
      }
    }
    formData.push({
      selectOption: selectValue,
      textInput1: textInput1Value,
      textInput2: textInput2Value,
    });
  }

  // Password Validation
  if (password == "") {
    printError("errmessagepass", "Enter Password");
  } else {
    let regex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/gm;
    if (regex.test(password) === false) {
      printError("errmessagepass", "Enter Password Properly");
    } else {
      printError("errmessagepass", "");
      // console.log(password);
      errmessagepass = false;
    }
  }

  // Confirm Password Validation
  if (conpassword == "") {
    printError("errmessageconpass", "Enter Confirm Password");
  } else {
    if (password != conpassword) {
      printError(
        "errmessageconpass",
        "Password And Confirm Password Not Match"
      );
    } else {
      printError("errmessageconpass", "");
      // console.log(conpassword);
      errmessageconpass = false;
    }
  }

  if (
    (errmessagefname ||
      errmessagemname ||
      errmessagelname ||
      errmessagemobile ||
      errmessageemail ||
      errmessageaddress ||
      errmessagecity ||
      errmessagestate ||
      errmessagecountry ||
      errmessagepincode ||
      errmessagegender ||
      errmesghobby ||
      errmessagepass ||
      errmessageconpass ||
      isError) == true
  ) {
    document.getElementById("ansname").innerText =
      "Please Check All Entered Value Properly";
  } else {
    
    // Creating a string from input data for preview
    document.getElementById("ansname").innerHTML = `
    <table>
    <tr><td>My Name Is: </td><td>${fname} ${mname} ${lname}</td></tr>
    <tr><td>Mobile Number Is: </td><td>${mobileno}</td></tr>
    <tr><td>Email Is: </td><td>${email}</td></tr>
    <tr><td>I Lives At: </td><td>${
      address + ", " + city + ", " + state + ", " + country + ", " + pincode
    }</td></tr>
    <tr><td>Gender Is: </td><td>${genderselect}</td></tr>
     <tr><td>Hobby Is: </td><td>${hbb}</td></tr>
     <tr><td>Password Is: </td><td>${conpassword}</td></tr>
    </table>`;
    // console.log(formData);

    var showdata = "<table>";
    showdata += "<tr>";
    showdata += "<td>" + "Sr." + "</td>";
    showdata += "<td>" + "Education" + "</td>";
    showdata += "<td>" + "Passing Year" + "</td>";
    showdata += "<td>" + "Percentage" + "</td>";
    showdata += "</tr>";

    for (var i = 0; i < formData.length; i++) {
      showdata += "<tr>";
      showdata += "<td>" + i + "</td>";
      showdata += "<td>" + formData[i].selectOption + "</td>";
      showdata += "<td>" + formData[i].textInput1 + "</td>";
      showdata += "<td>" + formData[i].textInput2 + "</td>";
      showdata += "</tr>";
    }
    document.getElementById("printedudata").innerHTML = showdata;
  }
}

// This Function Is Invoked When Add Extra Hobbies
function addhobby() {
  var hname = prompt("Enter Extra Hobbies Name...");
  if (hname == null) {
  } else {
    if (hname == "") {
      alert("Enter Hobbies Name");
    } else {
      let myDiv = document.getElementById("myDiv");
      let chkdiv = document.createElement("div");
      let chklbl = document.createElement("label");
      // chklbl.for = hname;
      chklbl.innerText = " " + hname;
      var checkbox = document.createElement("input");

      // Assigning the attributes to created checkbox
      checkbox.type = "checkbox";
      checkbox.name = "hobbies";
      checkbox.value = hname.toLowerCase();
      checkbox.id = hname.toLowerCase();
      myDiv.appendChild(chkdiv);
      chkdiv.appendChild(checkbox);
      chkdiv.appendChild(chklbl);
    }
  }
}

// This Function Is Used For Add Extra Education Row
function addRow() {
  var table = document
    .getElementById("myTable")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow();
  newRow.insertCell(0).innerHTML =
    '<select name="selectOption" class="eductn"><option value="">Select Education</option><option value="h.s.c">H.S.C</option><option value="s.s.c">S.S.C</option><option value="grajuate">Grajuate</option></select>';
  newRow.insertCell(1).innerHTML =
    '<input type="text" class="inp-sty" name="textInput1" placeholder="2024" title="Enter Only Four Digit Year, Ex:- 2002">';
  newRow.insertCell(2).innerHTML =
    '<input type="text" class="inp-sty" name="textInput2" placeholder="88.25" title="Enter Only Four Digit Number With Point, Ex:- 80.00, 41.56">';
  newRow.insertCell(3).innerHTML =
    '<button class="add-edu-btn" type="button" onclick="deleteRow(this)">Delete</button>';
}

// Delete Education Row
function deleteRow(button) {
  var row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}
