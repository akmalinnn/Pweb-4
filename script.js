function submitForm() {
    // Get values from the form fields
    var nama = document.getElementById("nama").value;
    var nrp = document.getElementById("nrp").value;
    var email = document.getElementById("email").value;
    var matkul = document.getElementById("matkul").value;
    var dosen = document.getElementById("dosen").value;

    // Check if any of the fields is empty
    if (nama === "") {
        alert("Masukkan Nama!");
    } else if (nrp === "") {
        alert("Masukkan NRP!");
    } else if (email === "") {
        alert("Masukkan Email!");
    } else if (matkul === "") {
        alert("Pilih Matkul!");
    } else if (dosen === "") {
        alert("Masukkan Nama Dosen!");
    } else {
        alert("Terimakasih, Form telah disubmit, " + nama + "!"); 
    }
}

