    function openPage() {
      document.querySelector('.container').style.display = 'none';
      document.getElementById('hal').classList.add('active');

      const musik = document.getElementById('mbg');
      musik.play();
    }