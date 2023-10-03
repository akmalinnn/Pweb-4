const form = document.getElementById('form');
        const thanks = document.getElementById('thanks');
        form.onsubmit = submit;

        const nama = document.getElementById('nama');
        nama.oninvalid = namainvalid;
        const namaerror = document.getElementById('namaerror');

        function namainvalid(event) {
            namaerror.removeAttribute('hidden');
        }

        const nrp = document.getElementById('nrp');
        nrp.oninvalid = nrpinvalid;
        const nrperror = document.getElementById('nrperror');

        function nrpinvalid(event) {
            nrperror.removeAttribute('hidden');
        }

        const email = document.getElementById('email');
        email.oninvalid = emailinvalid;
        const emailerror = document.getElementById('emailerror');

        function emailinvalid(event) {
            emailerror.removeAttribute('hidden');
        }

        const dosen = document.getElementById('dosen');
        dosen.oninvalid = doseninvalid;
        const dosenerror = document.getElementById('dosenerror');

        function doseninvalid(event) {
            dosenerror.removeAttribute('hidden');
        }

        const matkul = document.getElementById('matkul');
        matkul.oninvalid = matkulinvalid;
        const matkulerror = document.getElementById('matkulerror');

        function matkulinvalid(event) {
            matkulerror.removeAttribute('hidden');
        }
        const status = document.getElementById('status');
        status.oninvalid = statusinvalid;
        status.onclick = statusvalid;
        const statuserror = document.getElementById('statuserror');

        function statusinvalid(event) {
            statuserror.removeAttribute('hidden');
        }

